---
name: Run scan script first, no duplicate AI work
description: For portal scans, always run npm run scan first and don't duplicate its work with AI WebSearch queries for the same boards
type: feedback
---

Always run `npm run scan` (or `node scan.mjs`) first for portal scanning. This script handles all Greenhouse/Ashby/Lever API calls zero-token. After it runs, do NOT perform WebSearch queries for the same job boards or companies the script already covered — that duplicates work and wastes tokens.

**Why:** User explicitly corrected this twice. The script is comprehensive for tracked companies with known ATS patterns.

**How to apply:** In the scan workflow, run `npm run scan`, report its output, then only proceed with WebSearch for companies explicitly marked `scan_method: websearch` in portals.yml if any new ones exist. Do not launch a subagent that re-runs WebSearch for boards the script covers.
