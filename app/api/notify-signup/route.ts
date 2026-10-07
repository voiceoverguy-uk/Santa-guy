import { NextResponse } from "next/server";

// Retired deliberately: never accept or forward subscriber data.
export async function POST() {
  return NextResponse.json(
    {
      error: "SantaGuy tracker reminders have been retired. Visit Santa Radio for the tracker.",
      trackerUrl: "https://www.santaradio.co.uk/santa-tracker",
    },
    { status: 410, headers: { "Cache-Control": "no-store" } },
  );
}
