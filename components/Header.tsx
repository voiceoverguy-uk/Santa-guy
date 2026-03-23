"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Santa Guy", href: "/guy-harris-santa-voice" },
  { label: "Santa Voice", href: "/santa-voice" },
  { label: "Hire Santa", href: "/hire-santa-voice" },
  { label: "Santa Apps", href: "/santa-apps" },
  { label: "Santa Radio", href: "/santa-radio" },
  { label: "Santa Tracker", href: "/santa-tracker" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-14 sm:h-16">
          <Link href="/" className="flex items-center group shrink-0">
            <img
              src={scrolled ? "/santaguy-logo-black.png" : "/santaguy-logo-white.png"}
              alt="Guy Harris — Voice of Santa | Santa Voiceover | Father Christmas Voice | Voice of Father Christmas | SantaGuy.co.uk"
              className="h-8 sm:h-10 w-auto transition-opacity duration-300"
            />
          </Link>

          <nav className="hidden lg:flex items-center ml-6 xl:ml-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-2.5 xl:px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-santa-red after:rounded-full after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled
                    ? "text-gray-700 hover:text-santa-red"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact-santa-guy"
              className="ml-1.5 xl:ml-2 px-4 py-2 bg-santa-red text-white text-sm font-semibold rounded-lg hover:bg-santa-red-dark transition-colors shadow-sm whitespace-nowrap"
            >
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden ml-auto p-2 transition-colors duration-300 ${
              scrolled ? "text-gray-700 hover:text-santa-red" : "text-white hover:text-white/80"
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
              href="/contact-santa-guy"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 px-4 py-3 bg-santa-red text-white text-center font-semibold rounded-lg hover:bg-santa-red-dark transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
