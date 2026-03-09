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
- `components/` — Reusable UI components
- `app/api/contact/route.ts` — Contact form API route (Resend)
- `app/sitemap.ts` — Dynamic sitemap generation
- `public/robots.txt` — Search engine directives

## Environment Variables
- `RESEND_API_KEY` — Required for contact form to work

## Placeholder Assets Needed
- Hero background image
- Client logos (BBC Radio 2, Heart, Capital, ITV, Tesco, etc.)
- Guy Harris portrait photo
- Cartoon images for About page
- Audio demo MP3 files
- YouTube embed URLs
- App Store / Google Play badge images
- 6 ringtone zip files
- Favicon and OG image
- Testimonial quotes (real ones to replace placeholders)
