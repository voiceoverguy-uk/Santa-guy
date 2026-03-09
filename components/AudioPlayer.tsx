"use client";

import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

interface AudioPlayerProps {
  title: string;
  description?: string;
  src?: string;
}

export default function AudioPlayer({ title, description, src }: AudioPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!src) return;
    if (playing) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        {src ? (
          <button
            onClick={togglePlay}
            className="flex-shrink-0 w-12 h-12 bg-santa-red rounded-full flex items-center justify-center text-white hover:bg-santa-red-dark transition-colors shadow-sm"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
          </button>
        ) : (
          <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
            <Play size={18} className="ml-0.5" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
          {description && (
            <p className="text-xs text-gray-500 mt-0.5">{description}</p>
          )}
          <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-santa-red/30 rounded-full w-0" />
          </div>
          {!src && (
            <p className="text-xs text-gray-400 mt-1 italic">MP3 coming soon</p>
          )}
        </div>
      </div>
      {src && (
        <audio
          ref={audioRef}
          src={src}
          onEnded={() => setPlaying(false)}
          preload="none"
        />
      )}
    </div>
  );
}
