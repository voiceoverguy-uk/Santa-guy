"use client";

import { santaStops } from "@/data/santaRouteStops";
import { getVisitedStops, getCurrentStopId, type MapPosition } from "@/lib/santaRoute";

interface SantaMapProps {
  effectiveTime: Date;
  mapPosition: MapPosition;
}

export default function SantaMap({ effectiveTime, mapPosition }: SantaMapProps) {
  const visited = getVisitedStops(effectiveTime);
  const currentId = getCurrentStopId(effectiveTime);

  const visitedStops = santaStops.filter((s) => visited.has(s.id));
  const pathPoints = visitedStops.map((s) => ({
    x: ((s.lng + 180) / 360) * 100,
    y: ((90 - s.lat) / 180) * 100,
  }));

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a1628]">
      <div className="relative w-full" style={{ aspectRatio: "2 / 1" }}>
        <svg
          viewBox="0 0 1000 500"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#9C060B" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#9C060B" stopOpacity="0" />
            </radialGradient>
            <filter id="pulse-glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect width="1000" height="500" fill="transparent" />

          <g opacity="0.15" stroke="#4a6fa5" strokeWidth="0.5" fill="none">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <line key={`h${i}`} x1="0" y1={i * 71.4} x2="1000" y2={i * 71.4} />
            ))}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
              <line key={`v${i}`} x1={i * 83.3} y1="0" x2={i * 83.3} y2="500" />
            ))}
          </g>

          <ContinentPaths />

          {pathPoints.length > 1 && (
            <polyline
              points={pathPoints.map((p) => `${p.x * 10},${p.y * 5}`).join(" ")}
              fill="none"
              stroke="#9C060B"
              strokeWidth="2"
              strokeDasharray="6,3"
              opacity="0.5"
            />
          )}

          {santaStops.map((stop) => {
            const sx = ((stop.lng + 180) / 360) * 1000;
            const sy = ((90 - stop.lat) / 180) * 500;
            const isVisited = visited.has(stop.id);
            const isCurrent = stop.id === currentId;

            return (
              <g key={stop.id}>
                {isCurrent && (
                  <>
                    <circle cx={sx} cy={sy} r="12" fill="url(#glow)">
                      <animate
                        attributeName="r"
                        values="8;16;8"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.8;0.3;0.8"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx={sx} cy={sy} r="4" fill="#9C060B" filter="url(#pulse-glow)" />
                  </>
                )}
                {isVisited && !isCurrent && (
                  <circle cx={sx} cy={sy} r="3" fill="#9C060B" opacity="0.7" />
                )}
                {!isVisited && !isCurrent && (
                  <circle cx={sx} cy={sy} r="2.5" fill="white" opacity="0.2" />
                )}
              </g>
            );
          })}

          {mapPosition.y < 95 && (
            <g
              transform={`translate(${mapPosition.x * 10}, ${mapPosition.y * 5})`}
              filter="url(#pulse-glow)"
            >
              <text
                x="0"
                y="0"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="24"
                className="select-none"
              >
                🎅
              </text>
            </g>
          )}
        </svg>
      </div>

      <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs text-gray-400">
        Estimated route based on local midnight across time zones
      </div>
    </div>
  );
}

function ContinentPaths() {
  return (
    <g fill="#1e3a5f" stroke="#2a4d6e" strokeWidth="0.5" opacity="0.6">
      <path d="M130,95 L180,80 L220,85 L260,75 L300,80 L320,95 L330,110 L310,130 L280,140 L250,135 L230,120 L200,110 L170,105 Z" />
      <path d="M270,150 L310,145 L340,155 L380,150 L400,160 L420,175 L410,200 L380,220 L340,230 L310,225 L280,210 L270,190 L260,170 Z" />
      <path d="M440,80 L480,60 L520,55 L570,60 L620,55 L680,60 L720,70 L750,85 L760,105 L740,120 L700,130 L660,125 L620,115 L580,120 L540,130 L510,140 L480,135 L460,120 L445,100 Z" />
      <path d="M530,145 L570,135 L610,140 L650,145 L680,160 L690,180 L670,200 L640,210 L610,215 L580,205 L560,190 L540,170 Z" />
      <path d="M450,200 L500,185 L540,190 L570,210 L580,240 L560,270 L530,290 L500,295 L470,280 L450,260 L440,230 Z" />
      <path d="M750,250 L800,230 L850,240 L880,270 L870,310 L840,340 L800,350 L770,330 L755,300 L745,270 Z" />
      <path d="M760,140 L810,130 L850,135 L870,150 L860,170 L830,180 L790,175 L770,160 Z" />
    </g>
  );
}
