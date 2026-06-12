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

---

### [Ownership / Early Stage] AppSpotr -- Promoted to Lead in Fast-Moving Startup

**Source:** Report #060 -- Matchspace Music AG -- Full-Stack Engineer Next.js
**S (Situation):** AppSpotr was a small startup (~10-15 people) building a low-code mobile app builder. I joined as a Web Developer and was promoted to Lead Web Developer in the final 6 months.
**T (Task):** Own frontend architecture direction and developer direction for the team -- no existing senior to hand off from.
**A (Action):** Took full ownership of frontend architecture decisions, introduced standards, and drove technical direction in a lean environment where everyone wore multiple hats.
**R (Result):** Product shipped; gained firsthand experience of what it means to be the technical decision-maker with no safety net.
**Reflection:** Small teams teach you to prioritize ruthlessly. There's no infrastructure team to fix your database schema or a platform team to set up your CI. Every decision is yours -- and that's clarifying.
**Best for questions about:** Startup experience, sole engineer situations, taking ownership in small teams, greenfield/early-stage product development

---

### [Collaboration / Non-technical Stakeholders] Volvo Cars -- CMS Workflow Optimisation

**Source:** Report #060 -- Matchspace Music AG -- Full-Stack Engineer Next.js
**S (Situation):** Volvo Cars' editorial teams were spending excessive time managing page setups in Sitecore and Contentstack -- the CMS workflows were complex, error-prone, and required developer intervention for routine updates.
**T (Task):** As tech lead, I owned the editorial platform alongside the performance work -- not just the customer-facing pages, but the content management layer that fed them.
**A (Action):** Collaborated closely with editorial stakeholders to understand their actual workflows. Redesigned the CMS integration layer to simplify how pages were configured -- reducing the technical surface area editorial teams needed to understand, and reducing developer involvement in routine content operations.
**R (Result):** Significantly reduced friction for editorial teams. Developers spent less time on CMS firefighting. Better separation of concerns between content management and product features.
**Reflection:** Technical decisions ripple outward. Optimizing for the editorial team's workflow improved both content quality and developer velocity -- two goals that look unrelated until you map the dependencies.
**Best for questions about:** Communicating technical tradeoffs to non-technical stakeholders, collaboration with product/editorial, CMS/workflow experience

---

### [Performance / Rendering] Volvo Cars -- Core Web Vitals: From Metrics to Architecture

**Source:** Report #061 -- Linear -- Full Stack Engineer
**S (Situation):** INP, TTFB, and LCP were all in the Poor or Needs Improvement range for Volvo Cars' product detail pages -- pages that serve 200K daily visitors and are the primary commercial surface where buyers configure cars.
**T (Task):** As tech lead, determine whether the performance problem was tunable (add caching, optimize images) or structural (wrong architecture for this access pattern).
**A (Action):** Diagnosed that client-side data fetching at page load was the root cause of TTFB and LCP failures -- not individual slow queries but the entire data access pattern. Designed the migration to SSR with CDN caching. Coordinated with backend teams to change how data was served (organizational lift), set engineering standards for the migrated pages, and stayed hands-on with the core migration.
**R (Result):** All Core Web Vitals moved from Poor/Needs Improvement to Good. Side effects: accessibility improvements, SEO lift, simplified CDN configuration. Pages reliably serve 200K+ visitors daily.
**Reflection:** Performance problems are often architectural, not tactical. Adding cache headers to a client-rendered page doesn't fix TTFB -- you have to change what the server does. The diagnosis is as important as the fix.
**Best for questions about:** Performance optimization, data synchronization architecture, "walk me through a hard technical problem", rendering and SSR, measuring impact

---

### [CLI / DX / Cross-Platform] Home Lab -- CLI-First Infrastructure Management

**Source:** Report #063 -- Supabase -- Tech Lead CLI & Local Experience
**S (Situation):** Outside of frontend work, I maintain a self-hosted home lab managed entirely via CLI on Linux -- OPNsense firewall, TrueNAS NAS, Docker-based services, Prometheus + Grafana monitoring, Home Assistant, and Cloudflare Zero Trust tunnels.
**T (Task):** Keep the stack operational and observable without a GUI safety net. Every configuration change, network rule update, and service restart happens through terminal commands.
**A (Action):** Built familiarity with cross-platform CLI patterns: OPNsense XML configuration, TrueNAS CLI management, WireGuard tunnel setup, Cloudflare Zero Trust configuration. Added Prometheus scraping and Grafana dashboards to surface service health. Learned from friction points in CLI tools that shipped poor UX -- ambiguous error messages, platform-specific flag behavior, undocumented defaults.
**R (Result):** Ongoing. The experience has given me firsthand understanding of what makes a CLI tool usable: clear help text, predictable command structures, meaningful error messages, and safe defaults.
**Reflection:** Building good CLI UX is harder than it looks. When a flag behaves differently across platforms or an error message says "Error: failed" with no context, users lose trust fast. The Supabase CLI is used by thousands of developers daily -- that bar is much higher than most UI work.
**Best for questions about:** CLI affinity, developer tools DX, Linux/infrastructure familiarity, why Supabase specifically, cross-platform experience, what makes devtools different from consumer apps

---

### [Audio / Domain] Voice Quality as a Craft Problem

**Source:** Report #064 -- ElevenLabs -- Full-Stack Engineer (Front-End Leaning)
**S (Situation):** ElevenLabs' core value proposition is voice AI that sounds indistinguishable from human speech. Most engineers evaluate this as a binary -- "does it sound robotic or not?" I have a different reference point.
**T (Task):** Not a traditional STAR story -- a conversation piece about domain knowledge applied to product thinking.
**A (Action):** Five years of formal audio education -- signal processing, production techniques, how the human ear perceives tonal quality, timing, and naturalness. Used DAWs as a primary working environment for years. Can identify specific artifacts in voice output (breath simulation, consonant sharpness, prosody rhythm) that a non-audio engineer might overlook as "good enough."
**R (Result):** I can contribute to voice product decisions with the perspective of someone who has spent years studying sound, not just consuming it. That is a different input than most engineers bring.
**Reflection:** The best engineers at audio companies are not necessarily musicians -- but they understand why quality matters beyond the obvious level. I bring both: engineering rigor and audio craft sensibility.
**Best for questions about:** Why ElevenLabs specifically, domain knowledge, what makes you different from other candidates, genuine motivation for audio/voice companies

---

### [DevOps / Standards] Volvo Cars -- Establishing Testing and CI Culture

**Source:** Report #069 -- Evolute CX GmbH -- Senior Full-Stack Developer
**S (Situation):** Inherited a team and codebase at Volvo Cars where CI/CD and testing practices were inconsistent -- no shared testing conventions, no systematic coverage, slow feedback loops on deploys.
**T (Task):** As tech lead, establish engineering standards that a 4-5 developer team would own and maintain without constant oversight.
**A (Action):** Introduced Vitest for unit/integration tests, React Testing Library for component testing, and Playwright for end-to-end coverage. Made test colocation the default (*.test.ts next to source). Set up consistent CI pipelines using Docker for local dev parity. Ran regular code reviews to reinforce standards and explain the rationale behind each rule.
**R (Result):** New engineers onboarded faster with a clear testing baseline. Regressions caught before production. Code review culture improved velocity by surfacing architectural questions earlier rather than late in the cycle.
**Reflection:** Standards only stick if the team understands the "why." I always explain rationale, not just rules -- engineers who understand the problem own the solution.
**Best for questions about:** Engineering standards, CI/CD, testing culture, developer experience, code review practice, scaling a team

---

### [Async / Remote] Multi-Market Delivery at Volvo Cars

**Source:** Report #069 -- Evolute CX GmbH -- Senior Full-Stack Developer
**S (Situation):** Volvo Cars product detail pages serve multiple markets globally -- stakeholders (product, UX, backend, editorial) were distributed across timezones and functions. No single sync meeting could capture everything.
**T (Task):** Keep delivery moving with distributed stakeholders while maintaining alignment on requirements and architecture.
**A (Action):** Structured async-first communication: written requirements docs before sprint work started, async design reviews for architectural proposals, explicit scoping documents to surface ambiguity before implementation. Minimal sync meetings, maximum written clarity.
**R (Result):** Consistent delivery across markets with low coordination overhead. New engineers could onboard from the written record rather than tribal knowledge. Fewer mid-sprint surprises.
**Reflection:** Remote-first demands written clarity above all else. Underdocumented decisions cause more delay than timezone gaps. If it's not written down, it doesn't exist for a distributed team.
**Best for questions about:** Remote work, async collaboration, multi-stakeholder delivery, distributed teams, communication, documentation culture

---

### [Product Craft / Scale] Building for Millions vs. Thousands

**Source:** Report #064 -- ElevenLabs -- Full-Stack Engineer (Front-End Leaning)
**S (Situation):** At Volvo Cars, the product detail pages are the primary commercial surface -- where buyers configure and price cars. The stakes for reliability and performance are directly tied to revenue. 200K+ daily visitors across multiple markets.
**T (Task):** Architect and deliver a system that is fast, reliable, and accessible at that scale.
**A (Action):** Designed SSR migration with CDN caching, coordinated across teams, set reliability standards. Built monitoring via Elastic + Grafana to surface regressions early. Designed for failure modes, not just the happy path.
**R (Result):** All Core Web Vitals moved from Poor/Needs Improvement to Good. Zero regressions post-launch on core metrics. System handles peak traffic reliably across markets.
**Reflection:** Scale changes your instincts. Adding cache headers to a client-rendered page does not fix TTFB -- you have to change what the server does. Building for millions of ElevenLabs users requires the same discipline; the product surface is more dynamic and user-generated, but the reliability instincts transfer.
**Best for questions about:** Scale, reliability, performance at production traffic, moving from thousands to millions of users, architectural decision-making

---

### [Mentoring / Team Growth] Embedding Standards Through Daily Work

**Source:** Report #071 -- Factor Eleven -- Senior Frontend Engineer (React.JS, Europe)
**S (Situation):** Volvo Cars' team was growing -- new engineers joining both my team and adjacent ones. Onboarding quality varied and engineering consistency across the codebase was drifting.
**T (Task):** Raise the baseline without adding bureaucratic overhead -- keep the team moving fast while improving quality and making new engineers productive quickly.
**A (Action):** Set code review standards, led architectural walkthroughs, and ran onboarding for new engineers. Embedded mentoring in daily work -- code review comments explained the why, not just the what. Ran small pairing sessions when patterns kept appearing in reviews. Built docs that lived next to the code, not in a separate wiki.
**R (Result):** Improved consistency across the codebase. Reduced back-and-forth in code reviews. New engineers ramp faster because the standards are documented and enforced at review time, not explained after the fact.
**Reflection:** Mentoring works best when it's embedded in daily work, not scheduled separately. Code review is the highest-leverage mentoring surface -- every comment is a teaching moment, and the context is live code, not hypotheticals.
**Best for questions about:** Mentoring, team growth, engineering standards, onboarding, remote team knowledge transfer, code review culture

---

### [Estimation / Planning] Estimating Work That Spans Multiple Teams

**Source:** Report #071 -- Factor Eleven -- Senior Frontend Engineer (React.JS, Europe)
**S (Situation):** As tech lead at Volvo Cars, frontend work frequently intersected with CMS updates, backend API changes, and design system deliveries. Single-team estimates were often wrong because the cross-team dependencies weren't accounted for.
**T (Task):** Develop an estimation approach that surfaced cross-team risks early enough to adjust plans, not discover them mid-sprint.
**A (Action):** Broke work to story level before estimating. Flagged integration points as explicit dependencies in sprint planning. Buffer was applied at the dependency boundary, not the task level. Built a habit of tracking actual vs. estimated to calibrate personal bias over time.
**R (Result):** Consistent delivery on multi-stakeholder projects. Fewer mid-sprint surprises. Product stakeholders trusted the estimates because they came with an explicit assumptions list -- if the assumptions changed, the estimate changed.
**Reflection:** Estimation accuracy improves by tracking actual vs. estimated over time -- it reveals your personal bias patterns (I consistently underestimate integration work). The most valuable thing you can put in an estimate is the list of assumptions it rests on.
**Best for questions about:** Planning, estimation, cross-team delivery, stakeholder communication, sprint health, technical project management

---

### [Developer Tools / DX] Using Linear as a Developer -- What I Notice

**Source:** Report #061 -- Linear -- Full Stack Engineer
**S (Situation):** I've used Linear for project and task tracking as a developer. It's the kind of tool where the UX decisions are visible -- the keyboard shortcuts, the offline sync, the rendering speed.
**T (Task):** Not a traditional STAR story -- a conversation piece about genuine domain knowledge and what I'd bring as an engineer who uses the product.
**A (Action):** Noticed specific product behaviors: the instant UI (no loading states), the real-time sync, the keyboard-centric design, the way issue state is managed without page refreshes. These aren't accidental -- they're the result of specific architectural choices.
**R (Result):** Genuine understanding of the product, not just the company. I can speak to why the rendering model matters, why the sync architecture is hard, and why getting it right changes how developers feel about their tools.
**Reflection:** Building developer tools is different from building for end consumers because your users will immediately notice if the performance model or UX patterns are wrong. The bar is higher. That's the interesting part.
**Best for questions about:** Why Linear specifically, genuine motivation, user empathy for developer tools, what makes devtools different from consumer apps

---

### [Product Spec / Diagnosis] Diagnosing Root Cause Before Building — Volvo Cars SSR Decision

**Source:** Report #072 — Ashby — Senior Software Engineer, Product Engineering, EU
**S (Situation):** Volvo Cars' product detail pages were underperforming on all Core Web Vitals. The team had tried tactical fixes (image optimisation, cache headers on individual assets) without improvement. The question was whether to keep tuning or rethink the architecture.
**T (Task):** As tech lead, determine the actual root cause — not assume the fix — before committing the team to a migration.
**A (Action):** Investigated the full data flow: client-side data fetching was triggering layout shifts and high TTFB on every page load, regardless of CDN configuration. The problem wasn't slow queries — it was the wrong architecture for this access pattern. Wrote a diagnosis document explaining why tuning wouldn't close the gap, what the SSR + CDN caching alternative would deliver, and what it would cost to implement. Presented this to product stakeholders and backend teams to get alignment before a single line of migration code was written.
**R (Result):** Stakeholders approved the migration approach. Delivery proceeded with clear scope and no mid-project pivots. All Core Web Vitals moved from Poor/Needs Improvement to Good.
**Reflection:** Ashby's product engineers are expected to research the problem before building — not just execute on a spec. Diagnosing whether to tune or rethink is exactly that skill. The written proposal was as important as the technical work; it surfaced assumptions and got alignment without a single meeting.
**Best for questions about:** Product thinking, ambiguity tolerance, research before building, spec-writing, architectural decision-making, "tell me about a time you challenged the existing approach"

---

### [Abstraction / Leverage] CMS Content Model Redesign — Volvo Cars Editorial Independence

**Source:** Report #072 — Ashby — Senior Software Engineer, Product Engineering, EU
**S (Situation):** Volvo Cars editorial teams managed page setups across multiple markets using Sitecore and Contentstack. The existing CMS integration required developer involvement for routine content updates — mixing shared media assets with product-specific content in a way that was brittle and hard for non-technical users to manage.
**T (Task):** Design a content model that gave editorial teams independence for routine work, while keeping the architecture flexible enough for product feature development.
**A (Action):** Redesigned the CMS integration layer to separate concerns: shared assets and copy in one layer, product-specific market content in another. Built reusable editorial components that editors could configure without developer involvement. Documented the model so new markets could onboard without custom work.
**R (Result):** Editorial teams gained full independence for routine page management. Developer time previously spent on CMS firefighting was freed for product work. The abstraction cascaded across all markets using the same page templates — one design decision improved the working lives of editors, developers, and future market teams simultaneously.
**Reflection:** The best abstractions solve a class of problems, not a single instance. Ashby talks about their "generalized declarative filter architecture" as an example of this — a single system that serves many features. The CMS redesign followed the same principle: build the right model once, and it multiplies across every page, market, and team that depends on it.
**Best for questions about:** Creating leverage, abstraction design, customer/user empathy (editorial teams as users), cross-functional impact, "how have you improved a system for non-technical users"

---

### [Async / Written Communication] Spec-First Delivery Across Distributed Stakeholders — Volvo Cars

**Source:** Report #072 — Ashby — Senior Software Engineer, Product Engineering, EU
**S (Situation):** Volvo Cars product detail pages served multiple markets. Stakeholders — product, UX, backend, editorial — were distributed across timezones and functions. Decisions made verbally in a meeting disappeared between timezones and resurfaced as mid-sprint surprises.
**T (Task):** Keep delivery predictable with distributed stakeholders without adding meeting overhead.
**A (Action):** Adopted spec-first development: written requirements documents before any sprint work started, async design reviews for architectural proposals (written proposal, async comments, decision captured in writing). Every integration point with backend or CMS teams was an explicit documented dependency with its own estimate buffer. New engineers onboarded from the written record, not tribal knowledge.
**R (Result):** Consistent delivery across markets with low coordination overhead. Product stakeholders trusted estimates because the assumptions behind them were visible — if assumptions changed, the estimate changed, and everyone understood why. Fewer mid-sprint surprises. The written record also served as onboarding material for new engineers joining the team.
**Reflection:** Ashby's engineering culture targets < 2h of meetings per week. This only works if written communication is a first-class discipline — decisions must be captured in text at the moment they're made. The pattern I built at Volvo Cars is exactly that: spec first, async review, decision in writing. It's the only model that scales across timezones without meetings.
**Best for questions about:** Async communication, remote work, distributed team delivery, Ashby culture fit, "how do you keep stakeholders aligned without micromanaging", deliberate communication
