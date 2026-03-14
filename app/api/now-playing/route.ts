import { NextResponse } from "next/server";

const SONG_URL = "https://www.santaradio.co.uk/bringsong2.php";

let cachedTrack: { title: string; artist: string; raw: string; fetchedAt: number } = {
  title: "",
  artist: "",
  raw: "",
  fetchedAt: 0,
};

const CACHE_TTL = 10_000;

async function fetchNowPlaying(): Promise<{ title: string; artist: string; raw: string }> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const res = await fetch(`${SONG_URL}?=${Date.now()}`, {
      signal: controller.signal,
    });

    if (!res.ok) return { title: "", artist: "", raw: "" };

    const html = await res.text();
    const textMatch = html.replace(/<[^>]*>/g, "").trim();

    if (!textMatch) return { title: "", artist: "", raw: "" };

    const raw = textMatch;
    const parts = raw.split(" - ");
    if (parts.length >= 2) {
      return { artist: parts[0].trim(), title: parts.slice(1).join(" - ").trim(), raw };
    }
    return { title: raw, artist: "", raw };
  } finally {
    clearTimeout(timeout);
  }
}

export async function GET() {
  const now = Date.now();
  if (cachedTrack.fetchedAt > 0 && now - cachedTrack.fetchedAt < CACHE_TTL) {
    return NextResponse.json({
      title: cachedTrack.title,
      artist: cachedTrack.artist,
      raw: cachedTrack.raw,
    });
  }

  try {
    const track = await fetchNowPlaying();
    cachedTrack = { ...track, fetchedAt: now };
    return NextResponse.json(track);
  } catch {
    return NextResponse.json({
      title: cachedTrack.title || "",
      artist: cachedTrack.artist || "",
      raw: cachedTrack.raw || "",
    });
  }
}
