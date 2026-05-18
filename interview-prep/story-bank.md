# Story Bank — Master STAR+R Stories

This file accumulates your best interview stories over time. Each evaluation (Block F) adds new stories here. Instead of memorizing 100 answers, maintain 5-10 deep stories that you can bend to answer almost any behavioral question.

## How it works

1. Every time `/career-ops oferta` generates Block F (Interview Plan), new STAR+R stories get appended here
2. Before your next interview, review this file — your stories are already organized by theme
3. The "Big Three" questions can be answered with stories from this bank:
   - "Tell me about yourself" → combine 2-3 stories into a narrative
   - "Tell me about your most impactful project" → pick your highest-impact story
   - "Tell me about a conflict you resolved" → find a story with a Reflection

## Stories

### [Impact / Architecture] Volvo Cars Product Detail Pages — SSR Migration

**Source:** Report #038 — Dash0 — Senior Product Engineer
**S (Situation):** Volvo Cars' product detail pages (core commercial pages where buyers configure cars) were slow and underperforming on every Core Web Vitals metric. Client-side data fetching caused visible layout shifts, high TTFB, and slow LCP. The pages serve 200,000+ daily visitors across multiple markets.
**T (Task):** As tech lead for a team of 4-5, I owned the architectural direction. The existing system was structurally hard to improve without a rethink — not just slow, but the wrong architecture for a high-traffic, SEO-critical surface.
**A (Action):** Designed and led migration from client-side data fetching to server-side rendering with CDN caching. Coordinated with product, UX, and backend teams across multiple markets. Set engineering standards, drove code reviews, and stayed hands-on with the core migration work. Got buy-in from backend teams to change how data was served — as much an organizational challenge as a technical one.
**R (Result):** All Core Web Vitals (INP, TTFB, LCP) moved from Poor or Needs Improvement to Good. Accessibility and SEO improved as side effects. The pages reliably serve 200,000+ daily visitors across multiple markets.
**Reflection:** Performance work is often organizational as much as technical. Getting stakeholder alignment to change how the system works is frequently harder than the engineering itself.
**Best for questions about:** Most impactful project, technical leadership, architectural decisions, cross-functional collaboration, web performance, measurable impact

---

### [Domain / Side Project] Home Lab Observability Stack

**Source:** Report #038 — Dash0 — Senior Product Engineer
**S (Situation):** Outside of frontend work, I wanted to keep infrastructure and networking skills current — and understand observability tooling from a user perspective.
**T (Task):** Set up and maintain a self-hosted home lab with full monitoring.
**A (Action):** Running OPNsense firewall, TrueNAS NAS, Home Assistant, and Cloudflare Zero Trust tunnels. Set up Prometheus + Grafana for service monitoring across the stack. Managed entirely via CLI on Linux.
**R (Result):** Ongoing. The Grafana setup in particular has given me hands-on feel for what makes observability dashboards useful versus noisy — most surface too much and act on too little.
**Reflection:** Using these tools yourself as an end user changes how you think about the UX. The alerting and dashboard design problems Dash0 is solving are ones I've encountered firsthand.
**Best for questions about:** Domain interest, personal projects, infrastructure familiarity, observability, Linux, genuine motivation for devtool/observability companies

---

### [Domain / Background] Music Production Degree + Songwriting Diploma

**Source:** Report #047 -- Soundtrack -- Senior Frontend Engineer (Music Experience)
**S (Situation):** Before moving into software, I spent 5 years studying music formally -- B.Sc. in Audio & Music Production at Dalarna University (2010-2013) and a Higher Education Diploma in Songwriting & Music Composition at Lulea University of Technology (2013-2015).
**T (Task):** Not a traditional STAR story -- this is a conversation piece about genuine domain knowledge.
**A (Action):** Studied music theory, signal processing, sound design, production, and composition. Used DAWs and music production tools as primary working environment. Maintained music as a serious hobby throughout my software career.
**R (Result):** Genuine technical understanding of audio -- how metadata, playlists, discovery, and recommendations map to what listeners actually want. Not a casual listener -- someone who understands how music is structured and why it matters.
**Reflection:** This background changes how I think about music product decisions. When a playlist feature feels wrong, I can often name why -- the transition logic, the mood coherence, the tempo matching. That's a different perspective than most engineers bring.
**Best for questions about:** Genuine motivation for music tech roles, domain knowledge at Soundtrack/Spotify/similar, "why us?", personal background, what makes you different from other candidates
