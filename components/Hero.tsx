import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  compact?: boolean;
}

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${compact ? "py-16 sm:py-20" : "py-20 sm:py-28 lg:py-36"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('/hero-santa-guy.webp')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>

      <div className="absolute top-10 left-10 w-2 h-2 bg-santa-gold rounded-full opacity-40 animate-pulse" />
      <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-santa-gold rounded-full opacity-30 animate-pulse delay-700" />
      <div className="absolute bottom-16 left-1/4 w-1 h-1 bg-santa-gold rounded-full opacity-25 animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
          {title}
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        {(primaryCTA || secondaryCTA) && (
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="w-full sm:w-auto px-8 py-4 bg-santa-red text-white font-semibold rounded-lg hover:bg-santa-red-dark transition-all shadow-lg hover:shadow-xl text-base"
              >
                {primaryCTA.label}
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-base"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
