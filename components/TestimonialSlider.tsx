"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Guy's Santa voice is absolutely incredible. He brought our Christmas campaign to life and the client was thrilled with the results.",
    author: "Creative Director",
    company: "London Agency",
  },
  {
    quote:
      "The most authentic Santa voice we've ever worked with. Professional, reliable, and delivers every time. Our listeners love him.",
    author: "Programme Director",
    company: "National Radio Station",
  },
  {
    quote:
      "We've used Guy for three consecutive Christmas campaigns now. His voice is synonymous with Christmas for our brand.",
    author: "Marketing Manager",
    company: "Major UK Retailer",
  },
  {
    quote:
      "Brilliant to work with. Fast turnaround, stunning quality, and that voice is pure Christmas magic. Highly recommended.",
    author: "Producer",
    company: "Broadcast Production Company",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

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
        </div>
      </div>
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
    </div>
  );
}
