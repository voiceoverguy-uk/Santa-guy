"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

type Reviews = {
  status: "verified" | "stale";
  rating: number;
  reviewCount: number;
  checkedAt: string;
};
type Display = Reviews | { status: "loading" | "unavailable" };

const STALE_TTL = 7 * 24 * 60 * 60 * 1000;
const REFRESH_INTERVAL = 5 * 60 * 1000;
const REQUEST_TIMEOUT = 8 * 1000;

function validReviews(value: unknown): value is Reviews {
  if (!value || typeof value !== "object") return false;
  const data = value as Record<string, unknown>;
  if (data.status !== "verified" && data.status !== "stale") return false;
  if (typeof data.rating !== "number" || !Number.isFinite(data.rating) ||
      data.rating < 1 || data.rating > 5 ||
      typeof data.reviewCount !== "number" || !Number.isSafeInteger(data.reviewCount) ||
      data.reviewCount < 0 || typeof data.checkedAt !== "string") return false;
  const checkedAt = Date.parse(data.checkedAt);
  return !Number.isNaN(checkedAt) && new Date(checkedAt).toISOString() === data.checkedAt &&
    checkedAt <= Date.now() && Date.now() - checkedAt <= STALE_TTL &&
    (data.status !== "verified" || Date.now() - checkedAt < 24 * 60 * 60 * 1000);
}

export default function GoogleReviews() {
  const [data, setData] = useState<Display>({ status: "loading" });

  useEffect(() => {
    let active = true;
    let pending = false;
    let lastAttempt = 0;
    let currentRequest: AbortController | null = null;

    const refresh = async () => {
      if (pending || document.visibilityState === "hidden") return;
      pending = true;
      lastAttempt = Date.now();
      const controller = new AbortController();
      currentRequest = controller;
      const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT);
      try {
        const response = await fetch("/api/reviews", {
          cache: "no-store",
          signal: controller.signal,
        });
        const body: unknown = await response.json();
        if (!active) return;
        if (response.status === 503 && body && typeof body === "object" &&
            (body as { status?: unknown }).status === "unavailable") {
          setData(previous => {
            if (previous.status !== "verified" && previous.status !== "stale") {
              return { status: "unavailable" };
            }
            return validReviews({ ...previous, status: "stale" })
              ? { ...previous, status: "stale" } : { status: "unavailable" };
          });
        } else if (response.ok && validReviews(body)) {
          setData(body);
        } else {
          throw new Error("Invalid reviews response");
        }
      } catch {
        if (active) setData(previous => {
          if (previous.status !== "verified" && previous.status !== "stale") {
            return { status: "unavailable" };
          }
          return validReviews({ ...previous, status: "stale" })
            ? { ...previous, status: "stale" } : { status: "unavailable" };
        });
      } finally {
        window.clearTimeout(timeout);
        currentRequest = null;
        pending = false;
      }
    };

    void refresh();
    const onVisible = () => {
      if (document.visibilityState === "visible") {
        setData(previous => {
          if (previous.status !== "verified" && previous.status !== "stale") return previous;
          if (!validReviews({ ...previous, status: "stale" })) return { status: "unavailable" };
          return previous;
        });
        if (Date.now() - lastAttempt >= REFRESH_INTERVAL) void refresh();
      }
    };
    document.addEventListener("visibilitychange", onVisible);
    const timer = window.setInterval(onVisible, REFRESH_INTERVAL);
    return () => {
      active = false;
      currentRequest?.abort();
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  const hasReviews = data.status === "verified" || data.status === "stale";
  const rating = hasReviews ? data.rating : 0;

  return (
    <div className="mt-10 sm:mt-12 max-w-4xl mx-auto text-center">
      <div className="flex items-center justify-center gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((i) => {
          const fill = Math.min(Math.max(rating - (i - 1), 0), 1);
          return (
            <span key={i} className="relative inline-block w-6 h-6 sm:w-7 sm:h-7">
              <Star
                className="absolute inset-0 w-full h-full text-gray-300"
                strokeWidth={1.5}
              />
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Star
                  className="w-6 h-6 sm:w-7 sm:h-7 text-santa-gold fill-santa-gold"
                  strokeWidth={1.5}
                />
              </span>
            </span>
          );
        })}
      </div>

      {hasReviews ? (
        <>
          <p className="text-lg sm:text-xl font-semibold text-gray-800 tracking-tight">
            Rated{" "}
            <span className="text-santa-red">{data.rating.toFixed(1)}</span> on
            Google by{" "}
            <span className="text-santa-red">{data.reviewCount}</span> Happy
            Clients
          </p>
          {data.status === "stale" && (
            <p className="mt-1 text-sm text-gray-500">
              Last checked {new Date(data.checkedAt).toLocaleDateString()}; temporarily unable to refresh.
            </p>
          )}
        </>
      ) : (
        <p className="text-lg sm:text-xl font-semibold text-gray-800 tracking-tight">
          {data.status === "loading" ? "Loading Google reviews" : "Google reviews temporarily unavailable"}
        </p>
      )}

      <a
        // Exact Places API (New) reviewsUri for VoiceoverGuy, verified by websiteUri.
        href="https://www.google.com/maps/place//data=!4m4!3m3!1s0x4879672543b8552f:0xa3cdce7ae1235f05!9m1!1b1?g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 mt-3 text-xs text-gray-500 hover:text-santa-red transition-colors uppercase tracking-wider"
      >
        Read reviews on Google
        <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );
}