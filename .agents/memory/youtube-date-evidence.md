---
name: YouTube publication-date evidence
description: Reliable fallback evidence when YouTube oEmbed does not expose publication dates.
---
Before declaring a YouTube publication date unavailable, inspect the public watch page's player metadata. Match videoDetails.videoId to the requested video and inspect microformat.playerMicroformatRenderer publishDate and uploadDate. Record the source and exact timezone-bearing values; investigate any disagreement rather than choosing an arbitrary date.

**Why:** In the SantaGuy audit, oEmbed verified titles/uploaders/thumbnails but lacked dates. A subsequent watch-page check supplied matching publication/upload timestamps for all five videos, avoiding unnecessary removal of otherwise supportable VideoObjects.

**How to apply:** Treat this as a provider-evidence technique, not a guarantee that every watch page exposes metadata. If unavailable or conflicting, omit unsupported markup rather than infer dates from campaign years. Uploader identity still does not establish creator/publisher ownership of the production.