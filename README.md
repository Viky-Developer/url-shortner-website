# LinkPulse — High-Performance URL Shortener & Link Management Engine

[![SvelteKit](https://img.shields.io/badge/SvelteKit-2.x-FF3E00?style=flat&logo=svelte&logoColor=white)](https://svelte.dev/docs/kit)
[![Svelte 5](<https://img.shields.io/badge/Svelte-5_(Runes)-FF3E00?style=flat&logo=svelte&logoColor=white>)](https://svelte.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vitest](https://img.shields.io/badge/Vitest-Unit_Tests-6E9F18?style=flat&logo=vitest&logoColor=white)](https://vitest.dev)
[![Playwright](https://img.shields.io/badge/Playwright-E2E_Tests-2EAD33?style=flat&logo=playwright&logoColor=white)](https://playwright.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, enterprise-ready marketing and management platform for **LinkPulse**, built around the "Modern Hyperlink Engine" design system. Built with **SvelteKit**, **Svelte 5 runes**, **Tailwind CSS v4**, and typed with **TypeScript**.

---

## ✨ Key Features & Pages

### 🚀 Core Platform & Interactive Demos

- **Instant URL Shortening**: High-performance URL shortening interface with instant copy and validation.
- **Scannable QR Code Generation**: Instant QR code generation with custom high-contrast styling and direct PNG download.
- **Real-Time Telemetry Widget**: Interactive Prometheus metrics dashboard showing live RPS, P99 redirect latency (<2ms), and cache hit ratios.
- **Interactive Animations**: Dynamic capability cards with subtle hover lift, gradient highlight lines, and pill tags.

### 🧭 Capabilities & Feature Routes

- **[Routing Studio](src/routes/features/routing/+page.svelte) (`/features/routing`)**:
  - Custom vanity slug configuration with real-time preview.
  - UTM campaign parameter builder (Source, Medium, Campaign).
  - Time-To-Live (TTL) expiration presets (1 hour to 1 year or custom).
  - Developer-ready cURL commands generated on the fly.
- **[Analytics & Observability](src/routes/features/analytics/+page.svelte) (`/features/analytics`)**:
  - Non-blocking event bus telemetry architecture overview.
  - Real-time geographical click distribution matrix.
  - Client device and operating system breakdown.
  - Prometheus and OpenTelemetry metrics specification.
- **[Fleet Management](src/routes/features/management/+page.svelte) (`/features/management`)**:
  - Multi-tag hierarchical organization and instant slug search.
  - Custom vanity SSL domains with automated Let's Encrypt TLS provisioning.
  - Scoped API key governance (read, write, domain-scoped).
  - **Active Sessions Management**: Multi-device session monitoring with conflict-free isolated tokens and per-device revocation.

### 🏛️ Engineering & Architecture (`/about`)

- Base62 distributed encoding primitive benchmarks.
- Redis L1 cache architecture with zero database lock contention.
- Multi-session concurrency model and isolated token authentication.

### 📬 Developer Inquiry & Contact (`/contact`)

- Client-side inquiry transmission via EmailJS with automated receipts.
- TLS 1.3 encrypted channel guarantees.
- Comprehensive SLA metrics and developer FAQ.

---

## 🛠️ Tech Stack

| Layer            | Technology                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| **Framework**    | [SvelteKit 2](https://svelte.dev/docs/kit) with Svelte 5 (`$state`, `$derived`, `$effect` runes) |
| **Styling**      | [Tailwind CSS v4](https://tailwindcss.com) + `@tailwindcss/vite`                                 |
| **Language**     | [TypeScript](https://www.typescriptlang.org) (strict mode, bundler resolution)                   |
| **Icons**        | [Lucide Svelte](https://lucide.dev)                                                              |
| **QR Code**      | `qrcode` (with custom typed ambient declarations)                                                |
| **Unit Testing** | [Vitest](https://vitest.dev)                                                                     |
| **E2E Testing**  | [Playwright](https://playwright.dev)                                                             |
| **Code Quality** | ESLint 9, Prettier, Husky git hooks, lint-staged                                                 |

---

## 📁 Project Structure

```
url-shortner-website/
├── .github/                 # GitHub workflows (CI, CodeQL)
├── .husky/                  # Git commit & pre-commit hooks
├── scripts/                 # Git branch verification & commit linting
├── src/
│   ├── lib/
│   │   ├── assets/          # Static assets & brand icons
│   │   ├── components/      # UI components
│   │   │   ├── about/       # About page modular sections
│   │   │   ├── contact/     # Contact channels, forms, and SLAs
│   │   │   ├── ui/          # Core design system primitives (Button, Card, Badge, Input, etc.)
│   │   │   ├── FeaturesGrid.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── Hero.svelte
│   │   │   ├── Navbar.svelte
│   │   │   ├── TelemetryWidget.svelte
│   │   │   └── WhyLinkPulse.svelte
│   │   ├── types/           # TypeScript module declarations
│   │   └── utils/           # URL validation & helper functions
│   └── routes/
│       ├── +layout.svelte   # Root layout with responsive navigation & footer
│       ├── +page.svelte     # Landing page
│       ├── about/           # Architecture & technical deep-dive
│       ├── contact/         # Support & developer inquiry gateway
│       ├── demo/            # Design system component showcase
│       └── features/
│           ├── analytics/   # Telemetry & metrics deep-dive
│           ├── management/  # Fleet governance & active session control
│           └── routing/     # Routing studio & slug configuration
├── tests/                   # Vitest unit tests & Playwright E2E suites
├── .env.example             # Template for required environment variables
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v20.x` or higher
- npm `v10.x` or higher

### Installation

1. **Clone the repository:**

   ```bash
   git clone git@github.com:Viky-Developer/url-shortner-website.git
   cd url-shortner-website
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` to configure your endpoints and credentials:

   ```env
   PUBLIC_GITHUB_URL=https://github.com/Viky-Developer/url-shortner-website
   PUBLIC_LOGIN_URL=http://localhost:5174/login
   PUBLIC_LOGO_URL=/logo.svg

   # Optional: EmailJS configuration for Contact Form
   PUBLIC_EMAILJS_SERVICE_ID=
   PUBLIC_EMAILJS_TEMPLATE_ID=
   PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=
   PUBLIC_EMAILJS_PUBLIC_KEY=

   # Optional: Prometheus API endpoint for TelemetryWidget
   PUBLIC_PROMETHEUS_URL=
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

| Command                | Description                                                      |
| ---------------------- | ---------------------------------------------------------------- |
| `npm run dev`          | Starts Vite local development server                             |
| `npm run build`        | Builds production artifacts for deployment                       |
| `npm run preview`      | Locally previews the production build output                     |
| `npm run check`        | Runs SvelteKit synchronization and `svelte-check` type audits    |
| `npm run lint`         | Runs Prettier format validation and ESLint checks                |
| `npm run format`       | Auto-formats all code using Prettier                             |
| `npm run test`         | Runs unit tests (Vitest) followed by E2E tests (Playwright)      |
| `npm run test:unit`    | Runs Vitest unit test suite                                      |
| `npm run test:e2e`     | Runs Playwright end-to-end browser tests                         |
| `npm run check:branch` | Validates that current branch adheres to branch naming standards |

---

## 🛡️ Git Workflow & Commit Rules

This repository enforces automated quality gates and branch standards:

### Branch Naming Convention

Branches must match the pattern `<type>/<issue_number>/<description>`:

- `feat/10/core-capabilities-routes`
- `fix/12/qr-code-styling`
- `refactor/14/navbar-dropdown`

_Direct commits to `main` and `dev` are blocked by branch protection hooks._

### Commit Message Convention

Commits must adhere to conventional format with the associated issue number and emoji:

```
type(#issue): emoji message
```

**Example:**

```bash
git commit -m "feat(#10): ✨ implement core capability feature routes & scannable QR code"
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
