---
name: Google reviews destination
description: Business verification and limitations of Google's official reviews links.
---
Use Places API (New) googleMapsLinks.reviewsUri exactly as returned, after matching both the business name and website. The intended business is VoiceoverGuy associated with voiceoverguy.co.uk, not an assumed separate SantaGuy listing.

**Why:** The user explicitly requires an official existing-reviews link, not a search URL, overview, or constructed deep link. In fresh signed-out browser tests on 2026-09-25, the official URI showed existing reviews on mobile with a Maps app prompt, but Google served a limited overview on desktop. This is not a full desktop pass.

**How to apply:** Preserve the official URI rather than attempting undocumented URL hacks. Report actual desktop/mobile behavior and Google limitations honestly; do not promise maps-free or sign-in-free reviews.

Keep ratings retrieval on the existing legacy Places endpoints unless an API migration is separately authorized.

**Why:** The identity-hardening request explicitly excludes Google Cloud changes; switching APIs could introduce enablement or key-restriction requirements unrelated to business verification.

**How to apply:** Validate the business identity within the existing API flow rather than treating the use of Places API (New) to verify the reviews link as permission to migrate ratings retrieval.