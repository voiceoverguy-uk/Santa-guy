"use client";

import { useState, useRef, useCallback } from "react";
import { Play, Pause } from "lucide-react";

const STREAM_URL = "https://global.citrus3.com:8164/stream";

export default function SantaRadioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = useCallback(() => {
    if (playing) {
      audioRef.current?.pause();
      audioRef.current = null;
      setPlaying(false);
      setLoading(false);
    } else {
      const audio = new Audio(STREAM_URL);
      audioRef.current = audio;
      setLoading(true);
      audio.addEventListener("playing", () => {
        setLoading(false);
        setPlaying(true);
      });
      audio.addEventListener("error", () => {
        setLoading(false);
        setPlaying(false);
      });
      audio.play().catch(() => {
        setLoading(false);
      });
    }
  }, [playing]);

  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="bg-gray-50 rounded-2xl p-10 sm:p-14 flex flex-col items-center">
        <button
          onClick={toggle}
          aria-label={playing ? "Pause Santa Radio" : "Play Santa Radio"}
          className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${
            playing
              ? "bg-santa-red text-white"
              : "bg-santa-red text-white"
          } ${loading ? "animate-pulse" : ""}`}
        >
          {playing ? (
            <Pause className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" />
          ) : (
            <Play className="w-10 h-10 sm:w-12 sm:h-12 ml-1" fill="currentColor" />
          )}
        </button>
        <p className="mt-6 text-lg font-semibold text-gray-900">
          {loading ? "Connecting..." : playing ? "Now Playing" : "Listen Live"}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          {playing ? "Santa Radio — Non-stop Christmas music" : "Tap to start streaming Santa Radio"}
        </p>
      </div>
    </div>
  );
}
