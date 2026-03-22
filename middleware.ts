import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "www.santaguy.co.uk";

const LEGACY_REDIRECTS: Record<string, string> = {
  "/santa-message": "/santa-guy-message",
  "/contact-santa": "/contact-santa-guy",
};

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const host = request.headers.get("host") || "";
  const proto = request.headers.get("x-forwarded-proto") || "https";
  const hostWithoutPort = host.replace(/:\d+$/, "");

  const isProduction = hostWithoutPort === CANONICAL_HOST ||
    hostWithoutPort === "santaguy.co.uk" ||
    hostWithoutPort.endsWith(".santaguy.co.uk");

  let needsRedirect = false;
  let finalProto = proto;
  let finalHost = host;
  let finalPath = pathname;

  if (isProduction) {
    if (finalProto === "http") {
      finalProto = "https";
      needsRedirect = true;
    }

    if (hostWithoutPort !== CANONICAL_HOST) {
      finalHost = CANONICAL_HOST;
      needsRedirect = true;
    }
  }

  if (finalPath !== "/" && finalPath.endsWith("/")) {
    finalPath = finalPath.replace(/\/+$/, "");
    needsRedirect = true;
  }

  const cleanPath = finalPath.toLowerCase();
  for (const [oldPath, newPath] of Object.entries(LEGACY_REDIRECTS)) {
    if (cleanPath === oldPath || cleanPath.startsWith(oldPath + "/")) {
      finalPath = newPath;
      needsRedirect = true;
      break;
    }
  }

  if (needsRedirect) {
    const finalUrl = `${finalProto}://${finalHost}${finalPath}${search}`;
    return NextResponse.redirect(finalUrl, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    {
      source: "/((?!_next/static|_next/image|favicon\\.ico|apple-touch-icon\\.png|icon-192\\.png|icon-512\\.png|images/|demos/|clients/|ringtones/|santaguy-logo|santa-guy-favicon|santa-guy-logo|santa-guy-voice-over|santa-radio-logo|santa-post-stamp|api/).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
