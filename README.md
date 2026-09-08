# LinkPulse — URL Shortener Website

A modern URL shortener marketing site, built with SvelteKit, TypeScript, and Tailwind CSS v4. Styled around the "Modern Hyperlink Engine" design system (see `DESIGN.md`).

## Tech Stack

- [SvelteKit](https://svelte.dev/docs/kit) — app framework
- Svelte 5 (runes)
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- Lucide icons
- Vitest (unit tests) + Playwright (E2E)
- ESLint + Prettier + Husky hook and lint-staged

## Getting Started

```sh
npm install
npm run dev
```

Open http://localhost:5173 (or run `npm run dev -- --open`).

## Scripts

| Command                | Description                        |
| ---------------------- | ---------------------------------- |
| `npm run dev`          | Start the dev server               |
| `npm run build`        | Production build                   |
| `npm run preview`      | Preview the production build       |
| `npm run check`        | Svelte type-check (`svelte-check`) |
| `npm run lint`         | Prettier + ESLint                  |
| `npm run format`       | Prettier write                     |
| `npm run test`         | Unit + E2E tests                   |
| `npm run test:unit`    | Vitest only                        |
| `npm run test:e2e`     | Playwright only                    |
| `npm run check:branch` | Enforce a non-`main`/`dev` branch  |

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── Hero.svelte          # Homepage hero
│   │   ├── Navbar.svelte        # Sticky navbar
│   │   └── ui/                  # Reusable UI components
│   │       ├── Badge.svelte
│   │       ├── Button.svelte
│   │       ├── Card.svelte
│   │       ├── Checkbox.svelte
│   │       ├── Input.svelte
│   │       └── UrlInput.svelte
│   └── ...
└── routes/
    ├── +page.svelte            # Homepage
    └── demo/+page.svelte       # UI components demo
```

## Git Hooks

[Husky](https://typicode.github.io/husky/) runs `lint-staged` (Prettier + ESLint) on staged files, and the `check:branch` script guards against committing on `main`/`dev`.
