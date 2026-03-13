"use client";

import { getDashboardData } from "@/lib/santaRoute";

interface SantaStoryProps {
  effectiveTime: Date;
}

export default function SantaStory({ effectiveTime }: SantaStoryProps) {
  const data = getDashboardData(effectiveTime);

  let story = "";

  switch (data.state) {
    case "OFF_SEASON":
      story =
        "Deep in the heart of the North Pole, Santa is resting by the fire after another extraordinary year. The elves are already busy in the workshop, crafting toys and checking the lists twice. The reindeer are grazing peacefully in the snow-covered meadows, building up their strength for the biggest night of the year. Though Christmas Eve may feel far away, the preparations never truly stop — Santa is always getting ready for that magical journey around the world.";
      break;

    case "PREPARING":
      story =
        "The moment has almost arrived. Santa has checked his list for the final time, the sleigh is polished and loaded to the brim, and Rudolph's nose is glowing brighter than ever. The elves are putting the last finishing touches on the presents as excitement fills the air at the North Pole. In just a few hours, Santa will take to the skies and begin his incredible journey — delivering joy to every corner of the globe as Christmas Eve midnight sweeps across the world.";
      break;

    case "LIVE_AT_STOP":
    case "IN_TRANSIT":
      story = `Santa is currently making his way across ${data.currentStopRegion}, spreading festive magic and joy as he goes. ${data.currentFunFact} With ${data.remainingCount} regions still to visit and an estimated ${(data.estimatedGifts / 1_000_000).toFixed(0)} million gifts already delivered, this is shaping up to be another record-breaking Christmas Eve journey. ${data.approachingUK ? "Excitement is building in the UK — Santa is getting closer!" : `Next stop: ${data.nextStopName}.`}`;
      break;

    case "UK_SPECIAL_WINDOW":
      story =
        "This is it — Santa is here! Flying across the United Kingdom right now, from the highlands of Scotland to the rolling hills of Wales, from the streets of London to the countryside of Northern Ireland. Stockings are being filled, presents are being placed under trees, and the magic of Christmas is alive. If you listen very carefully, you might just hear the jingle of sleigh bells overhead. Don't forget to leave out the mince pies and sherry!";
      break;

    case "COMPLETE":
      story = `What an incredible journey! Santa has completed his worldwide Christmas Eve trip, delivering an estimated ${(data.estimatedGifts / 1_000_000_000).toFixed(1)} billion gifts across ${data.visitedCount} regions. From the Pacific Islands to Hawaii, he travelled an estimated ${(data.estimatedDistanceKm / 1_000_000).toFixed(0)} million kilometres in just 24 hours. The reindeer have earned a well-deserved rest, and Santa is back at the North Pole, warming up by the fire. Merry Christmas to all, and to all a good night!`;
      break;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8">
        <div className="absolute -top-3 left-6 bg-[#0f1d32] px-3 py-1 rounded-full border border-white/10">
          <span className="text-xs font-medium text-santa-gold uppercase tracking-wider">
            {data.state === "OFF_SEASON"
              ? "North Pole Report"
              : data.state === "COMPLETE"
              ? "Journey Summary"
              : "Live Update"}
          </span>
        </div>
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base mt-2">{story}</p>
      </div>
    </div>
  );
}
