"use client";

import { createContext, useContext, useRef, useState, useCallback, useEffect, type ReactNode } from "react";

const STREAM_URL = "https://global.citrus3.com:8164/stream";

interface NowPlaying {
  title: string;
  artist: string;
}

interface RadioContextType {
  playing: boolean;
  loading: boolean;
  active: boolean;
  volume: number;
  nowPlaying: NowPlaying | null;
  toggle: () => void;
  stop: () => void;
  setVolume: (v: number) => void;
}

const RadioContext = createContext<RadioContextType>({
  playing: false,
  loading: false,
  active: false,
  volume: 1,
  nowPlaying: null,
  toggle: () => {},
  stop: () => {},
  setVolume: () => {},
});

export function RadioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [volume, setVolumeState] = useState(1);
  const [nowPlaying, setNowPlaying] = useState<NowPlaying | null>(null);

  const setVolume = useCallback((v: number) => {
    const clamped = Math.max(0, Math.min(1, v));
    setVolumeState(clamped);
    if (audioRef.current) {
      audioRef.current.volume = clamped;
    }
  }, []);

  const stop = useCallback(() => {
    audioRef.current?.pause();
    audioRef.current = null;
    setPlaying(false);
    setLoading(false);
    setActive(false);
    setNowPlaying(null);
  }, []);

  const toggle = useCallback(() => {
    if (playing) {
      audioRef.current?.pause();
      audioRef.current = null;
      setPlaying(false);
      setLoading(false);
    } else {
      const audio = new Audio(STREAM_URL);
      audio.volume = volume;
      audioRef.current = audio;
      setLoading(true);
      setActive(true);
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
  }, [playing, volume]);

  useEffect(() => {
    if (!playing) return;

    let cancelled = false;

    async function fetchNowPlaying() {
      try {
        const res = await fetch("/api/now-playing");
        if (!res.ok || cancelled) return;
        const data = await res.json();
        if (!cancelled && data.title) {
          setNowPlaying({ title: data.title, artist: data.artist || "" });
        }
      } catch {}
    }

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 15000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [playing]);

  return (
    <RadioContext.Provider value={{ playing, loading, active, volume, nowPlaying, toggle, stop, setVolume }}>
      {children}
    </RadioContext.Provider>
  );
}

export function useRadio() {
  return useContext(RadioContext);
}
