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

function HolidayPostcard({ message, holiday }: { message: string; holiday: HolidayDestination }) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="absolute -top-3 left-6 bg-[#0f1d32] px-3 py-1 rounded-full border border-white/10 z-10">
        <span className="text-xs font-medium text-santa-gold uppercase tracking-wider">
          {new Date().getFullYear()} Holiday Postcards
        </span>
      </div>

      <div className="relative rounded-lg overflow-hidden shadow-xl border border-amber-200/30 mt-1">
        <div
          className="relative"
          style={{
            background: "linear-gradient(135deg, #fdf6e3 0%, #f5e6c8 30%, #faf0d7 60%, #f0dbb8 100%)",
          }}
        >
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative flex flex-col sm:flex-row min-h-[200px] sm:min-h-[220px]">
            <div className="flex-1 p-5 sm:p-6 flex items-center">
              <p
                className="text-gray-800 leading-relaxed text-base sm:text-lg transition-opacity duration-700"
                style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)" }}
              >
                &ldquo;{message}&rdquo;
              </p>
            </div>

            <div className="hidden sm:block w-px bg-gray-400/40 my-4 mx-0 self-stretch" />
            <div className="block sm:hidden h-px bg-gray-400/40 mx-5" />

            <div className="sm:w-[200px] p-5 sm:p-6 flex flex-col justify-between">
              <div className="flex justify-end mb-4">
                <div className="w-16 h-[72px] rounded-sm border-2 border-santa-red/70 flex flex-col items-center justify-center bg-white/60 relative overflow-hidden"
                  style={{ borderStyle: "dashed" }}
                >
                  <div className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='40' height='40' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
                    }}
                  />
                  <span className="text-[10px] font-bold text-santa-red uppercase tracking-wide leading-tight text-center">
                    North
                    <br />
                    Pole
                  </span>
                  <span className="text-[16px] mt-0.5">🎅</span>
                  <span className="text-[7px] text-santa-red/60 font-medium uppercase tracking-widest">
                    Official
                  </span>
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="flex gap-2 items-center mb-2">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex-shrink-0">To:</span>
                </div>
                <p className="text-gray-700 text-sm leading-snug" style={{ fontFamily: "'Caveat', cursive" }}>
                  The Workshop
                </p>
                <div className="border-b border-gray-300/60" />
                <p className="text-gray-700 text-sm leading-snug" style={{ fontFamily: "'Caveat', cursive" }}>
                  1 Candy Cane Lane
                </p>
                <div className="border-b border-gray-300/60" />
                <p className="text-gray-700 text-sm leading-snug font-medium" style={{ fontFamily: "'Caveat', cursive" }}>
                  North Pole 🎄
                </p>
                <div className="border-b border-gray-300/60" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-2 left-5 flex items-center gap-1.5 opacity-40">
            <span className="text-[9px] text-gray-600 italic">
              Sent from {holiday.name} {holiday.emoji}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

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

  if (onHoliday && holiday) {
    return (
      <div className="max-w-3xl mx-auto relative">
        <HolidayPostcard message={holidayPostcards[dispatchIndex]} holiday={holiday} />
      </div>
    );
  }

  let story = "";
  let label = "";

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
      story = `What an incredible journey! Santa has completed his worldwide Christmas Eve trip, delivering an estimated ${(data.estimatedGifts / 1_000_000_000).toFixed(1)} billion gifts across ${data.visitedCount} regions. From the Pacific Islands to Hawaii, he travelled an estimated ${Math.round(data.estimatedDistanceKm * 0.621371 / 1_000_000)} million miles in just 24 hours. The reindeer have earned a well-deserved rest, and Santa is back at the North Pole, warming up by the fire. Merry Christmas to all, and to all a good night!`;
      label = "Journey Summary";
      break;
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
