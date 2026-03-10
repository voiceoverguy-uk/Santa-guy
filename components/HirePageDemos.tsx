"use client";

import { useCallback, useRef } from "react";
import AudioPlayer from "@/components/AudioPlayer";

const demos = [
  { title: "Santa Commercial Reel", description: "Radio & TV showcase", src: "/demos/Santa-voice-Guy-Demo-1.mp3" },
  { title: "Santa Character Read", description: "Warm, natural Santa voice", src: "/demos/Santa-voice-Guy-Demo-2.mp3" },
  { title: "Radio Station Imaging", description: "Jingles & drops", src: "/demos/Santa-voice-Guy-Demo-3.mp3" },
  { title: "Santa Gives Away the Global Cash Call", description: "Live radio moment", src: "/demos/global-cash-call-santa-guy-harris.mp3" },
];

export default function HirePageDemos() {
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = useCallback((audio: HTMLAudioElement) => {
    if (currentAudioRef.current && currentAudioRef.current !== audio) {
      currentAudioRef.current.pause();
    }
    currentAudioRef.current = audio;
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
      {demos.map((demo) => (
        <AudioPlayer
          key={demo.title}
          title={demo.title}
          description={demo.description}
          src={demo.src}
          onPlay={handlePlay}
        />
      ))}
    </div>
  );
}
