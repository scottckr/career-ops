# **Home Lab — Observability Stack**

**Context**: Personal project, self-hosted infrastructure

---

## **What it is**

- Self-hosted home lab running **OPNsense** (router/firewall), **Unbound** (DNS), **TrueNAS** (NAS), and **Home Assistant** (home automation), protected via **Cloudflare Zero Trust**.
- Monitoring stack: **Prometheus** for data collection, **Grafana** for dashboards.
- Dashboards cover: **OPNsense router metrics** (network throughput, firewall state) and **Unbound DNS** — primarily to monitor temperatures and CPU load across hardware.

---

## **Why I built it**

- Curiosity-driven — wanted to understand what was happening inside my own infrastructure, not just assume it was fine.
- Practical trigger: wanted visibility into hardware thermals and CPU load on the NAS and router before problems surface.

---

## **What I learned**

- **Grafana's per-panel query model creates duplication at scale.** Each panel fetches its own data — if you have multiple panels using the same source with slight filter variations, you end up duplicating query logic across every panel. A dashboard-wide query model would be more practical for this pattern, even if it sacrifices some cross-source flexibility.
- **Setting up monitoring for your own systems forces different thinking.** You can't ignore a noisy dashboard — it's your own infra. It made me much more conscious of what signals are actually worth watching vs. what just adds noise.

---

## **Why it matters for Dash0**

- The UX problems I hit in Grafana — query duplication, dashboard noise — are exactly the problems Dash0 is trying to solve at scale for engineering teams.
- Having personal, hands-on experience with observability tooling means I understand the product domain as a user, not just as an engineer building UI components.
