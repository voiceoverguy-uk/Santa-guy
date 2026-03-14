"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getDashboardData } from "@/lib/santaRoute";
import { santaStops } from "@/data/santaRouteStops";
import {
  type PreviewState,
  getEffectiveTime,
  loadPreviewState,
  getDefaultPreviewState,
} from "@/lib/santaPreview";
import SantaMap from "./SantaMap";
import SantaStats from "./SantaStats";
import SantaStory from "./SantaStory";
import SantaTimeline from "./SantaTimeline";
import SantaPreviewPanel from "./SantaPreviewPanel";
import NotifySignup from "./NotifySignup";

const funFacts = [
  "In Iceland, 13 Yule Lads visit children on the 13 nights before Christmas, each leaving a gift in shoes left on windowsills.",
  "Ukrainians decorate Christmas trees with spider web ornaments — finding a spider web on Christmas morning is considered good luck!",
  "In Norway, brooms are hidden on Christmas Eve to prevent witches from stealing them for a ride.",
  "Venezuelans roller-skate to Christmas morning mass — roads in Caracas are closed to traffic to make way for skaters.",
  "In Catalonia, families keep a 'Caga Tió' — a small hollow log that 'poops' out presents when beaten with sticks on Christmas Eve.",
  "Japanese families traditionally eat KFC for Christmas dinner — orders must be placed weeks in advance!",
  "In the Czech Republic, single women throw a shoe over their shoulder on Christmas Eve — if it lands pointing toward the door, they'll marry within the year.",
  "Australians often celebrate Christmas with a BBQ on the beach, and Santa sometimes arrives by surfboard!",
  "In Finland, families visit saunas on Christmas Eve before the celebrations begin — a tradition dating back centuries.",
  "Greenland's Christmas delicacy is mattak — raw whale skin with blubber — along with kiviak, a fermented bird dish.",
];

function SantaTrackerInner() {
  const searchParams = useSearchParams();
  const showPreview = searchParams.get("preview") === "1";

  const [previewState, setPreviewState] = useState<PreviewState>(getDefaultPreviewState);
  const [effectiveTime, setEffectiveTime] = useState(() => new Date());
  const [mounted, setMounted] = useState(false);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    if (showPreview) {
      setPreviewState(loadPreviewState());
    }
  }, [showPreview]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEffectiveTime(getEffectiveTime(previewState));
    }, 1000);
    return () => clearInterval(interval);
  }, [previewState]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePreviewChange = useCallback((state: PreviewState) => {
    setPreviewState(state);
    setEffectiveTime(getEffectiveTime(state));
  }, []);

  if (!mounted) {
    return <TrackerSkeleton />;
  }

  const data = getDashboardData(effectiveTime);
  const isLive = data.mode === "LIVE";
  const isComplete = data.mode === "COMPLETE";

  const statusColor =
    isLive
      ? "bg-green-500"
      : isComplete
      ? "bg-santa-gold"
      : data.mode === "PREPARING"
      ? "bg-yellow-500"
      : "bg-blue-500";

  const statusLabel =
    isLive
      ? "Delivering Now"
      : isComplete
      ? "Journey Complete"
      : data.mode === "PREPARING"
      ? "Preparing for Takeoff"
      : "At the North Pole";

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {previewState.enabled && (
        <div className="bg-santa-gold/10 border-b border-santa-gold/20 px-4 py-2 text-center">
          <span className="text-xs text-santa-gold font-medium uppercase tracking-wider">
            Preview Mode Active — Simulated Christmas Eve
          </span>
        </div>
      )}

      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0 star-field" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1628]/50 to-[#0a1628]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className={`w-2 h-2 rounded-full ${statusColor} animate-pulse`} />
            <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">
              {statusLabel}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Track Santa&apos;s Journey
            <br />
            <span className="text-santa-red">Around the World</span>
          </h1>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {isLive || isComplete
              ? data.statusSubtext
              : "Follow Santa as Christmas Eve midnight sweeps across the globe — from the Pacific Islands to Hawaii, watch his estimated journey unfold in real time."}
          </p>

          {!isLive && !isComplete && (
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                Countdown to Santa&apos;s Departure
              </p>
              <div className="inline-flex items-center gap-3 sm:gap-4">
                {[
                  { label: "Days", value: data.countdownToChristmasEve.days },
                  { label: "Hours", value: data.countdownToChristmasEve.hours },
                  { label: "Mins", value: data.countdownToChristmasEve.minutes },
                  { label: "Secs", value: data.countdownToChristmasEve.seconds },
                ].map((unit, i, arr) => (
                  <div key={unit.label} className="flex items-center gap-3 sm:gap-4">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-santa-red tabular-nums">
                        {String(unit.value).padStart(2, "0")}
                      </div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">
                        {unit.label}
                      </div>
                    </div>
                    {i < arr.length - 1 && (
                      <span className="text-xl text-gray-600 font-light">:</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {(isLive || isComplete) && (
            <div className="mt-6 inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-6 py-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-santa-red tabular-nums">
                  {data.progressPercent.toFixed(1)}%
                </div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">
                  Journey Progress
                </div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-santa-gold tabular-nums">
                  {data.visitedCount}/{santaStops.length}
                </div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">
                  Regions Visited
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <SantaMap effectiveTime={effectiveTime} mapPosition={data.mapPosition} />
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
            Live Dashboard
          </h2>
          <SantaStats effectiveTime={effectiveTime} />
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <SantaStory effectiveTime={effectiveTime} />
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 text-center">
            Santa&apos;s Estimated Journey Timeline
          </h2>
          <p className="text-center text-xs text-gray-500 mb-6">
            Estimated from Santa&apos;s worldwide Christmas Eve route
          </p>
          <SantaTimeline effectiveTime={effectiveTime} />
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 text-center">
            Christmas Around the World
          </h2>
          <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 min-h-[80px]">
            <span className="text-santa-gold text-2xl mr-2">🎄</span>
            <p className="inline text-gray-300 text-sm leading-relaxed">
              {funFacts[currentFactIndex]}
            </p>
          </div>
        </div>
      </section>

      {!isLive && !isComplete && (
        <section className="px-4 sm:px-6 pb-12">
          <div className="max-w-3xl mx-auto">
            <NotifySignup />
          </div>
        </section>
      )}

      <section className="px-4 sm:px-6 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-2xl border border-santa-red/20 bg-santa-red/5 p-8 sm:p-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Want Santa&apos;s Voice for Your Project?
            </h2>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Guy Harris is the UK&apos;s trusted Voice of Santa — available for
              radio, TV, podcasts, campaigns, and festive voiceover.
            </p>
            <a
              href="/hire-santa-voice"
              className="inline-block px-6 py-3 bg-santa-red text-white text-sm font-semibold rounded-lg hover:bg-santa-red-dark transition-colors shadow-lg"
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>

      {showPreview && (
        <SantaPreviewPanel
          previewState={previewState}
          onPreviewChange={handlePreviewChange}
          effectiveTime={effectiveTime}
        />
      )}
    </div>
  );
}

function TrackerSkeleton() {
  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-4">🎅</div>
        <div className="text-gray-500 text-sm">Loading Santa Tracker...</div>
      </div>
    </div>
  );
}

export default function SantaTrackerClient() {
  return (
    <Suspense fallback={<TrackerSkeleton />}>
      <SantaTrackerInner />
    </Suspense>
  );
}
