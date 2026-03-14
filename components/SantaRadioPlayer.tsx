"use client";

import { Play, Pause } from "lucide-react";
import { useRadio } from "@/contexts/RadioContext";

export default function SantaRadioPlayer() {
  const { playing, loading, toggle } = useRadio();

  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="relative bg-gray-50 rounded-2xl p-10 sm:p-14 flex flex-col items-center overflow-hidden">
        <img
          src="/images/santa-xmas-bg.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <button
          onClick={toggle}
          aria-label={playing ? "Pause Santa Radio" : "Play Santa Radio"}
          className={`relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 bg-santa-red text-white ${loading ? "animate-pulse" : ""}`}
        >
          {playing ? (
            <Pause className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" />
          ) : (
            <Play className="w-10 h-10 sm:w-12 sm:h-12 ml-1" fill="currentColor" />
          )}
        </button>
        <p className="relative z-10 mt-6 text-lg font-semibold text-white">
          {loading ? "Connecting..." : playing ? "Now Playing" : "Listen Live"}
        </p>
        <p className="relative z-10 mt-1 text-sm text-white/80">
          {playing ? "Santa Radio — Non-stop Christmas music" : "Tap to start streaming Santa Radio"}
        </p>
      </div>
    </div>
  );
}
