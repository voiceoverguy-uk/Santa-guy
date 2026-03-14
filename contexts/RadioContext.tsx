"use client";

import { createContext, useContext, useRef, useState, useCallback, type ReactNode } from "react";

const STREAM_URL = "https://global.citrus3.com:8164/stream";

interface RadioContextType {
  playing: boolean;
  loading: boolean;
  active: boolean;
  volume: number;
  toggle: () => void;
  stop: () => void;
  setVolume: (v: number) => void;
}

const RadioContext = createContext<RadioContextType>({
  playing: false,
  loading: false,
  active: false,
  volume: 1,
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

  return (
    <RadioContext.Provider value={{ playing, loading, active, volume, toggle, stop, setVolume }}>
      {children}
    </RadioContext.Provider>
  );
}

export function useRadio() {
  return useContext(RadioContext);
}
