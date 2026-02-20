# next-storybook

A design system component library built with **Next.js**, **Storybook**, and **Figma Design Tokens** — demonstrating a complete token-driven UI pipeline from Figma to production-ready React components.

🔴 **Live Storybook:** [nibin-org.github.io/next-storybook](https://nibin-org.github.io/next-storybook)

---

## Token Pipeline

```
Figma Design  →  Token Studio  →  tokens.json  →  build-tokens script  →  CSS Variables  →  Components
```

Design tokens are exported from Figma via Token Studio as `tokens.json`, then transformed into CSS custom properties at build time. All components consume these tokens — no hardcoded values.

---

## Components

| Component | Variants | Status |
|---|---|---|
| Button | Primary, Secondary, Tertiary · Sizes · Loading · Icons | ✅ Live |
| Input | _(coming soon)_ | 🔄 In progress |
| Badge | _(coming soon)_ | 🔄 In progress |
| Card | _(coming soon)_ | 🔄 In progress |

---

## Built With

- **Next.js** — React framework
- **Storybook 10** — Component documentation and playground
- **Token Studio** — Figma token export
- **TailwindCSS** — Utility-first styling driven by design tokens
- **SCSS** — Custom styling architecture
- **Vitest** — Unit testing

---

## Getting Started

```bash
# Install dependencies
npm install

# Build tokens from tokens.json
npm run tokens:build

# Run Storybook locally
npm run storybook
# Opens at http://localhost:6006
```

---

## About

Built by [Nibin Kurian](https://nibin-portfolio.vercel.app) — UI Engineer specialising in Design Systems and Figma-to-code pipelines.

[Portfolio](https://nibin-portfolio.vercel.app) · [LinkedIn](https://linkedin.com/in/nibin-kurian) · [TokVista NPM Package](https://npmjs.com/package/tokvista)
