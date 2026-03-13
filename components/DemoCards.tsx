"use client";

import { useRef, useCallback } from "react";

const demos = [
  {
    image: "/santa-guy-voice-over-1.jpg",
    audio: "/demos/Santa-voice-Guy-Demo-1.mp3",
    caption:
      "Hear Santa's showreel featuring festive clips from top brands, showcasing the magic and versatility of the UK's leading Santa voice.",
    alt: "Guy Harris Santa voiceover showreel — Voice of Santa demo featuring festive clips from top UK brands",
  },
  {
    image: "/santa-guy-voice-over-2.jpg",
    audio: "/demos/Santa-voice-Guy-Demo-2.mp3",
    caption:
      "Listen to Santa on Radio 2's celebrity Naughty and Nice list promo, sharing festive fun as he checks who's made the cut this Christmas.",
    alt: "Guy Harris as the Voice of Father Christmas on BBC Radio 2 Naughty and Nice list promo",
  },
  {
    image: "/santa-guy-voice-over-3.jpg",
    audio: "/demos/Santa-voice-Guy-Demo-3.mp3",
    caption:
      "Join Santa chatting with Zoe Ball on BBC Radio 2's Breakfast Show, sharing updates on Christmas preparations and spreading festive cheer.",
    alt: "Father Christmas voice by Guy Harris — Santa voiceover on the Zoe Ball BBC Radio 2 Breakfast Show",
  },
];

export default function DemoCards() {
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  const handlePlay = useCallback((index: number) => {
    audioRefs.current.forEach((audio, i) => {
      if (i !== index && audio && !audio.paused) {
        audio.pause();
      }
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {demos.map((demo, i) => (
        <div
          key={i}
          className="group rounded-xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="overflow-hidden">
            <img
              src={demo.image}
              alt={demo.alt}
              className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {demo.caption}
            </p>
            <audio
              ref={(el) => { audioRefs.current[i] = el; }}
              controls
              preload="none"
              className="w-full h-10"
              aria-label={`Santa voice demo ${i + 1}`}
              onPlay={() => handlePlay(i)}
              style={{ filter: "sepia(20%) saturate(70%) grayscale(0) contrast(99%) invert(0)" }}
            >
              <source src={demo.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      ))}
    </div>
  );
}
