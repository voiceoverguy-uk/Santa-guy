"use client";

import { Play, Square, Radio } from "lucide-react";
import { useRadio } from "@/contexts/RadioContext";

export default function MiniRadioPlayer() {
  const { playing, loading, active, toggle, stop } = useRadio();

  if (!active) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
      <div className="flex items-center gap-3 bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-full pl-4 pr-2 py-2 shadow-2xl">
        <div className="flex items-center gap-2">
          <Radio size={14} className={`text-santa-red ${playing ? "animate-pulse" : ""}`} />
          <span className="text-xs font-medium text-white whitespace-nowrap">
            {loading ? "Connecting..." : playing ? "Santa Radio" : "Paused"}
          </span>
        </div>

        {playing && (
          <div className="flex items-center gap-[2px] px-1">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-[3px] bg-santa-red rounded-full"
                style={{
                  animation: `equalizer 0.8s ease-in-out ${i * 0.15}s infinite alternate`,
                  height: "12px",
                }}
              />
            ))}
          </div>
        )}

        <button
          onClick={toggle}
          aria-label={playing ? "Pause Santa Radio" : "Play Santa Radio"}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            playing
              ? "bg-white/10 hover:bg-white/20 text-white"
              : "bg-santa-red hover:bg-santa-red-dark text-white"
          } ${loading ? "animate-pulse" : ""}`}
        >
          {playing ? (
            <Square size={12} fill="currentColor" />
          ) : (
            <Play size={12} fill="currentColor" className="ml-0.5" />
          )}
        </button>

        <button
          onClick={stop}
          aria-label="Close radio player"
          className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <span className="text-sm font-medium">&times;</span>
        </button>
      </div>
    </div>
  );
}
