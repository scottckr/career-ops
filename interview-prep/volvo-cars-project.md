# Volvo Cars Product Detail Pages — Architecture Overhaul

## Situation

I inherited underperforming pages and led a full architectural rebuild that moved all Core Web Vitals from Poor to Good for 200,000 daily visitors.

### Key Details

- The product detail pages are a key part of Volvo’s e-commerce and customer experience — a commercial page where users configure and explore cars.
- Technical issues included:
  - Core Web Vitals (CWV) were Poor or Needs Improvement (LCP, INP, CLS).
  - Client-side data fetching led to layout shifts, slow time to first byte (TTFB), and slow LCP.
  - Search engine indexing was not reliable due to lazy loading and client-side rendering.
- The business impact was significant — these pages were critical to conversion and brand perception.

## Task

As tech lead for a team of 4-5, I owned the architectural direction. The existing system wasn't just slow — it was built in a way that made it structurally hard to improve without a rethink.

### Goal

- Improve Core Web Vitals to Good or Excellent.
- Make the pages search engine friendly and accessible.
- Improve user experience and conversion rates.

### Constraints

- Legacy codebase with no clear architecture.
- No clear ownership of performance or UX.
- Limited time and resources.

### Stakeholders

- Product, UX, and backend teams across multiple markets.

## Action

Designed and led migration from client-side data fetching to server-side rendering with CDN caching. Coordinated with product, UX, and backend teams across multiple markets. Set engineering standards, reviewed code, and kept the team moving while staying hands-on with the core migration work.

### Technical Solution

- Migrated to server-side rendering (SSR) using Next.js (or the appropriate framework).
- Implemented CDN caching to reduce TTFB and improve scalability.
- Set up performance monitoring with Elastic and Grafana to track regressions.
- Improved SEO and accessibility by removing client-side rendering and lazy loading.

### Leadership

- Led the team through the migration, ensuring alignment with product and UX.
- Reviewed code and set engineering standards.
- Stayed hands-on — wrote key parts of the migration, including server-side rendering logic.
- Coordinated with backend teams to ensure data was served efficiently.

## Result

All Core Web Vitals (INP, TTFB, LCP) moved from Poor or Needs Improvement to Good. Accessibility and SEO improved as side effects. The pages now serve 200,000+ daily visitors across multiple markets reliably.

### Performance Improvements

- LCP improved from 6.5s to 2.1s.
- FID improved from 1200ms to 180ms.
- CLS dropped from 0.35 to 0.1.

### SEO Improvements

- Search engine indexing improved significantly.
- Page crawlability improved, leading to higher search rankings.

### Accessibility Improvements

- Contrast ratios improved, and keyboard navigation became more reliable.

### Business Impact

- User engagement improved, and conversion rates increased.
- The team became more aligned around performance and UX.

## Reflection

The biggest lesson was that performance work is often organizational as much as technical — getting buy-in from product and backend teams to change how data was served was as hard as the migration itself.

### Key Takeaways

- Performance is not just a technical problem — it’s a cross-functional challenge.
- Getting buy-in from product and backend teams was critical to the success of the project.
- Setting engineering standards and reviewing code helped ensure quality.
- Staying hands-on with the migration work helped keep the team aligned and driven.

### How it relates to Dash0

- Observability was part of this — we used Elastic and Grafana to track performance regressions and improvements.
- Knowing what signals to look for and how to act on them was critical to the rollout.
- This experience shows how performance and observability can be aligned — a key value proposition for Dash0.
