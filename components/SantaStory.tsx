"use client";

import { useEffect, useState } from "react";
import { getDashboardData, type HolidayDestination } from "@/lib/santaRoute";

interface SantaStoryProps {
  effectiveTime: Date;
  holiday?: HolidayDestination | null;
}

const holidayPostcards = [
  "I'm officially on holiday. The elves have been told not to call me unless it's an emergency.",
  "My out-of-office is on. Auto-reply: Ho Ho Ho, I'm on holiday!",
  "The elves have started a group chat without me. It's mostly memes about my driving.",
  "I told Mrs Claus I was doing 'gift research.' She's not buying it. Literally.",
  "I've sent the reindeer to a spa. Rudolph's getting his nose polished.",
  "I promised no work talk on holiday. I've already mentioned chimneys four times today.",
  "Mrs Claus finally got me out of the workshop. I lasted 12 minutes before checking my list.",
  "I tried to pack light. I still brought three spare hats and a backup beard.",
  "The toy-testing department is running unsupervised. I'm trying not to think about it.",
  "I've been spotted trying to use a self-checkout. It did not go well.",
  "I said I'd only check my naughty list once a week. It's been three weeks.",
  "Workshop's closed for summer. I've told the elves to learn a new hobby. They chose parkour.",
  "I tried sunbathing today. The hat stays on. Non-negotiable.",
  "Just had an ice cream. Nobody recognised me without the suit. Very peaceful.",
  "I've been asked to keep the Ho Ho Ho-ing down at the hotel pool. Apparently it echoes.",
  "Tried to order a mince pie at a café. Got a very confused look.",
  "Mrs Claus says I need to stop rating every chimney I walk past. She's probably right.",
  "The elves sent me a selfie from the workshop. They've rearranged everything. I'm furious.",
  "I attempted a holiday lie-in. Woke up at 4am out of habit. Old habits die hard.",
  "I've started a holiday journal. Day one: 'Thought about lists. Must stop.'",
  "Bought a Hawaiian shirt. Mrs Claus says I look ridiculous. She took a photo anyway.",
  "I accidentally said 'Merry Christmas' to a waiter. It's July. He looked concerned.",
  "Found a chimney on the hotel and had to resist the urge. Very proud of myself.",
  "The beard gets a lot of attention in warm weather. I've started a trend, apparently.",
  "I've been reading reviews of chimneys online. Mrs Claus has confiscated my phone.",
  "Rudolph keeps sending me postcards. He can't write, so they're just hoof prints.",
  "I suggested we visit a toy shop. Mrs Claus said absolutely not. We went to the beach instead.",
  "I tried paddleboarding. The belly makes balance tricky. Very entertaining for onlookers.",
  "The elves FaceTimed me. The workshop looks fine. Suspiciously fine.",
  "I've been leaving out milk and biscuits before bed. Old habits.",
  "Had a go at karaoke last night. Apparently 'Jingle Bells' isn't a summer hit. Their loss.",
  "I asked the hotel concierge about local chimney architecture. He thought I was joking.",
  "Mrs Claus has hidden my list. She says it's for my own good. I found it in twenty minutes.",
  "I tried to explain my job to someone at the bar. They thought I was a method actor.",
  "The reindeer sent a postcard. They've formed a book club. I wasn't invited.",
  "I wore flip-flops today. I can confirm that boots are superior in every way.",
  "I've been practising my 'surprised face' for Christmas morning. Mrs Claus gives it a 6 out of 10.",
  "Someone at the resort asked what I do for a living. I said 'logistics.' Not technically wrong.",
  "I tried a local delicacy today. I miss mince pies. I really miss mince pies.",
  "The elves have started a podcast. It's called 'Sleigh What?' I haven't listened yet.",
  "I've been doing laps of the pool. Mostly floating, if I'm honest.",
  "Mrs Claus caught me looking at sleigh upgrades online. I told her it was for next year. It is.",
  "Had a dream about wrapping paper last night. Time to switch to decaf.",
  "I tried snorkelling. The beard was a problem. A big, soggy problem.",
  "Just discovered they make Christmas films set on beaches. I feel seen.",
  "The hotel gave me a loyalty card. I've been here three days and I'm already gold status.",
  "I keep humming Christmas songs under my breath. The couple next to me have moved tables.",
  "Saw a red coat in a shop window. Bought it immediately. Mrs Claus sighed.",
  "I built a sandcastle today. It looked suspiciously like the North Pole. I can't help it.",
  "The elves texted to say everything's under control. That sentence has never been true.",
];

export default function SantaStory({ effectiveTime, holiday }: SantaStoryProps) {
  const data = getDashboardData(effectiveTime);
  const onHoliday = data.state === "OFF_SEASON" && !!holiday;

  const [dispatchIndex, setDispatchIndex] = useState(() =>
    Math.floor(Math.random() * holidayPostcards.length)
  );

  useEffect(() => {
    if (!onHoliday) return;
    const interval = setInterval(() => {
      setDispatchIndex((prev) => (prev + 1) % holidayPostcards.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [onHoliday]);

  let story = "";
  let label = "";

  if (onHoliday && holiday) {
    story = holidayPostcards[dispatchIndex];
    label = `${new Date().getFullYear()} Holiday Postcards`;
  } else {
    switch (data.state) {
      case "OFF_SEASON":
        story =
          "Deep in the heart of the North Pole, Santa is resting by the fire after another extraordinary year. The elves are already busy in the workshop, crafting toys and checking the lists twice. The reindeer are grazing peacefully in the snow-covered meadows, building up their strength for the biggest night of the year. Though Christmas Eve may feel far away, the preparations never truly stop. Santa is always getting ready for that magical journey around the world.";
        label = "North Pole Report";
        break;

      case "PREPARING":
        story =
          "The moment has almost arrived. Santa has checked his list for the final time, the sleigh is polished and loaded to the brim, and Rudolph's nose is glowing brighter than ever. The elves are putting the last finishing touches on the presents as excitement fills the air at the North Pole. In just a few hours, Santa will take to the skies and begin his incredible journey, delivering joy to every corner of the globe as Christmas Eve midnight sweeps across the world.";
        label = "Live Update";
        break;

      case "LIVE_AT_STOP":
      case "IN_TRANSIT":
        story = `Santa is currently making his way across ${data.currentStopRegion}, spreading festive magic and joy as he goes. ${data.currentFunFact} With ${data.remainingCount} regions still to visit and an estimated ${(data.estimatedGifts / 1_000_000).toFixed(0)} million gifts already delivered, this is shaping up to be another record-breaking Christmas Eve journey. ${data.approachingUK ? "Excitement is building in the UK — Santa is getting closer!" : `Next stop: ${data.nextStopName}.`}`;
        label = "Live Update";
        break;

      case "UK_SPECIAL_WINDOW":
        story =
          "This is it, Santa is here! Flying across the United Kingdom right now, from the highlands of Scotland to the rolling hills of Wales, from the streets of London to the countryside of Northern Ireland. Stockings are being filled, presents are being placed under trees, and the magic of Christmas is alive. If you listen very carefully, you might just hear the jingle of sleigh bells overhead. Don't forget to leave out the mince pies and sherry!";
        label = "Live Update";
        break;

      case "COMPLETE":
        story = `What an incredible journey! Santa has completed his worldwide Christmas Eve trip, delivering an estimated ${(data.estimatedGifts / 1_000_000_000).toFixed(1)} billion gifts across ${data.visitedCount} regions. From the Pacific Islands to Hawaii, he travelled an estimated ${(data.estimatedDistanceKm / 1_000_000).toFixed(0)} million kilometres in just 24 hours. The reindeer have earned a well-deserved rest, and Santa is back at the North Pole, warming up by the fire. Merry Christmas to all, and to all a good night!`;
        label = "Journey Summary";
        break;
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8">
        <div className="absolute -top-3 left-6 bg-[#0f1d32] px-3 py-1 rounded-full border border-white/10">
          <span className="text-xs font-medium text-santa-gold uppercase tracking-wider">
            {label}
          </span>
        </div>
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base mt-2">{story}</p>
      </div>
    </div>
  );
}
