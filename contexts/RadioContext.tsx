"use client";

import { createContext, useContext, useRef, useState, useCallback, type ReactNode } from "react";

const STREAM_URL = "https://global.citrus3.com:8164/stream";

interface RadioContextType {
  playing: boolean;
  loading: boolean;
  active: boolean;
  toggle: () => void;
  stop: () => void;
}

const RadioContext = createContext<RadioContextType>({
  playing: false,
  loading: false,
  active: false,
  toggle: () => {},
  stop: () => {},
});

export function RadioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);

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
  }, [playing]);

  return (
    <RadioContext.Provider value={{ playing, loading, active, toggle, stop }}>
      {children}
    </RadioContext.Provider>
  );
}

export function useRadio() {
  return useContext(RadioContext);
}
