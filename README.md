<div align="center">

GrandDesign Frontend

An evolving storefront frontend built with the Next.js App Router, React, Tailwind CSS, and Zustand.



Repository · Deployment Target · Issues

</div>

[!IMPORTANT]GrandDesign Frontend is under active development. The repository currently represents an architectural and UI foundation. Several routes and service modules are placeholders and the public deployment may be temporarily unavailable while development continues.

Table of Contents

Overview

Current State

Product Vision

Technology Stack

Architecture

Project Structure

Getting Started

Environment Variables

Scripts

Roadmap

Development Guidelines

Contributing

Deployment

License

Overview

GrandDesign Frontend is the client-side foundation for a modern commerce experience. The application is organized around two primary route groups:

A store experience for public-facing pages such as the home and store routes.

A full-page experience for standalone flows such as login and registration.

The project uses a deliberately small dependency set and separates routes, shared components, hooks, utilities, API access, UI primitives, and global state. This makes the current codebase easy to extend as product requirements become clearer.

Current State

The codebase currently includes:

A Next.js 15 App Router setup.

React 19 and Tailwind CSS 4.

Turbopack-enabled local development.

Route groups for store and authentication experiences.

Placeholder pages for home, store, login, and registration.

Shared component files for the navbar, menu, and footer.

A Zustand store used as an initial global-state proof of concept.

Dedicated folders for API modules, hooks, helper functions, and reusable UI.

GitHub workflow scaffolding and a Vercel deployment target.

The current API module is empty and the visible pages are still basic placeholders. The README therefore describes both the existing foundation and the intended product direction without presenting unfinished features as complete.

Product Vision

GrandDesign is being shaped into a polished, responsive storefront with a clean separation between public shopping flows and account-related screens.

Planned capabilities include:

Responsive landing and storefront pages.

Product discovery, filtering, sorting, and search.

Product details with reusable content sections.

Account registration, login, and session-aware navigation.

Persistent cart and wishlist state.

Checkout-ready frontend flows.

A centralized, typed API layer.

Loading, empty, success, and error states for every data-driven view.

Accessible interactions and consistent design tokens.

Automated quality checks and reliable preview deployments.

Technology Stack

Area

Technology

Framework

Next.js 15.3.5

UI Library

React 19

Styling

Tailwind CSS 4

State Management

Zustand 5

Routing

Next.js App Router and route groups

Local Development

Turbopack

Code Quality

ESLint 9 and eslint-config-next

Deployment

Vercel-compatible Next.js build

Architecture

flowchart TD
    A[App Router] --> B[(store) route group]
    A --> C[(fullpage) route group]
    B --> D[Home and Store Pages]
    C --> E[Login and Register Pages]
    D --> F[Shared Components]
    E --> F
    D --> G[Zustand State]
    E --> G
    D --> H[API Layer]
    E --> H
    F --> I[UI Primitives]

The route groups allow the storefront and account experiences to use different layouts without adding route-group names to public URLs.

Project Structure

granddesign.frontend/
├── .github/
│   └── workflows/       # Continuous-integration and automation scaffolding
├── public/              # Static assets
├── src/
│   ├── apis/            # Backend/API integration layer
│   ├── app/
│   │   ├── (fullpage)/  # Login, registration, and standalone layouts
│   │   └── (store)/     # Home, store, and storefront layout
│   ├── components/      # Navbar, menu, footer, and shared components
│   ├── functions/       # General helper functions
│   ├── hooks/           # Reusable React hooks
│   ├── ui/              # Design-system primitives
│   └── zustand/         # Global client state
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── postcss.config.mjs
└── package.json

Getting Started

Prerequisites

Node.js 20 LTS recommended

npm 10 or newer recommended

Git

Installation

git clone https://github.com/Aihan-2005/granddesign.frontend.git
cd granddesign.frontend
npm install

Start development

npm run dev

Open http://localhost:3000.

Production build

npm run build
npm run start

Environment Variables

The current scaffold does not expose a completed backend integration and does not require a documented environment variable to render its placeholder pages.

When the API layer in src/apis/api.js is implemented, create .env.local and document every public variable in a committed .env.example:

# Example only — use the final variable name selected by the project
# NEXT_PUBLIC_API_BASE_URL=http://localhost:8000

Rules for environment configuration:

Prefix only browser-safe values with NEXT_PUBLIC_.

Keep credentials and private tokens server-side.

Never commit .env.local.

Update this README and .env.example whenever a required variable is added.

Scripts

Command

Description

npm run dev

Start Next.js locally with Turbopack

npm run build

Build the application for production

npm run start

Run the production server

npm run lint

Run the configured Next.js lint command

Roadmap

Foundation

Initialize Next.js App Router architecture.

Add separate store and full-page route groups.

Add shared component, hook, utility, UI, API, and state folders.

Add initial Zustand state usage.

Define the final visual identity and design tokens.

Replace all route placeholders with production UI.

Storefront

Build the responsive landing page.

Build product-grid and product-card components.

Add product details and related-product sections.

Add search, filtering, sorting, and pagination.

Add cart and wishlist state with persistence.

Add checkout-ready address, delivery, and order-summary screens.

Accounts and Data

Implement registration and login forms.

Connect authentication to the backend.

Implement src/apis/api.js with consistent request and error handling.

Add session-aware navigation and protected routes.

Add form validation and meaningful user feedback.

Quality and Delivery

Add unit and component tests.

Add end-to-end tests for key shopping flows.

Add automated lint and build checks in CI.

Audit accessibility and keyboard navigation.

Add metadata, sitemap, and social-preview assets.

Restore and verify the public preview deployment.

Development Guidelines

Recommended conventions

Use route-level files only for composition and data-loading concerns.

Keep reusable visual elements inside src/components or src/ui.

Keep global client state small; prefer local state when data is used by one component tree.

Keep API calls inside src/apis rather than directly inside visual components.

Handle loading, empty, error, and success states explicitly.

Avoid introducing a dependency for behavior that can be implemented clearly with the existing stack.

Suggested branch names

feat/product-grid
fix/mobile-navigation
refactor/store-layout
docs/update-readme

Suggested commit style

feat: add responsive product card
fix: prevent mobile menu overflow
docs: document local setup
refactor: move store state into dedicated slice

Contributing

Fork the repository.

Create a branch from main.

Install dependencies and verify the current app starts.

Make one focused change.

Run the available checks:

npm run lint
npm run build

Open a pull request with:

A clear problem statement.

A summary of the solution.

Screenshots for visible UI changes.

Testing notes and known limitations.

Deployment

The repository points to the following Vercel target:

https://granddesign-frontend.vercel.app

The URL may return an unavailable or not-found page during development. Before publishing a stable preview:

Confirm the Vercel project uses the correct repository and production branch.

Add required environment variables.

Verify npm run build succeeds locally.

Test all public routes directly, not only through client-side navigation.

Add the working URL and release status to this README.

License

No open-source license is currently published in the repository. Until one is added, the code remains under the copyright holder's default rights.

<div align="center">

Built and maintained by Aihan-2005.

Designed as a clean foundation. Evolving into a complete storefront.

</div>
