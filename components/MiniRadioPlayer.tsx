"use client";

import { Play, Square, Radio, Volume2, VolumeX, Music } from "lucide-react";
import { useRadio } from "@/contexts/RadioContext";
import { useRef } from "react";

export default function MiniRadioPlayer() {
  const { playing, loading, active, volume, nowPlaying, toggle, stop, setVolume } = useRadio();
  const prevVolume = useRef(1);

  if (!active) return null;

  const handleMuteToggle = () => {
    if (volume > 0) {
      prevVolume.current = volume;
      setVolume(0);
    } else {
      setVolume(prevVolume.current || 1);
    }
  };

  const trackDisplay = playing && nowPlaying?.title
    ? `${nowPlaying.artist ? `${nowPlaying.artist} — ` : ""}${nowPlaying.title}`
    : null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
      <div className="flex items-center gap-3 bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-full pl-4 pr-2 py-2 shadow-2xl max-w-[90vw]">
        <div className="flex items-center gap-2 min-w-0">
          {trackDisplay ? (
            <Music size={14} className="text-santa-red flex-shrink-0" />
          ) : (
            <Radio size={14} className={`text-santa-red flex-shrink-0 ${playing ? "animate-pulse" : ""}`} />
          )}
          <span className="text-xs font-medium text-white truncate max-w-[180px] sm:max-w-[280px]">
            {loading ? "Connecting..." : trackDisplay || (playing ? "Santa Radio" : "Paused")}
          </span>
        </div>

        {playing && (
          <div className="flex items-center gap-[2px] px-1 flex-shrink-0">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-[3px] bg-santa-red rounded-full"
                style={{
                  animation: volume > 0 ? `equalizer 0.8s ease-in-out ${i * 0.15}s infinite alternate` : "none",
                  height: volume > 0 ? "12px" : "4px",
                  transition: "height 0.2s",
                }}
              />
            ))}
          </div>
        )}

        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            onClick={handleMuteToggle}
            aria-label={volume > 0 ? "Mute" : "Unmute"}
            className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
          >
            {volume > 0 ? <Volume2 size={14} /> : <VolumeX size={14} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            aria-label="Volume"
            className="w-16 h-1 appearance-none bg-white/20 rounded-full cursor-pointer accent-santa-red [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-santa-red [&::-webkit-slider-thumb]:hover:bg-santa-red-light [&::-moz-range-thumb]:w-2.5 [&::-moz-range-thumb]:h-2.5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-santa-red [&::-moz-range-thumb]:border-0"
          />
        </div>

        <button
          onClick={toggle}
          aria-label={playing ? "Pause Santa Radio" : "Play Santa Radio"}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
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
          className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
        >
          <span className="text-sm font-medium">&times;</span>
        </button>
      </div>
    </div>
  );
}
