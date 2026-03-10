"use client";

import { useState } from "react";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail?: string;
  alt?: string;
}

export default function VideoCard({ id, title, thumbnail, alt }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);

  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  const imgAlt = alt || title;

  if (playing) {
    return (
      <div className="rounded-xl overflow-hidden border border-santa-red/15 shadow-md bg-white">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="px-4 py-3">
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      className="group w-full text-left rounded-xl overflow-hidden border border-santa-red/15 shadow-md hover:shadow-xl bg-white cursor-pointer transition-all duration-300 hover:-translate-y-1.5 focus-visible:ring-2 focus-visible:ring-santa-red/50 focus-visible:ring-offset-2"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
    >
      <div className="relative w-full overflow-hidden" style={{ paddingBottom: "56.25%" }}>
        <img
          src={thumbnailUrl}
          alt={imgAlt}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-black/55 via-black/25 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-red-600 drop-shadow-lg group-hover:scale-110 transition-transform duration-250"
            viewBox="0 0 68 48"
            fill="currentColor"
          >
            <path
              d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
            />
            <path d="M 45,24 27,14 27,34" fill="white" />
          </svg>
        </div>
      </div>
      <div className="px-4 py-3">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      </div>
    </button>
  );
}
