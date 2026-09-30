import { NextResponse } from "next/server";

const CACHE_TTL = 24 * 60 * 60 * 1000;
const STALE_TTL = 7 * 24 * 60 * 60 * 1000;
const RETRY_BASE = 60 * 1000;
const RETRY_MAX = 15 * 60 * 1000;
const REQUEST_TIMEOUT = 5000;

type Reviews = { rating: number; reviewCount: number; checkedAt: number };

let cached: Reviews | null = null;
let inFlight: Promise<void> | null = null;
let retryAfter = 0;
let failures = 0;

async function providerJson(url: URL): Promise<unknown> {
  const res = await fetch(url.toString(), {
    cache: "no-store",
    signal: AbortSignal.timeout(REQUEST_TIMEOUT),
  });
  if (!res.ok) throw new Error("Places request failed");
  return res.json();
}

async function findPlaceIds(apiKey: string): Promise<string[]> {
  const url = new URL("https://maps.googleapis.com/maps/api/place/findplacefromtext/json");
  url.searchParams.set("input", "VoiceoverGuy");
  url.searchParams.set("inputtype", "textquery");
  url.searchParams.set("fields", "place_id");
  url.searchParams.set("key", apiKey);

  const data = await providerJson(url) as { status?: unknown; candidates?: unknown };
  if (data?.status !== "OK" || !Array.isArray(data.candidates)) throw new Error("Places search failed");
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

async function fetchPlace(apiKey: string, placeId: string): Promise<Record<string, unknown>> {
  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "name,website,rating,user_ratings_total");
  url.searchParams.set("key", apiKey);

  const data = await providerJson(url) as { status?: unknown; result?: unknown };
  if (data?.status !== "OK" || !data.result || typeof data.result !== "object" ||
      Array.isArray(data.result)) throw new Error("Places details failed");
  return data.result as Record<string, unknown>;
}

async function fetchReviews(apiKey: string): Promise<{ rating: number; reviewCount: number }> {
  const placeIds = await findPlaceIds(apiKey);
  const matches = [];
  for (const placeId of placeIds) {
    const result = await fetchPlace(apiKey, placeId);
    // An unresolved candidate means we cannot establish a unique match.
    if (isVerifiedBusiness(result)) matches.push(result);
  }
  if (matches.length !== 1) throw new Error("No unique verified business");

  const { rating, user_ratings_total: reviewCount } = matches[0];
  if (typeof rating !== "number" || !Number.isFinite(rating) || rating < 1 || rating > 5 ||
      typeof reviewCount !== "number" || !Number.isSafeInteger(reviewCount) || reviewCount < 0) {
    throw new Error("Invalid Places rating");
  }

  return { rating, reviewCount };
}

async function refresh(): Promise<void> {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    if (!apiKey) throw new Error("Missing Places credentials");
    const result = await fetchReviews(apiKey);
    cached = { ...result, checkedAt: Date.now() };
    failures = 0;
    retryAfter = 0;
  } catch {
    failures = Math.min(failures + 1, 5);
    retryAfter = Date.now() + Math.min(RETRY_BASE * 2 ** (failures - 1), RETRY_MAX);
  }
}

export async function GET() {
  const now = Date.now();
  if (!cached || now - cached.checkedAt >= CACHE_TTL) {
    if (inFlight) {
      await inFlight;
    } else if (now >= retryAfter) {
      const pending = refresh();
      inFlight = pending;
      try {
        await pending;
      } finally {
        inFlight = null;
      }
    }
  }

  const checkedAt = cached?.checkedAt;
  const age = checkedAt === undefined ? Infinity : Date.now() - checkedAt;
  const headers = { "Cache-Control": "no-store" };
  if (cached && age >= 0 && age <= STALE_TTL) {
    return NextResponse.json({
      status: age < CACHE_TTL ? "verified" : "stale",
      rating: cached.rating,
      reviewCount: cached.reviewCount,
      checkedAt: new Date(cached.checkedAt).toISOString(),
    }, { headers });
  }
  return NextResponse.json({ status: "unavailable" }, { status: 503, headers });
}