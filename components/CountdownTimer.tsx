"use client";

import { useEffect, useState } from "react";

function getTimeUntilChristmas() {
  const now = new Date();
  let christmas = new Date(now.getFullYear(), 11, 25);
  if (now > christmas) {
    christmas = new Date(now.getFullYear() + 1, 11, 25);
  }
  const diff = christmas.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

export default function CountdownTimer() {
  const [time, setTime] = useState(getTimeUntilChristmas());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTime(getTimeUntilChristmas());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="inline-flex items-center gap-3 sm:gap-4">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-3 sm:gap-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-santa-red tabular-nums">
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
              {unit.label}
            </div>
          </div>
          {i < units.length - 1 && (
            <span className="text-xl text-gray-300 font-light">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
