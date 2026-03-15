"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const FALLBACK = { rating: 5.0, reviewCount: 119 };

export default function GoogleReviews() {
  const [data, setData] = useState(FALLBACK);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((d) => {
        if (typeof d.rating === "number" && typeof d.reviewCount === "number") {
          setData(d);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="bg-santa-cream py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((i) => {
            const fill = Math.min(Math.max(data.rating - (i - 1), 0), 1);
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

        <p className="text-lg sm:text-xl font-semibold text-gray-800 tracking-tight">
          Rated{" "}
          <span className="text-santa-red">{data.rating.toFixed(1)}</span> on
          Google by{" "}
          <span className="text-santa-red">{data.reviewCount}</span> Happy
          Clients
        </p>

        <a
          href="https://www.google.com/search?q=VoiceoverGuy+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-3 text-xs text-gray-500 hover:text-santa-red transition-colors uppercase tracking-wider"
        >
          Read reviews on Google
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  );
}
