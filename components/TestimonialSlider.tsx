"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Guy IS Santa. I'd rather cancel Christmas than use anyone else.",
    author: "Simon Borszowski",
    company: "Producer, BBC",
  },
  {
    quote:
      "The most convincing Santa voice we have ever had on our promos and liners. If you're looking for the real Santa, I'm pretty sure he's outsourced the job to Guy Harris.",
    author: "Matt Lomax",
    company: "Head of Sound Design, Heart",
  },
  {
    quote:
      "A Father Christmas who delivers every single year, even those last minute panic buys are no bother! Whether your list to him requires something spoken, sung or simply a bit of improvised flair, this Guy will oblige! All in return for a mince pie and some sherry — not bad!",
    author: "Liam Hadley",
    company: "Creative Audio Producer, BBC",
  },
  {
    quote:
      "After 20+ years in the industry and having heard thousands of voices. Guy is the undisputed gold standard Santa. It's not even close!",
    author: "Dan Riedo",
    company: "The Property Podcast Producer",
  },
  {
    quote:
      "Guy is top of my Christmas list each year, and the festive season wouldn't be the same without him. His Santa is not just a seasonal audio treat, it's a Christmas miracle. Plus he's the nicest person to deal with, and never, ever naughty.",
    author: "Jay Espindola",
    company: "Producer, ITV / GB News",
  },
  {
    quote:
      "We use Guy regularly during the Christmas season at ARN in Dubai, and his Santa voice is absolutely spot on. Warm, authentic and full of festive character. Truly one of the best Santa voices in the world.",
    author: "Russell Featherstone",
    company: "Production Manager",
  },
  {
    quote:
      "Such a warm, authentic Santa voice - instantly puts a smile on your face.",
    author: "Carl Woods",
    company: "Creative Producer, Bauer",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-12">
        <Quote className="w-10 h-10 text-santa-red/20 mb-4" />
        <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed italic">
          &ldquo;{testimonials[current].quote}&rdquo;
        </blockquote>
        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900">
              {testimonials[current].author}
            </p>
            <p className="text-sm text-gray-500">
              {testimonials[current].company}
            </p>
          </div>
          {testimonials.length > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="p-2 rounded-full border border-gray-200 text-gray-500 hover:text-santa-red hover:border-santa-red/30 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full border border-gray-200 text-gray-500 hover:text-santa-red hover:border-santa-red/30 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
      {testimonials.length > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-santa-red" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
