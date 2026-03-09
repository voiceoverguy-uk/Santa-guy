# SantaGuy Website (santaguy.co.uk)

## Overview
Multi-page Next.js (App Router) website for Guy Harris — the UK's trusted voice of Santa. Designed for Vercel deployment and GitHub push. Premium, festive, professional design targeting agencies, producers, radio stations, podcasts, and brands.

## Tech Stack
- **Framework**: Next.js (App Router) with TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Email**: Resend (contact form)
- **Deployment target**: Vercel
- **Dev server**: Port 5000

## Brand
- **Primary colour**: #9C060B (VoiceoverGuy red)
- **Style**: Premium, festive, modern, spacious, trustworthy
- **Font**: Inter (system fallback)
- **Logos**: `santaguy-logo-black.png` (for white backgrounds), `santaguy-logo-white.png` (for dark backgrounds/hero/footer)
- **CTA label**: "Check Availability" (not "Hire Santa Voice" — softer conversion language)

## Header Behaviour
- **All pages**: Fixed transparent overlay header. White logo + white nav links over dark hero.
- **On scroll (>80px)**: Smoothly transitions to `bg-white/90 backdrop-blur-md` with black logo, dark nav links, subtle border/shadow.
- **Height**: `h-14 sm:h-16` (refined, compact)
- **Mobile menu**: Always white/solid background.

## Routes / Pages
| URL | Purpose |
|---|---|
| `/` | Homepage — authority landing page |
| `/guy-harris-santa-voice` | About page — bio, awards, credibility |
| `/hire-santa-voice` | Commercial conversion page |
| `/santa-apps` | Santa apps showcase |
| `/santa-radio` | Santa Radio page |
| `/contact-santa-guy` | Contact form (Resend) |
| `/santa-guy-message` | Personalised Santa messages / Festive Studio |
| `/santa-voice-demo` | Audio demos / showreel |
| `/santa-ringtones` | Ringtone downloads (6 zip files) |
| `/santa-text-alerts` | Text alert tones |
| `/santa-script-generator` | Script generator tool |

## Key Components
- `components/Header.tsx` — Fixed header, transparent → solid scroll transition (all pages)
- `components/Hero.tsx` — Hero section with `overlayHeader` (default true)
- `components/DemoCards.tsx` — 3-card image+audio demos with exclusive playback (only one plays at a time)
- `components/VideoCard.tsx` — YouTube thumbnail + custom play overlay, loads iframe on click
- `components/ContactForm.tsx` — Form with 25-char min validation, honeypot, obfuscated email
- `components/EmailButton.tsx` — Reusable obfuscated email button (JS-based mailto, no raw email in HTML)
- `app/api/contact/route.ts` — Contact API (Resend, env vars, rate limiting, branded HTML email template)

## Environment Variables
- `RESEND_API_KEY` — Required for contact form
- `CONTACT_TO_EMAIL` — Recipient email
- `CONTACT_FROM_EMAIL` — Sender email

## Email Protection
- Raw email addresses are NOT displayed in HTML anywhere on the site
- `EmailButton` component uses JS to construct mailto URLs at click time
- Used in: contact page, footer, contact form error messages

## Assets
- **Client logos**: 18 real logos in `public/clients/`
- **Studio photos**: 3 in `public/santa-guy-voice-over-{1,2,3}.jpg`
- **Audio demos**: 3 MP3s in `public/demos/Santa-voice-Guy-Demo-{1,2,3}.mp3`
- **Homepage videos**: 4 YouTube embeds (BBC Radio 2, CBeebies, Zoe Ball, P&O Ferries)

## Placeholder Assets Still Needed
- Cartoon images for About page
- App Store / Google Play badge images
- Testimonial quotes (real ones to replace placeholders)
