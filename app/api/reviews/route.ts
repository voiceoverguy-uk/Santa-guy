import { NextResponse } from "next/server";

const FALLBACK = { rating: 5.0, reviewCount: 119 };
const CACHE_TTL = 24 * 60 * 60 * 1000;

let cached: { rating: number; reviewCount: number; ts: number } | null = null;

async function findPlaceId(apiKey: string): Promise<string | null> {
  const url = new URL("https://maps.googleapis.com/maps/api/place/findplacefromtext/json");
  url.searchParams.set("input", "VoiceoverGuy");
  url.searchParams.set("inputtype", "textquery");
  url.searchParams.set("fields", "place_id");
  url.searchParams.set("key", apiKey);

  const res = await fetch(url.toString());
  if (!res.ok) return null;
  const data = await res.json();
  return data?.candidates?.[0]?.place_id ?? null;
}

async function fetchReviews(apiKey: string): Promise<{ rating: number; reviewCount: number }> {
  const placeId = await findPlaceId(apiKey);
  if (!placeId) return FALLBACK;

  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "rating,user_ratings_total");
  url.searchParams.set("key", apiKey);

  const res = await fetch(url.toString());
  if (!res.ok) return FALLBACK;
  const data = await res.json();

  const rating = data?.result?.rating;
  const reviewCount = data?.result?.user_ratings_total;

  if (typeof rating !== "number" || typeof reviewCount !== "number") return FALLBACK;

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
