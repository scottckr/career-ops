# Interview Intel: Dash0 — Senior Product Engineer (Frontend)

**Report:** [#038](../reports/038-dash0-2026-04-19.md) — Score 4.1/5
**Stage:** Discovery Call (round 1)
**Researched:** 2026-04-22
**Sources:** Company blog, Series B press coverage, Code RED podcast, ClickHouse partnership post, careers page

---

## Company Snapshot (know this cold)

| Signal          | Detail                                                                                                                             |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Founded         | 2023                                                                                                                               |
| Headquarters    | New York + Munich/Amsterdam                                                                                                        |
| Stage           | Series B — $110M raised March 2026, **$1B unicorn valuation**                                                                      |
| Investors       | Balderton Capital (lead), Accel, Cherry Ventures, DTCP/Deutsche Telekom                                                            |
| Customers       | 600+ including Zalando, Taco Bell, The Telegraph                                                                                   |
| CEO             | Mirko Novakovic — ex-CEO of Instana (observability, acquired by IBM)                                                               |
| CTO             | Ben Blackmore                                                                                                                      |
| Product         | OpenTelemetry-native observability platform: metrics, logs, traces, dashboards, alerting, website monitoring, synthetic monitoring |
| AI bet          | **Agent0** — agentic AI platform that doesn't just surface problems, it fixes them autonomously                                    |
| Storage engine  | ClickHouse (hot data) + S3 (cold) for all OTel data                                                                                |
| Differentiators | OTel-native, CNCF open standards (PromQL, Perses, OTLP), predictable pricing (per signal volume, not per seat or bytes)            |
| Remote          | EMEA remote — Sweden fully eligible                                                                                                |

---

## What "Senior Product Engineer" Means at Dash0

This isn't a pure "build features from tickets" role. The JD signals:

- **Co-own frontend architecture** — you're making structural decisions, not just implementing
- **Act as user advocate** — you're expected to push back on product decisions from a UX/DX lens
- **Mentor engineers** — tech lead behaviors expected even if title is IC
- **Shape the product** — "engineer who thinks like a product person"

Frame yourself accordingly: _tech lead who stays hands-on_, not _senior engineer who wants to grow into leadership._

---

## Discovery Call: What to Expect

A Discovery Call at a Series B startup is typically 30-45 minutes with a recruiter or hiring manager. Purpose:

1. Verify your background matches the role (high level)
2. Calibrate motivation — why Dash0, why now
3. Logistics: salary, remote, availability
4. Sell the company to you

**They specifically asked you to prepare:**

- 1-2 projects where you had the most impact
- Familiarity with Dash0's product and observability approach

This is not a technical screen. No coding. It's a conversation.

---

## Your Two Projects — Walk-Through Scripts

Dash0 explicitly asked for these. Prepare both cold — pick the most relevant based on how the conversation flows.

### Project 1 (Lead with this): Volvo Cars Product Detail Pages — Architecture Overhaul

**The hook:** "I inherited underperforming pages and led a full architectural rebuild that moved all Core Web Vitals from Poor to Good for 200,000 daily visitors."

**STAR+R format:**

- **Situation:** Volvo Cars' product detail pages — core commercial pages where buyers configure and explore cars — were slow and underperforming on every Core Web Vitals metric. Client-side data fetching meant visible layout shifts, high TTFB, slow LCP. Client-side fetching and lazy-loading the majority of page content also meant that the pages were not crawlable by search engines.
- **Task:** As tech lead for a team of 4-5, I owned the architectural direction. The existing system wasn't just slow — it was built in a way that made it structurally hard to improve without a rethink.
- **Action:** Designed and led migration from client-side data fetching to server-side rendering with CDN caching. Coordinated with product, UX, and backend teams across multiple markets. Set engineering standards, reviewed code, and kept the team moving while staying hands-on with the core migration work.
- **Result:** All Core Web Vitals (INP, TTFB, LCP) moved from Poor or Needs Improvement to Good. Accessibility and SEO improved as side effects. The pages now serve 200,000+ daily visitors across multiple markets reliably.
- **Reflection:** The biggest lesson was that performance work is often organizational as much as technical — getting buy-in from product and backend teams to change how data was served was as hard as the migration itself.

**Dash0 relevance to mention:** "Observability was part of this — we used Elastic and Grafana to track performance regressions and improvements after deployment. Knowing what signals to look for and how to act on them was critical to the rollout."

---

### Project 2 (If they want a second): Home Lab Observability Stack

This is a stronger fit for Dash0 — genuine personal observability work.

**The hook:** "Outside of work, I run a self-hosted home lab and set up a full Prometheus + Grafana monitoring stack. It's where I've developed a genuine feel for observability UX — what makes dashboards useful versus noisy."

- **What it is:** OPNsense firewall, TrueNAS NAS, Home Assistant, Cloudflare Zero Trust — all monitored via Prometheus + Grafana
- **The insight:** "Setting up Grafana for your own services forces you to think about what alerts are actually actionable. Most dashboards I've seen — including ones I've built — surface too much and surface it poorly. That's the UX problem Dash0 is trying to solve at scale."

**Why this matters for Dash0:** It makes the domain interest credible and personal. You're not just a frontend engineer applying to an observability company. You're someone who actually cares about this problem.

---

## Why Dash0 — Your Authentic Answer

Prepare a 60-second answer that hits all three layers:

"I've been doing frontend tech lead work at Volvo Cars for 3+ years — architectural decisions, team leadership, staying hands-on with code. It's been great, but it's a large corporation and the feedback loops are long.
The last year at Volvo Cars has had a lot of negative changes related to the work environment which has lead me to look for a new role where I can apply my skills in a more flexible environment.
I'm drawn to Dash0 because the product itself is about making complex systems legible to developers — that's a hard UX problem I find genuinely interesting. I use products like these both at work and at home, so I understand the value of a product that makes complex systems easy to understand.
I also find that using AI to manage the large volumes of data required for observability is a great fit, as it aligns perfectly with AI's strengths."

This hits: craft motivation + genuine domain interest + growth moment + specific proof it's not just resume-matching.

---

## Dash0 Product — Know This Before the Call

### Core product

OpenTelemetry-native observability. Collects **logs, metrics, traces** from any stack. Visualises them in dashboards, fires alerts, does website monitoring and synthetic monitoring. Key differentiator: built on **open standards** (PromQL, Perses, OTLP) — no vendor lock-in, no proprietary agents.

### Agent0

Their biggest bet post-Series B. AI agents that don't just surface problems — they fix them. Goes beyond "here's an alert" to autonomous remediation. This is where the $110M is going. As a frontend engineer, you'd likely be building the UI through which users interact with Agent0 — task orchestration, audit trails, intervention points, trust-building UX.

### Tech stack signals (inferred from job posts + blog)

- Frontend: React, TypeScript, likely Recharts or D3 for data viz, Tailwind
- Backend: Node.js, Go
- Data: ClickHouse (observability signals), PostgreSQL (customer config)
- Infra: Kubernetes, OpenTelemetry Collector, AWS S3
- They build OTelBin (an open-source OTel Collector config editor) — shows they contribute to the ecosystem, not just consume it

### Code RED podcast

Hosted by CEO **Mirko Novakovic**. RED = Requests, Errors, Duration — the three golden signals of observability. Recent episodes: AI in observability, cost & complexity challenges, autonomous SRE agents. If you listen to one episode: the CTO one (#20 "Behind the Screens: Inside Dash0 with Ben Blackmore") — gives you an inside view of how they think about the product.

**Key vocabulary they use:**

- "AI Nervous System for Production" — their Series B framing
- "OTel-native" — everything is built around OpenTelemetry, not retrofitted
- "The three golden signals" — Requests, Errors, Duration (from RED)
- "Autonomous action" — vs. just surfacing alerts
- "Open standards" — critical differentiator vs. Datadog/New Relic lock-in

---

## Likely Discovery Call Questions (and your best answers)

### "Tell me about yourself"

Don't read your CV back. Use your narrative:

"I'm a senior frontend engineer and tech lead. For the past 3+ years I've been the tech lead for Volvo Cars' product detail pages — pages that serve 200K visitors a day. The biggest thing I led there was a full architectural overhaul: migrated from client-side data fetching to SSR with CDN caching, moved all Core Web Vitals from Poor to Good. I lead a team of 4-5 developers, but I stay hands-on with code. I'm now looking for a role where I can do that same combination of architectural ownership and hands-on engineering, at a company building something I actually care about using."

### "Why Dash0?"

Use the authentic answer above.

### "What's your salary expectation?"

Dash0 hasn't published a range. They're a $1B unicorn with tier-1 backers — comp should be competitive. Based on your profile:

"I'm targeting 800K–1M SEK for a senior/lead frontend role, plus equity. I'm flexible on the exact split — what matters to me is the total package and the opportunity. What's the range you're working with?"

Always turn it back to them.

### "Are you actively interviewing elsewhere?"

Be honest and calibrated:

"I'm in early-stage conversations with a few companies, but this is one I'm most interested in from the domain fit perspective."

### "What's your availability / notice period?"

Know this in advance. Standard Swedish notice is 1-3 months depending on contract.

### "What's your experience with observability tools?"

"Professionally, I've used Elastic and Grafana for monitoring deployments at Volvo Cars. Outside of work, I run a self-hosted Prometheus + Grafana stack for my home lab — it monitors my NAS, firewall, and automation setup. It's given me a hands-on feel for what makes observability UX useful versus noisy."

### "Have you used D3 or Recharts?" (if it comes up at this stage)

"Not directly — those specific libraries aren't in my CV. I've built complex data-driven UIs with GraphQL at scale, and I'm comfortable learning visualization libraries quickly. If there's a take-home, I'd be happy to demonstrate.
I used a library called Chart.js few years ago."

---

## Story Bank Mapping

Story bank is currently empty. Stories to have ready (even if informal):

| Question type                                    | Your best story                                   | Status            |
| ------------------------------------------------ | ------------------------------------------------- | ----------------- |
| Most impactful project                           | Volvo Cars architectural overhaul                 | Ready (see above) |
| Technical leadership                             | Leading team of 4-5 through SSR migration         | Ready             |
| Dealing with ambiguity / architectural decisions | SSR architecture choice + stakeholder alignment   | Ready             |
| Cross-functional collaboration                   | Working with product + UX + backend at Volvo Cars | Ready             |
| Genuine interest in domain                       | Home lab observability                            | Ready             |

**Gap:** No story about a time you disagreed with a product decision and pushed back successfully. Dash0 values "user advocate" behavior — think through whether there's a Volvo Cars example of this.

---

## Technical Prep Checklist

_(Discovery call won't test these, but good to be comfortable)_

- [ ] **OpenTelemetry basics** — what it is, what a span/trace/metric/log is, why OTel matters vs. proprietary SDKs — [source: dash0.com/docs]
- [ ] **The three golden signals** — Requests, Errors, Duration — know this cold, it's in the podcast name
- [ ] **Agent0 overview** — read the launch blog post — shows you've done homework on their biggest bet
- [ ] **ClickHouse** — know it's their storage layer, not a blocker to know it deeply at this stage
- [ ] **Recharts or D3** — don't cram, just be honest about the gap and show curiosity

---

## Questions to Ask Them

These signal research and genuine interest:

1. **On Agent0:** "The Series B announcement framed Agent0 as the 'AI Nervous System for Production' — what does the frontend surface for Agent0 look like today, and where is it heading? I'm curious what the UX challenges are around building trust in autonomous actions."

2. **On team structure:** "The JD mentions co-owning frontend architecture and mentoring engineers — can you tell me more about the current frontend team size and how architecture decisions are made today?"

3. **On engineering culture:** "Ben Blackmore's podcast episode gave some good insight into how you think about the product. How does engineering input flow into product direction at Dash0?"

---

## Red Flags / What Not to Do

- **Don't overclaim Tailwind** — you have Volvo Cars CSS (Tailwind-inspired). Say "Tailwind-adjacent utility-first approach" if it comes up.
- **Don't invent observability experience** — your home lab is real and credible; don't inflate it beyond what it is.
- **Don't undersell the Volvo Cars proof point** — 200K daily visitors, all Core Web Vitals green, 3+ year tech lead tenure. This is enterprise-scale impact. Own it.
- **Don't be passive about the domain** — "observability tools" is a domain you've lived as an end user. Speak to the UX pain, not just the tech.

---

## Post-Call Actions

- [ ] Send a follow-up note within 24 hours thanking them and reaffirming interest
- [ ] Note any signals about their timeline or next steps
- [ ] If they mention a take-home: D3/Recharts — spend an evening before receiving it to get comfortable with the basics
