import { NextResponse } from "next/server";

const STREAM_URL = "https://global.citrus3.com:8164/stream";

let cachedTrack: { title: string; artist: string; raw: string; fetchedAt: number } = {
  title: "",
  artist: "",
  raw: "",
  fetchedAt: 0,
};

const CACHE_TTL = 10_000;

async function fetchIcyMetadata(): Promise<{ title: string; artist: string; raw: string }> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const res = await fetch(STREAM_URL, {
      headers: { "Icy-MetaData": "1" },
      signal: controller.signal,
    });

    const metaInt = parseInt(res.headers.get("icy-metaint") || "0", 10);
    if (!metaInt || !res.body) {
      return { title: "", artist: "", raw: "" };
    }

    const reader = res.body.getReader();
    let bytesRead = 0;
    const chunks: Uint8Array[] = [];
    const needBytes = metaInt * 2 + 4096;

    while (bytesRead < needBytes) {
      const { done, value } = await reader.read();
      if (done || !value) break;
      chunks.push(value);
      bytesRead += value.length;
    }

    reader.cancel();

    const combined = new Uint8Array(bytesRead);
    let offset = 0;
    for (const chunk of chunks) {
      combined.set(chunk, offset);
      offset += chunk.length;
    }

    let pos = metaInt;
    while (pos < combined.length) {
      const metaLength = combined[pos] * 16;
      if (metaLength > 0) {
        const metaStart = pos + 1;
        const metaEnd = metaStart + metaLength;
        const metaBytes = combined.slice(metaStart, Math.min(metaEnd, combined.length));
        const metaString = new TextDecoder("utf-8").decode(metaBytes).replace(/\0+$/g, "");

        const match = metaString.match(/StreamTitle='(.+?)'/);
        if (match && match[1]) {
          const raw = match[1].trim();
          const parts = raw.split(" - ");
          if (parts.length >= 2) {
            return { artist: parts[0].trim(), title: parts.slice(1).join(" - ").trim(), raw };
          }
          return { title: raw, artist: "", raw };
        }
      }
      pos += 1 + (combined[pos] * 16) + metaInt;
    }

    return { title: "", artist: "", raw: "" };
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
    const track = await fetchIcyMetadata();
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
