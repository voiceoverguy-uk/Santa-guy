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
- **Logos**: `santaguy-logo-black.png` (dark text, for white backgrounds), `santaguy-logo-white.png` (white text, for dark backgrounds/hero/footer)

## Header Behaviour
- **All pages**: Fixed transparent overlay header initially. White logo + white nav links over dark hero.
- **On scroll (>80px)**: Smoothly transitions to `bg-white/90 backdrop-blur-md` with black logo, dark nav links, subtle border and shadow.
- **Height**: `h-14 sm:h-16` (refined, compact)
- **Mobile menu**: Always white/solid background regardless of scroll state.

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

## Key Files
- `app/layout.tsx` — Root layout with Header/Footer
- `app/globals.css` — Tailwind + custom theme
- `components/Header.tsx` — Fixed header with transparent → solid scroll transition (all pages)
- `components/Hero.tsx` — Hero section with `overlayHeader` (default true) for padding
- `components/DemoCards.tsx` — 3-card image+audio demo section with real photos/MP3s
- `components/ContactForm.tsx` — Contact form with 25-char minimum validation + error display
- `app/api/contact/route.ts` — Contact API route (Resend, uses env vars)
- `app/sitemap.ts` — Dynamic sitemap generation
- `public/robots.txt` — Search engine directives

## Environment Variables
- `RESEND_API_KEY` — Required for contact form
- `CONTACT_TO_EMAIL` — Recipient email (enquiries@voiceoverguy.co.uk)
- `CONTACT_FROM_EMAIL` — Sender email (noreply@voiceoverguy.co.uk)

## Assets
- **Client logos**: 18 real logos in `public/clients/`
- **Studio photos**: 3 photos in `public/santa-guy-voice-over-{1,2,3}.jpg`
- **Audio demos**: 3 MP3s in `public/demos/Santa-voice-Guy-Demo-{1,2,3}.mp3`
- **Homepage videos**: 4 YouTube embeds (BBC Radio 2, CBeebies, Zoe Ball, P&O Ferries)

## Placeholder Assets Still Needed
- Cartoon images for About page
- App Store / Google Play badge images
- Testimonial quotes (real ones to replace placeholders)
