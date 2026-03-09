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
- **Homepage**: Transparent overlay header (fixed, over hero). White logo + white nav links initially. On scroll (>80px), transitions to solid white background with black logo and dark nav links. Smooth 300ms CSS transition.
- **Other pages**: Normal sticky white header with black logo and dark nav links.
- **Mobile menu**: Always white/solid background regardless of page or scroll state.

## Routes / Pages
| URL | Purpose |
|---|---|
| `/` | Homepage — authority landing page |
| `/guy-harris-santa-voice` | About page — bio, awards, credibility |
| `/hire-santa-voice` | Commercial conversion page (NEW) |
| `/santa-apps` | Santa apps showcase |
| `/santa-radio` | Santa Radio page |
| `/contact-santa-guy` | Contact form (Resend) |
| `/santa-guy-message` | Personalised Santa messages / Festive Studio |
| `/santa-voice-demo` | Audio demos / showreel |
| `/santa-ringtones` | Ringtone downloads (6 zip placeholders) |
| `/santa-text-alerts` | Text alert tones |
| `/santa-script-generator` | Script generator tool (optional) |

## Key Files
- `app/layout.tsx` — Root layout with Header/Footer
- `app/globals.css` — Tailwind + custom theme
- `components/Header.tsx` — Responsive header with transparent/solid scroll transition on homepage
- `components/Hero.tsx` — Hero section with `overlayHeader` prop for homepage
- `components/` — Reusable UI components
- `app/api/contact/route.ts` — Contact form API route (Resend)
- `app/sitemap.ts` — Dynamic sitemap generation
- `public/robots.txt` — Search engine directives

## Environment Variables
- `RESEND_API_KEY` — Required for contact form to work

## Client Logos
18 real client logos in `public/clients/` — displayed at full colour in the ClientLogos component.

## Placeholder Assets Still Needed
- Guy Harris portrait photo
- Cartoon images for About page
- Audio demo MP3 files
- YouTube embed URLs
- App Store / Google Play badge images
- Testimonial quotes (real ones to replace placeholders)
