import { NextResponse } from "next/server";

// Keep a harmless tombstone for any previously configured external scheduler.
// No contact lookup, provider call or email send is allowed here.
export async function GET() {
  return NextResponse.json(
    {
      error: "SantaGuy tracker reminder sending has been retired.",
      trackerUrl: "https://www.santaradio.co.uk/santa-tracker",
    },
    { status: 410, headers: { "Cache-Control": "no-store" } },
  );
}
