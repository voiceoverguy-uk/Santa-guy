"use client";

import { RadioProvider } from "@/contexts/RadioContext";
import MiniRadioPlayer from "@/components/MiniRadioPlayer";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RadioProvider>
      {children}
      <MiniRadioPlayer />
    </RadioProvider>
  );
}
