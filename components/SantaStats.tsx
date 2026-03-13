"use client";

import { MapPin, Clock, Navigation, Gift, Plane, Globe, Target, Zap } from "lucide-react";
import { formatNumber, type DashboardData } from "@/lib/santaRoute";

interface SantaStatsProps {
  data: DashboardData;
}

export default function SantaStats({ data }: SantaStatsProps) {
  const isLive = data.mode === "LIVE";

  const cards = [
    {
      icon: <MapPin size={18} />,
      label: "Current Location",
      value: `${data.currentStopFlag} ${data.currentStopName}`,
      highlight: false,
      ukGlow: data.state === "UK_SPECIAL_WINDOW",
    },
    {
      icon: <Clock size={18} />,
      label: "Local Time",
      value: data.localTimeAtStop,
      highlight: false,
    },
    {
      icon: <Navigation size={18} />,
      label: "Next Stop",
      value: data.nextStopName !== "—" ? `${data.nextStopFlag} ${data.nextStopName}` : "—",
      highlight: false,
    },
    {
      icon: <Target size={18} />,
      label: "ETA",
      value: data.etaText,
      highlight: false,
    },
    {
      icon: <Gift size={18} />,
      label: "Gifts Delivered",
      value: isLive || data.mode === "COMPLETE" ? formatNumber(data.estimatedGifts) : "—",
      highlight: false,
    },
    {
      icon: <Plane size={18} />,
      label: "Distance Flown",
      value: isLive || data.mode === "COMPLETE" ? `${formatNumber(data.estimatedDistanceKm)} km` : "—",
      highlight: false,
    },
    {
      icon: <Globe size={18} />,
      label: "Countries Visited",
      value: `${data.visitedCount} / ${data.visitedCount + data.remainingCount}`,
      highlight: false,
    },
    {
      icon: <Zap size={18} />,
      label: "Speed",
      value: data.speedLabel,
      highlight: false,
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
      highlight: true,
      ukGlow: true,
    } as typeof cards[0]);
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`relative rounded-xl border p-4 transition-all duration-300 ${
            (card as { ukGlow?: boolean }).ukGlow
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
          <div className="text-white font-semibold text-sm sm:text-base truncate">
            {card.value}
          </div>
        </div>
      ))}
    </div>
  );
}
