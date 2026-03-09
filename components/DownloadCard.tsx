"use client";

import { Download, Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface DownloadCardProps {
  title: string;
  description?: string;
  downloadHref?: string;
  placeholder?: boolean;
  previewSrc?: string;
  onPlay?: (audio: HTMLAudioElement) => void;
}

export default function DownloadCard({
  title,
  description,
  downloadHref,
  placeholder = true,
  previewSrc,
  onPlay,
}: DownloadCardProps) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!previewSrc) return;
    if (playing) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => {
      setPlaying(true);
      onPlay?.(audio);
    };
    const handlePause = () => setPlaying(false);
    const handleEnded = () => setPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [onPlay]);

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        {previewSrc ? (
          <button
            onClick={togglePlay}
            className="w-10 h-10 bg-santa-red rounded-lg flex items-center justify-center flex-shrink-0 text-white hover:bg-santa-red-dark transition-colors focus-visible:ring-2 focus-visible:ring-santa-red/50 focus-visible:ring-offset-2"
            aria-label={playing ? `Pause ${title}` : `Play ${title}`}
            type="button"
          >
            {playing ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
          </button>
        ) : (
          <div className="w-10 h-10 bg-santa-cream rounded-lg flex items-center justify-center flex-shrink-0">
            <Download className="w-5 h-5 text-santa-red" />
          </div>
        )}
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
          {description && (
            <p className="text-xs text-gray-500 mt-1">{description}</p>
          )}
          {placeholder ? (
            <p className="text-xs text-gray-400 mt-2 italic">
              Download coming soon
            </p>
          ) : (
            downloadHref && (
              <a
                href={downloadHref}
                download
                className="inline-flex items-center gap-1 text-xs font-medium text-santa-red hover:text-santa-red-dark mt-2 transition-colors"
              >
                <Download size={12} />
                Download (.zip)
              </a>
            )
          )}
        </div>
      </div>
      {previewSrc && (
        <audio
          ref={audioRef}
          src={previewSrc}
          preload="none"
        />
      )}
    </div>
  );
}
