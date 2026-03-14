"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getDashboardData } from "@/lib/santaRoute";

export default function SantaTrackerBanner() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!now) {
    return (
      <section className="bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 star-field opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Track Santa&apos;s Journey
              <br />
              <span className="text-santa-red">Around the World</span>
            </h2>
          </div>
        </div>
      </section>
    );
  }

  const data = getDashboardData(now);
  const isLive = data.mode === "LIVE";
  const isComplete = data.mode === "COMPLETE";

  const statusLabel = isLive
    ? data.state === "UK_SPECIAL_WINDOW"
      ? "🇬🇧 Delivering in the UK Now!"
      : `Delivering in ${data.currentStopRegion}`
    : isComplete
    ? "Journey Complete"
    : data.mode === "PREPARING"
    ? "Final Preparations Underway"
    : "At the North Pole";

  const dotColor = isLive
    ? data.state === "UK_SPECIAL_WINDOW"
      ? "bg-santa-red animate-pulse"
      : "bg-green-400 animate-pulse"
    : isComplete
    ? "bg-santa-gold"
    : "bg-blue-400";

  return (
    <section className="bg-[#0a1628] relative overflow-hidden">
      <div className="absolute inset-0 star-field opacity-60" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className={`flex flex-col ${isLive || isComplete ? "lg:flex-row" : ""} items-center gap-8 lg:gap-12`}>

          <div className={`flex-1 text-center ${isLive || isComplete ? "lg:text-left" : ""}`}>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 mb-4">
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${dotColor}`} />
              <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">
                {statusLabel}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Track Santa&apos;s Journey
              <br />
              <span className="text-santa-red">Around the World</span>
            </h2>

            <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              {isLive
                ? `Santa is live! Follow his Christmas Eve journey in real time — from the Pacific Islands to Hawaii, watch as he delivers gifts to ${(data.estimatedGifts / 1_000_000).toFixed(0)}M+ children.`
                : isComplete
                ? "Santa's journey is complete! Relive the route and explore fun facts from every region he visited."
                : "Follow Santa's Christmas Eve journey in real time. Live route updates, fun facts, a countdown, and the full itinerary — from the Pacific Islands to Hawaii."}
            </p>

            <div className="mt-6">
              <Link
                href="/santa-tracker"
                className="inline-flex items-center gap-2 px-6 py-3 bg-santa-red text-white text-sm font-semibold rounded-lg hover:bg-santa-red-dark transition-colors shadow-lg"
              >
                {isLive ? "Track Santa Now" : "Open the Tracker"}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          {(isLive || isComplete) && (
            <div className="flex-shrink-0 w-full lg:w-auto">
              <LiveStats data={data} />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

function LiveStats({ data }: { data: ReturnType<typeof getDashboardData> }) {
  const stats = [
    { label: "Journey Progress", value: `${data.progressPercent.toFixed(1)}%` },
    { label: "Regions Visited", value: `${data.visitedCount} / 18` },
    {
      label: "Gifts Delivered",
      value:
        data.estimatedGifts >= 1_000_000_000
          ? `${(data.estimatedGifts / 1_000_000_000).toFixed(1)}B`
          : `${(data.estimatedGifts / 1_000_000).toFixed(0)}M`,
    },
    { label: "Current Location", value: `${data.currentStopFlag} ${data.currentStopName}` },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 w-full lg:w-64">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-white/5 border border-white/10 rounded-xl p-3 text-center"
        >
          <div className="text-white font-bold text-sm sm:text-base tabular-nums truncate">
            {s.value}
          </div>
          <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
