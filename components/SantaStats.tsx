"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Clock, Navigation, Gift, Plane, Globe, Target, Zap } from "lucide-react";
import { getDashboardData, formatNumber, type HolidayDestination } from "@/lib/santaRoute";
import { holidayDestinations } from "@/data/santaHolidays";

interface SantaStatsProps {
  effectiveTime: Date;
  holiday?: HolidayDestination | null;
}

function useCountUp(target: number, duration: number = 800): number {
  const [display, setDisplay] = useState(target);
  const prevRef = useRef(target);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplay(target);
      prevRef.current = target;
      return;
    }

    const from = prevRef.current;
    const diff = target - from;
    if (Math.abs(diff) < 1) {
      setDisplay(target);
      prevRef.current = target;
      return;
    }

    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(from + diff * eased));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        prevRef.current = target;
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration]);

  return display;
}

export default function SantaStats({ effectiveTime, holiday }: SantaStatsProps) {
  const data = getDashboardData(effectiveTime);
  const isLive = data.mode === "LIVE";

  const onHoliday = data.mode === "OFF_SEASON" && !!holiday;
  const [maybeNext] = useState(() => {
    const others = holidayDestinations.filter(d => d.name !== holiday?.name);
    return others[Math.floor(Math.random() * others.length)];
  });

  const offSeasonGifts = [
    "Still receiving lists", "Reading lists", "Checking twice", "Workshop approving",
    "Wrapping presents", "Elves on overtime", "Testing toys", "Quality control",
    "Sorting the nice list", "Counting requests",
  ];
  const offSeasonDistance = [
    "Sleigh in the garage", "Reindeer resting", "Polishing the sleigh", "Route planning",
    "Feeding reindeer", "Waxing the runners", "Map pinned to the wall", "GPS calibrating",
  ];
  const [funGifts] = useState(() => offSeasonGifts[Math.floor(Math.random() * offSeasonGifts.length)]);
  const [funDistance] = useState(() => offSeasonDistance[Math.floor(Math.random() * offSeasonDistance.length)]);

  if (onHoliday && holiday) {
    data.currentStopName = holiday.name;
    data.currentStopFlag = "🏖️";
  }

  const animatedGifts = useCountUp(data.estimatedGifts);
  const animatedDistance = useCountUp(data.estimatedDistanceKm);
  const animatedVisited = useCountUp(data.visitedCount, 400);

  function getHolidayLocalTime(): string {
    if (!holiday) return "—";
    const offsetHours = Math.round(holiday.lng / 15);
    const nowUtc = new Date();
    const localMs = nowUtc.getTime() + offsetHours * 60 * 60 * 1000;
    const localDate = new Date(localMs);
    const h = localDate.getUTCHours();
    const m = localDate.getUTCMinutes();
    const period = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 || 12;
    return `${h12}:${String(m).padStart(2, "0")} ${period}`;
  }

  const cards = [
    {
      icon: <MapPin size={18} />,
      label: "Current Location",
      value: `${data.currentStopFlag} ${data.currentStopName}`,
      ukGlow: data.state === "UK_SPECIAL_WINDOW",
    },
    {
      icon: <Clock size={18} />,
      label: "Local Time",
      value: onHoliday ? getHolidayLocalTime() : data.localTimeAtStop,
    },
    {
      icon: <Navigation size={18} />,
      label: "Next Stop",
      value: onHoliday && maybeNext ? `Maybe ${maybeNext.name}?` : (data.nextStopName !== "—" ? `${data.nextStopFlag} ${data.nextStopName}` : "—"),
    },
    {
      icon: <Target size={18} />,
      label: "ETA",
      value: onHoliday ? "Relaxing..." : data.etaText,
    },
    {
      icon: <Gift size={18} />,
      label: "Gifts Delivered",
      value: isLive || data.mode === "COMPLETE" ? formatNumber(animatedGifts) : onHoliday ? funGifts : "—",
    },
    {
      icon: <Plane size={18} />,
      label: "Distance Flown",
      value: isLive || data.mode === "COMPLETE" ? `${formatNumber(Math.round(animatedDistance * 0.621371))} miles` : onHoliday ? funDistance : "—",
    },
    {
      icon: <Globe size={18} />,
      label: "Countries Visited",
      value: onHoliday ? "Back in October" : `${animatedVisited} / ${data.visitedCount + data.remainingCount}`,
    },
    {
      icon: <Zap size={18} />,
      label: "Speed",
      value: data.speedLabel,
    },
  ];

  if (data.approachingUK) {
    cards.push({
      icon: <span className="text-lg">🇬🇧</span>,
      label: "UK Arrival",
      value:
        data.countdownToUK.totalMs > 0
          ? `${data.countdownToUK.hours > 0 ? `${data.countdownToUK.hours}h ` : ""}${data.countdownToUK.minutes}m ${data.countdownToUK.seconds}s`
          : "Santa is here!",
      ukGlow: true,
    });
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`relative rounded-xl border p-4 transition-all duration-300 ${
            card.ukGlow
              ? "border-santa-red/50 bg-santa-red/10 shadow-[0_0_20px_rgba(156,6,11,0.2)]"
              : "border-white/10 bg-white/5 backdrop-blur-sm"
          }`}
        >
          <div className="flex items-center gap-2 text-santa-gold mb-2">
            {card.icon}
            <span className="text-[10px] sm:text-xs uppercase tracking-wider font-medium">
              {card.label}
            </span>
          </div>
          <div className="text-white font-semibold text-sm sm:text-base truncate tabular-nums">
            {card.value}
          </div>
        </div>
      ))}
    </div>
  );
}
