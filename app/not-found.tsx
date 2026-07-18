import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative bg-gradient-to-b from-[#1a0505] via-[#3d0a0d] to-[#1a0505] text-white min-h-[80vh] flex items-center">
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <p className="text-santa-red-light font-semibold tracking-widest uppercase text-sm mb-4">
          404 — Page Not Found
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Ho ho ho&hellip; this page has gone missing!
        </h1>
        <p className="text-lg text-white/80 mb-10">
          Even Santa&rsquo;s elves couldn&rsquo;t find the page you&rsquo;re looking for.
          It may have been moved, renamed, or never existed. Here are some helpful
          places to head instead:
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            href="/"
            className="bg-santa-red hover:bg-santa-red-dark text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Back to Homepage
          </Link>
          <Link
            href="/contact-santa-guy"
            className="border border-white/40 hover:border-white text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Contact Santa Guy
          </Link>
        </div>
        <nav aria-label="Popular pages" className="text-white/70 text-sm">
          <p className="mb-3 font-medium text-white/80">Popular pages:</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <li>
              <Link href="/guy-harris-santa-voice" className="hover:text-white underline underline-offset-4">
                About Santa Guy
              </Link>
            </li>
            <li>
              <Link href="/santa-voice" className="hover:text-white underline underline-offset-4">
                Santa Voice
              </Link>
            </li>
            <li>
              <Link href="/hire-santa-voice" className="hover:text-white underline underline-offset-4">
                Hire Santa Voice
              </Link>
            </li>
            <li>
              <Link href="/santa-guy-message" className="hover:text-white underline underline-offset-4">
                Santa Messages
              </Link>
            </li>
            <li>
              <Link href="/santa-radio" className="hover:text-white underline underline-offset-4">
                Santa Radio
              </Link>
            </li>
            <li>
              <Link href="/santa-tracker" className="hover:text-white underline underline-offset-4">
                Santa Tracker
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
