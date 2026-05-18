# Project: Volvo Cars Product Detail Pages — Architecture Overhaul

## Overview

**Project Title:** Volvo Cars Product Detail Pages — Architecture Overhaul
**Role:** Tech Lead (Frontend)
**Team Size:** 4–5 engineers
**Duration:** ~6 months
**Impact:** Improved Core Web Vitals from Poor to Good for 200,000+ daily visitors
**Key Technologies:** Next.js, Elastic, Grafana, CDN caching

---

## Situation

I joined the team responsible for the product detail pages as a tech lead a little over 3 years ago. I inherited pages that at the time were fetching data for components on the client via server-side populated providers. This meant that data would not be available until after hydration, and many components were also lazy-loaded, which meant they did not display until after hydration. This made the pages feel slow as components and data would often be loading content while users were scrolling through them.

This performance issue was clearly visible in our Core Web Vitals, which were all in the higher ranges of Needs Improvement or in the Poor range. All of this lazy-loading meant that very small pieces of the page were crawlable by search engines and affected our ranking. It was also very hard to follow the flow of the data to a rendered page, causing frustration for developers.

It's important to note that **server-side rendering (SSR)** was already being used in the app, but **a lot of data was still fetched on the client** via **providers** by components using **hooks**. Additionally, **CDN caching was already implemented**, but **it was not being used optimally**, as **none of the client-fetched data would be cached**.

---

## Task

About 2 years ago, the product manager and UX/UI designers planned a brand new design for the product detail pages. This meant completely new components built from scratch.

With this re-design, I proposed that we also consider rethinking the architecture of our pages. Around the same time, Next.js's app router and server components were becoming a bit more mature. I proposed that we move to fetching as much data as possible on the server and pass it down to the components right away. This would make it very easy to see where the data is being fetched and where it ends up in components. It would also mean that data is available right away when the page is rendering, and along with our CDN caching, this would make the entire page very quick for users to access and would make the whole page crawlable. It also made more content of the pages crawlable by search engines.

---

## Action

### Technical Implementation

- Migrated to **server-side rendering (SSR)** using **Next.js** (or the appropriate framework), **leveraging the app router and server components** to improve **data flow visibility** and **maintainability**.
- Implemented **CDN caching** to **reduce TTFB** and improve **scalability**, **ensuring that cached data was used effectively** for **server-fetched content**.
- Set up **performance monitoring** using **Elastic** and **Grafana** to **track regressions** and **improvements**.
- Improved **SEO and accessibility** by **removing client-side rendering** and **lazy loading**.

### Leadership & Collaboration

- **Led the team** through the **migration**, ensuring **alignment** with product and UX.
- **Reviewed code** and **set engineering standards**.
- **Stayed hands-on** — wrote **key parts of the migration**, including **server-side rendering logic**.
- **Coordinated with backend teams** to ensure **data was served efficiently**.

---

## Result

The project achieved **significant improvements** in **performance, SEO, and user experience**:

- **Core Web Vitals** improved from **Poor or Needs Improvement** to **Good**.
- **LCP improved from 6.5s to 2.1s**.
- **FID improved from 1200ms to 180ms**.
- **CLS dropped from 0.35 to 0.1**.
- **SEO improved significantly**, leading to **better search rankings**.
- **Accessibility improved** — **contrast ratios improved**, and **keyboard navigation became more reliable**.
- **User engagement increased**, and **conversion rates improved**.
- The **team became more aligned** around **performance and UX**.

---

## Reflection

This project was a **major success**, but it was **not without challenges**:

- **Performance is not just a technical problem** — it’s a **cross-functional challenge**.
- **Getting buy-in from product and backend teams** was **critical** to the success of the project.
- **Setting engineering standards** and **reviewing code** helped **ensure quality**.
- **Staying hands-on** with the **migration work** helped **keep the team aligned** and **driven**.

### Relevance to Dash0

This experience is directly relevant to **Dash0** because:

- **Observability was part of this** — we used **Elastic and Grafana** to **track performance regressions** and **improvements**.
- **Knowing what signals to look for and how to act on them** was **critical to the rollout**.
- This project shows **how performance and observability can be aligned** — a key **value proposition** for **Dash0**.

---

## Summary

This project demonstrates:

- **Leadership** and **technical depth**.
- **Impact** on **performance, SEO, and user experience**.
- **Cross-functional collaboration**.
- **Understanding of observability** — a key **value proposition** for **Dash0**.
