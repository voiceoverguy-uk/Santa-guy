import { NextResponse } from "next/server";

const FALLBACK = { rating: 5.0, reviewCount: 119 };
const CACHE_TTL = 24 * 60 * 60 * 1000;

let cached: { rating: number; reviewCount: number; ts: number } | null = null;

async function findPlaceIds(apiKey: string): Promise<string[]> {
  const url = new URL("https://maps.googleapis.com/maps/api/place/findplacefromtext/json");
  url.searchParams.set("input", "VoiceoverGuy");
  url.searchParams.set("inputtype", "textquery");
  url.searchParams.set("fields", "place_id");
  url.searchParams.set("key", apiKey);

  const res = await fetch(url.toString());
  if (!res.ok) return [];
  const data = await res.json();
  if (data?.status !== "OK" || !Array.isArray(data.candidates)) return [];
  return [...new Set<string>(data.candidates
    .map((candidate: { place_id?: unknown } | null) => candidate?.place_id)
    .filter((id: unknown): id is string => typeof id === "string" && id.length > 0))];
}

function isVerifiedBusiness(result: { name?: unknown; website?: unknown }): boolean {
  if (typeof result.name !== "string" || result.name.trim().toLowerCase() !== "voiceoverguy") {
    return false;
  }
  if (typeof result.website !== "string") return false;
  try {
    const website = new URL(result.website);
    return (website.protocol === "https:" || website.protocol === "http:") &&
      !website.username && !website.password &&
      (website.hostname === "voiceoverguy.co.uk" || website.hostname === "www.voiceoverguy.co.uk");
  } catch {
    return false;
  }
}

async function fetchPlace(apiKey: string, placeId: string) {
  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "name,website,rating,user_ratings_total");
  url.searchParams.set("key", apiKey);

  const res = await fetch(url.toString());
  if (!res.ok) return null;
  const data = await res.json();
  return data?.status === "OK" ? data.result : null;
}

async function fetchReviews(apiKey: string): Promise<{ rating: number; reviewCount: number }> {
  const placeIds = await findPlaceIds(apiKey);
  const matches = [];
  for (const placeId of placeIds) {
    const result = await fetchPlace(apiKey, placeId);
    // An unresolved candidate means we cannot establish a unique match.
    if (!result) return FALLBACK;
    if (isVerifiedBusiness(result)) matches.push(result);
  }
  if (matches.length !== 1) return FALLBACK;

  const { rating, user_ratings_total: reviewCount } = matches[0];
  if (typeof rating !== "number" || !Number.isFinite(rating) || rating < 1 || rating > 5 ||
      typeof reviewCount !== "number" || !Number.isSafeInteger(reviewCount) || reviewCount < 0) {
    return FALLBACK;
  }

  return { rating, reviewCount };
}

export async function GET() {
  if (cached && Date.now() - cached.ts < CACHE_TTL) {
    return NextResponse.json({ rating: cached.rating, reviewCount: cached.reviewCount });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return NextResponse.json(FALLBACK);
  }

  try {
    const result = await fetchReviews(apiKey);
    cached = { ...result, ts: Date.now() };
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(FALLBACK);
  }
}
