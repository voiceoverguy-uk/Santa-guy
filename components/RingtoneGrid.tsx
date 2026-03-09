"use client";

import { useCallback, useRef } from "react";
import DownloadCard from "@/components/DownloadCard";

interface Ringtone {
  title: string;
  description: string;
  file: string;
  preview: string;
}

export default function RingtoneGrid({ ringtones }: { ringtones: Ringtone[] }) {
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = useCallback((audio: HTMLAudioElement) => {
    if (currentAudioRef.current && currentAudioRef.current !== audio) {
      currentAudioRef.current.pause();
    }
    currentAudioRef.current = audio;
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {ringtones.map((ringtone) => (
        <DownloadCard
          key={ringtone.title}
          title={ringtone.title}
          description={ringtone.description}
          downloadHref={ringtone.file}
          placeholder={false}
          previewSrc={ringtone.preview}
          onPlay={handlePlay}
        />
      ))}
    </div>
  );
}
