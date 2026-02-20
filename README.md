# Pub Quiz Site

UK-focused e-commerce storefront for pre-built pub quiz PDF packs.

## Current Status

This scaffold delivers **Milestone PR1 (Project foundation)**:

- Next.js (App Router) + TypeScript project setup
- Tailwind + shadcn-style UI primitives
- Public route shell and admin route shell
- Placeholder pages for storefront, account, legal, and admin sections
- Shareable URL filters on `/packs` for `audience` and `difficulty`
- PR artifact template at `docs/milestones/PR1-summary.md`

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui patterns (local components)
- Planned: Supabase + Stripe + Resend + Drizzle

## Local Development

1. Install dependencies:

```bash
corepack enable
pnpm install
```

2. Copy env template:

```bash
cp .env.example .env.local
```

3. Start dev server:

```bash
pnpm dev
```

4. Open:

```text
http://localhost:3000
```

## Scripts

- `pnpm dev` - run development server
- `pnpm build` - production build
- `pnpm start` - run production server
- `pnpm lint` - lint with Next.js ESLint config
- `pnpm typecheck` - TypeScript check (no emit)
- `pnpm format` - format with Prettier
- `pnpm format:check` - verify formatting

## Route Map (Scaffolded)

Public:

- `/`
- `/packs`
- `/packs/[slug]`
- `/checkout`
- `/order/success`
- `/order/[id]/download` (placeholder API route)
- `/account`
- `/library`
- `/about`
- `/faq`
- `/contact`
- `/terms`
- `/privacy`
- `/cookies`

Admin:

- `/admin/dashboard`
- `/admin/packs`
- `/admin/packs/new`
- `/admin/packs/[id]/edit`
- `/admin/orders`
- `/admin/orders/[id]`

## Environment Variables

Defined in `.env.example`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `STRIPE_PRICE_ID_GBP_2000`
- `EMAIL_PROVIDER_API_KEY`
- `OPENAI_API_KEY` (optional)
- `NEXT_PUBLIC_APP_URL`
- `ADMIN_ALLOWLIST_EMAILS`
- `SUPPORT_EMAIL`

## Next Milestones

1. Supabase integration + auth scaffold
2. DB schema + pack CRUD (admin)
3. Stripe checkout + webhook fulfilment + watermarking
4. Email delivery
5. Library + avoid-repeats behavior
6. Optional question bank import + tag suggestion scaffold
