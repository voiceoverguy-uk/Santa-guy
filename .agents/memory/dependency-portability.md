---
name: Portable dependency lockfiles
description: External deployment constraint for temporary browser-testing dependencies.
---
Check lockfile download hosts after adding temporary testing tools; do not leave unused testing packages or Replit-internal tarball URLs in external deployment inputs.

**Why:** A temporary Playwright install introduced internal registry URLs that Vercel could not resolve, failing dependency installation before the application build began.

**How to apply:** Prefer existing browser tooling. Remove temporary dependencies when finished and verify lockfile portability before saying changes are ready to sync. A local build alone cannot demonstrate external dependency-download success.