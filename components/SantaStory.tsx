"use client";

import { useEffect, useState } from "react";
import { getDashboardData, isDecemberPrep, type HolidayDestination } from "@/lib/santaRoute";

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

const workshopDispatches = [
  "The workshop is in full swing. I can hear wrapping paper from three rooms away. It never stops.",
  "Rudolph's been doing nose warm-ups since 5am. The other reindeer are pretending not to be impressed.",
  "The naughty list is longer than expected this year. I've had to order more ink.",
  "An elf just asked me if we can add same-day delivery. I said we've been doing that for centuries.",
  "The sleigh's been serviced, polished, and given a fresh coat of paint. She's never looked better.",
  "Mrs Claus has started a countdown calendar for me. It's mostly reminders to eat properly.",
  "I've checked the list twice. Then a third time. Then Mrs Claus told me to put it down.",
  "The toy department hit a new record today. I'd tell you the number, but it's classified.",
  "Rudolph's been practising sharp turns in the training field. Two snowmen didn't make it.",
  "Someone left a mince pie on my desk. Gone in twelve seconds. New personal best.",
  "The wrapping station is running three shifts. Elf overtime has been approved. Again.",
  "I tried on the suit today. Fits perfectly. Mrs Claus let out a small cheer.",
  "The letter room is overflowing. We've had to open a second sorting office. And a third.",
  "Blitzen has been doing extra cardio. Dasher says he's showing off. He absolutely is.",
  "I tested the new toy drone. It flew into the Christmas tree. Twice. Back to development.",
  "The elves have started singing carols during their shifts. Productivity is up 12%.",
  "I've been reviewing chimney access reports from around the world. Some of them are... creative.",
  "Mrs Claus made her famous hot chocolate today. Morale has never been higher.",
  "The GPS on the sleigh has been updated. 195 countries, every rooftop mapped. We're ready.",
  "An elf suggested we switch to electric. I told him the reindeer would be offended.",
  "The boot polisher broke. Emergency repairs underway. Cannot fly in scuffed boots. Standards.",
  "I've been doing practice runs in the simulator. Nailed the London rooftops. Mostly.",
  "The gift inventory check is complete. 2.5 billion presents accounted for. Give or take.",
  "Comet has developed a slight competitive streak with Cupid. Training laps are getting intense.",
  "The elves decorated the workshop breakroom. It looks like a glitter bomb went off. I love it.",
  "Prancer insists on a warm-up playlist before flights. Currently it's all 80s power ballads.",
  "I found an elf asleep in a pile of teddy bears. Can't blame him, to be fair.",
  "The sack has been magically expanded for the 847th year running. Never gets old.",
  "Mrs Claus has started her famous Christmas biscuits. The workshop smells incredible.",
  "Weather report from the Met Elves: clear skies expected worldwide. Fingers crossed.",
  "The reindeer had their final health check. All nine in peak condition. Rudolph's nose: dazzling.",
  "I've memorised every child's name on the nice list. Yes, all of them. It's a Santa thing.",
  "The workshop floor is covered in ribbon. We've stopped trying to clean it up.",
  "An elf asked if Santa gets nervous. I said no. I lied. A little bit. Every year.",
  "Donner has been doing altitude training. He says he's fine. He's breathing quite heavily.",
  "I've written my Christmas Eve speech for the elves. Mrs Claus says it's my best one yet.",
  "The backup bells for the sleigh arrived today. You can never have too many jingle bells.",
  "Quality control rejected a batch of toy robots. The eyes were too googly. Fair enough.",
  "I've been stretching daily. Chimneys aren't getting any wider, and neither am I.",
  "The navigation team has plotted the optimal route. It involves 43 million course corrections.",
  "Vixen has been practising her landing technique. Graceful as ever. Dancer is taking notes.",
  "The elves held a dress rehearsal of the loading sequence. 4.2 seconds. New record.",
  "I caught an elf testing a trampoline meant for a child in Bristol. He was having the time of his life.",
  "Mrs Claus has laid out my thermal underlayers. Seven pairs of socks. She knows the drill.",
  "The final toy shipment arrived from Workshop B. We are fully stocked. This is not a drill.",
  "I've polished my glasses, trimmed the beard, and practised my Ho Ho Ho. I'm ready.",
  "The elves have hung a 'Days Until Launch' banner. The number is getting very small.",
  "Rudolph did a full-power nose test today. Lit up the entire runway. Spectacular.",
  "Every present has been wrapped, tagged, and loaded. The sack is practically humming with excitement.",
  "The countdown is nearly over. The world is waiting. And honestly? I can't wait either.",
];

function HolidayPostcard({ message, holiday }: { message: string; holiday: HolidayDestination }) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="absolute -top-3 left-6 bg-[#0f1d32] px-3 py-1 rounded-full border border-white/10 z-10">
        <span className="text-xs font-medium text-santa-gold uppercase tracking-wider">
          {new Date().getFullYear()} Holiday Postcards
        </span>
      </div>

      <div className="relative rounded-lg overflow-hidden shadow-xl border border-amber-200/30 mt-1 max-w-xl mx-auto" style={{ aspectRatio: "3 / 2" }}>
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #fdf6e3 0%, #f5e6c8 30%, #faf0d7 60%, #f0dbb8 100%)",
          }}
        >
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative flex flex-col sm:flex-row h-full">
            <div className="flex-1 p-5 sm:p-6 flex flex-col justify-center">
              <p
                className="text-gray-800 mb-1"
                style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(1.05rem, 2.3vw, 1.25rem)" }}
              >
                Hello, Santa here...
              </p>
              <p
                className="text-gray-800 leading-relaxed transition-opacity duration-700"
                style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(1.1rem, 2.6vw, 1.4rem)" }}
              >
                &ldquo;{message}&rdquo;
              </p>
              <p
                className="text-gray-800 mt-2"
                style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(1.05rem, 2.3vw, 1.25rem)" }}
              >
                Stay good... Santa x
              </p>
            </div>

            <div className="hidden sm:block w-px bg-gray-400/40 my-5 mx-0 self-stretch" />
            <div className="block sm:hidden h-px bg-gray-400/40 mx-5" />

            <div className="sm:w-[200px] p-5 sm:p-6 pt-4 sm:pt-4 flex flex-col">
              <div className="flex justify-end mb-3">
                <div className="w-14 h-[62px] rounded-sm border-2 border-santa-red/70 flex flex-col items-center justify-center bg-white/60 relative overflow-hidden"
                  style={{ borderStyle: "dashed" }}
                >
                  <div className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='40' height='40' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
                    }}
                  />
                  <span className="text-[9px] font-bold text-santa-red uppercase tracking-wide leading-tight text-center">
                    North
                    <br />
                    Pole
                  </span>
                  <span className="text-[14px] mt-0.5">🎅</span>
                  <span className="text-[6px] text-santa-red/60 font-medium uppercase tracking-widest">
                    Official
                  </span>
                </div>
              </div>

              <div className="w-full space-y-1">
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">To:</p>
                <p className="text-gray-800 leading-snug" style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(0.85rem, 1.8vw, 1.05rem)" }}>
                  The Workshop
                </p>
                <div className="border-b border-gray-400/50" />
                <p className="text-gray-800 leading-snug" style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(0.85rem, 1.8vw, 1.05rem)" }}>
                  1 Candy Cane Lane
                </p>
                <div className="border-b border-gray-400/50" />
                <p className="text-gray-800 leading-snug font-medium" style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(0.85rem, 1.8vw, 1.05rem)" }}>
                  North Pole 🎄
                </p>
                <div className="border-b border-gray-400/50" />
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

function WorkshopDispatch({ message }: { message: string }) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8">
        <div className="absolute -top-3 left-6 bg-[#0f1d32] px-3 py-1 rounded-full border border-white/10">
          <span className="text-xs font-medium text-santa-gold uppercase tracking-wider">
            🎄 Workshop Dispatch
          </span>
        </div>
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base mt-2 transition-opacity duration-700">
          {message}
        </p>
      </div>
    </div>
  );
}

export default function SantaStory({ effectiveTime, holiday }: SantaStoryProps) {
  const data = getDashboardData(effectiveTime);
  const inDecemberPrep = data.state === "OFF_SEASON" && isDecemberPrep(effectiveTime);
  const onHoliday = data.state === "OFF_SEASON" && !!holiday && !inDecemberPrep;

  const [postcardIndex, setPostcardIndex] = useState(() =>
    Math.floor(Math.random() * holidayPostcards.length)
  );

  const [dispatchIndex, setDispatchIndex] = useState(() =>
    Math.floor(Math.random() * workshopDispatches.length)
  );

  useEffect(() => {
    if (!onHoliday) return;
    const interval = setInterval(() => {
      setPostcardIndex((prev) => (prev + 1) % holidayPostcards.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [onHoliday]);

  useEffect(() => {
    if (!inDecemberPrep) return;
    const interval = setInterval(() => {
      setDispatchIndex((prev) => (prev + 1) % workshopDispatches.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [inDecemberPrep]);

  if (inDecemberPrep) {
    return <WorkshopDispatch message={workshopDispatches[dispatchIndex]} />;
  }

  if (onHoliday && holiday) {
    return (
      <div className="max-w-3xl mx-auto relative">
        <HolidayPostcard message={holidayPostcards[postcardIndex]} holiday={holiday} />
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
