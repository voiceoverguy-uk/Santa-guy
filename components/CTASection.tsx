import type { ReactNode } from "react";
import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: ReactNode;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  dark?: boolean;
}

export default function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  dark = true,
}: CTASectionProps) {
  return (
    <section
      className={`py-8 sm:py-10 ${dark ? "bg-gray-900 text-white" : "bg-santa-cream"}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${dark ? "text-white" : "text-gray-900"}`}
        >
          {title}
        </h2>
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto ${dark ? "text-gray-300" : "text-gray-600"}`}
        >
          {description}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCTA.href}
            className={`w-full sm:w-auto px-8 py-4 font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl text-base ${
              dark
                ? "bg-santa-red text-white hover:bg-santa-red-light"
                : "bg-santa-red text-white hover:bg-santa-red-dark"
            }`}
          >
            {primaryCTA.label}
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className={`w-full sm:w-auto px-8 py-4 font-semibold rounded-lg transition-all text-base ${
                dark
                  ? "border-2 border-white/30 text-white hover:bg-white/10"
                  : "border-2 border-gray-300 text-gray-700 hover:border-santa-red hover:text-santa-red"
              }`}
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
