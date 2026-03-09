"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Santa Guy", href: "/guy-harris-santa-voice" },
  { label: "Hire Santa Voice", href: "/hire-santa-voice" },
  { label: "Santa Apps", href: "/santa-apps" },
  { label: "Santa Radio", href: "/santa-radio" },
  { label: "Contact", href: "/contact-santa-guy" },
];

export default function Header() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!isHomepage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  const isTransparent = isHomepage && !scrolled;

  return (
    <header
      className={`${isHomepage ? "fixed" : "sticky"} top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center group">
            <img
              src={isTransparent ? "/santaguy-logo-white.png" : "/santaguy-logo-black.png"}
              alt="SantaGuy"
              className="h-10 sm:h-12 w-auto transition-opacity duration-300"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-gray-700 hover:text-santa-red hover:bg-santa-cream"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/hire-santa-voice"
              className="ml-2 px-5 py-2.5 bg-santa-red text-white text-sm font-semibold rounded-lg hover:bg-santa-red-dark transition-colors shadow-sm"
            >
              Hire Santa Voice
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isTransparent ? "text-white hover:text-white/80" : "text-gray-700 hover:text-santa-red"
            }`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-santa-red hover:bg-santa-cream rounded-lg transition-all"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/hire-santa-voice"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 px-4 py-3 bg-santa-red text-white text-center font-semibold rounded-lg hover:bg-santa-red-dark transition-colors"
            >
              Hire Santa Voice
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
