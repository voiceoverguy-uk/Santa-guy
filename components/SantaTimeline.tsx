"use client";

import { santaStops } from "@/data/santaRouteStops";
import { getVisitedStops, getCurrentStopId } from "@/lib/santaRoute";

interface SantaTimelineProps {
  effectiveTime: Date;
}

export default function SantaTimeline({ effectiveTime }: SantaTimelineProps) {
  const visited = getVisitedStops(effectiveTime);
  const currentId = getCurrentStopId(effectiveTime);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

        <div className="space-y-3 sm:space-y-0">
          {santaStops.map((stop, i) => {
            const isVisited = visited.has(stop.id);
            const isCurrent = stop.id === currentId;
            const isLeft = i % 2 === 0;

            return (
              <div
                key={stop.id}
                className={`relative flex items-center gap-3 sm:gap-0 ${
                  isCurrent ? "z-10" : ""
                }`}
              >
                <div className="sm:hidden flex items-center gap-3 w-full">
                  <div className="flex-shrink-0 relative">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm border-2 transition-all ${
                        isCurrent
                          ? "border-santa-red bg-santa-red/20 shadow-[0_0_12px_rgba(156,6,11,0.4)]"
                          : isVisited
                          ? "border-santa-red/50 bg-santa-red/10"
                          : "border-white/20 bg-white/5"
                      }`}
                    >
                      {stop.flag}
                    </div>
                    {i < santaStops.length - 1 && (
                      <div
                        className={`absolute top-8 left-1/2 w-px h-6 -translate-x-1/2 ${
                          isVisited ? "bg-santa-red/30" : "bg-white/10"
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm font-medium truncate ${
                        isCurrent
                          ? "text-white"
                          : isVisited
                          ? "text-gray-400"
                          : "text-gray-500"
                      }`}
                    >
                      {stop.displayLabel}
                    </p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                      UTC{stop.utcOffset >= 0 ? "+" : ""}
                      {stop.utcOffset}
                    </p>
                  </div>
                  {isCurrent && (
                    <span className="flex-shrink-0 text-[10px] bg-santa-red/20 text-santa-red-light border border-santa-red/30 rounded-full px-2 py-0.5 uppercase tracking-wider font-medium">
                      Now
                    </span>
                  )}
                </div>

                <div className="hidden sm:flex items-center w-full">
                  <div className={`w-[calc(50%-20px)] ${isLeft ? "text-right pr-6" : ""}`}>
                    {isLeft && (
                      <TimelineCard
                        stop={stop}
                        isCurrent={isCurrent}
                        isVisited={isVisited}
                      />
                    )}
                  </div>

                  <div className="relative flex-shrink-0 w-10 flex items-center justify-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm border-2 transition-all z-10 ${
                        isCurrent
                          ? "border-santa-red bg-santa-red/20 shadow-[0_0_12px_rgba(156,6,11,0.4)]"
                          : isVisited
                          ? "border-santa-red/50 bg-santa-red/10"
                          : "border-white/20 bg-white/5"
                      }`}
                    >
                      {stop.flag}
                    </div>
                  </div>

                  <div className={`w-[calc(50%-20px)] ${!isLeft ? "pl-6" : ""}`}>
                    {!isLeft && (
                      <TimelineCard
                        stop={stop}
                        isCurrent={isCurrent}
                        isVisited={isVisited}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TimelineCard({
  stop,
  isCurrent,
  isVisited,
}: {
  stop: (typeof santaStops)[0];
  isCurrent: boolean;
  isVisited: boolean;
}) {
  return (
    <div
      className={`rounded-lg border p-3 transition-all ${
        isCurrent
          ? "border-santa-red/40 bg-santa-red/10"
          : isVisited
          ? "border-white/10 bg-white/5"
          : "border-white/5 bg-white/[0.02]"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <p
          className={`text-sm font-medium ${
            isCurrent ? "text-white" : isVisited ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {stop.displayLabel}
        </p>
        {isCurrent && (
          <span className="text-[10px] bg-santa-red/20 text-santa-red-light border border-santa-red/30 rounded-full px-2 py-0.5 uppercase tracking-wider font-medium">
            Now
          </span>
        )}
      </div>
      <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">
        UTC{stop.utcOffset >= 0 ? "+" : ""}
        {stop.utcOffset} · {stop.region}
      </p>
    </div>
  );
}
