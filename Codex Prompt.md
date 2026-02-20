0) One-line goal

Build a low-cost UK-focused e-commerce site for selling pre-built pub quiz packs (PDF downloads) primarily to pubs, with filtering/tailoring by audience (Students / Mixed / Older) and difficulty, plus an admin workflow for uploading packs and (later) managing a question bank with AI-assisted tagging. If CSVs or sample quizzes are mentioned, these can be found in the Sample Pack folder.

1) Current scope (V1 / MVP)
MUST-HAVE (V1)

Public storefront:

Browse quiz packs

Filter by Audience (Students/Mixed/Older) and Difficulty

Pack detail pages

Purchase flow via Stripe Checkout (integration implemented; human will configure products)

Delivery: instant download link + email with link

Accounts:

Guest checkout supported

Optional account creation (recommended for “avoid repeats”)

If logged in, show My Library (past purchases + downloads)

Admin (Peter + friend; no roles needed):

Create/edit packs and metadata

Upload PDF pack files to storage

Mark pack as published/unpublished

View orders (read-only is fine)

Watermarking:

Deliver a watermarked PDF on purchase (order id + purchaser email or “guest”)

Data & hosting constraints:

Low cost

EU/UK data hosting for DB/storage

NICE-TO-HAVE (still V1 if easy)

Import question bank from CSV (provided) into DB

Basic tag editor + approval UI (manual approval)

“Avoid repeats” recommendations (when logged in)

EXPLICITLY OUT OF SCOPE (do not implement now)

Generating quiz packs on-demand from the question DB (architecture should not block this later)

Interactive quiz game (later)

Discount codes (later)

Music audio hosting/distribution (ignore audio entirely for now)

2) Pack format (reference)

Use the sample PDF as the canonical template for what a “pack” looks like (both content and overall structure). 

Quiz 1 - Answer Sheet-combined

A typical pack includes:

Round 1 – General Knowledge: 20 Qs, total /25 

Quiz 1 - Answer Sheet-combined

Round 2 – Music: 10 entries, total /10 (answer sheet has Year/Artist columns) 

Quiz 1 - Answer Sheet-combined

Round 3 – Picture Round: multi-part, total /30 

Quiz 1 - Answer Sheet-combined

Round 4 – Mystery Round: 10 Qs, topic chosen by last-placed team (customer selects from list) 

Quiz 1 - Answer Sheet-combined

Round 5 – Special/Themed Round: 10 Qs, /10 (example topic “Winter Sports”) 

Quiz 1 - Answer Sheet-combined

Bonus Round: a single puzzle question worth /5 with “early submit” scoring (5 if before second half, 2 before end) 

Quiz 1 - Answer Sheet-combined

Tiebreaker question included (optional but common) 

Quiz 1 - Answer Sheet-combined

Note: sample answer sheet includes a house rule: teams >6 lose 2 points per extra player 

Quiz 1 - Answer Sheet-combined

V1 product: sell pre-built PDF packs that already contain everything (printable answer sheets + question content).

3) Audience tailoring (V1)

Customers select at purchase:

Audience: Students / Mixed / Older crowd

Difficulty: Easy / Standard / Hard (exact labels can be decided; implement as enum)

In V1 (pre-built inventory), “tailoring” = filtering the catalogue to show packs tagged for that audience/difficulty, plus “Recommended packs” ordering.

4) Legal / compliance notes Codex must respect

Do not ship or host copyrighted music clips.

Cookie consent:

UK rules require consent for non-essential cookies; “strictly necessary” cookies don’t require consent but still require clear information. Implement a cookie banner only if non-essential cookies are added (e.g., analytics). ICO guidance:

VAT:

Not VAT-registered currently. VAT registration becomes mandatory above the turnover threshold (currently £90,000 since April 2024 per gov.uk).

Site should support “no VAT included” pricing in V1 (but keep room to add VAT later).

5) Pages

Public:

/ Home

/packs Catalogue + filters (audience, difficulty, topic tags later)

/packs/[slug] Pack detail

/checkout (optional route, or direct Stripe checkout)

/order/success + download instructions

/order/[id]/download secure download endpoint

/account (login/signup)

/library (purchases for logged-in users)

/about, /faq, /contact

/terms, /privacy, /cookies (cookie page if needed)

Admin (protected):

/admin dashboard

/admin/packs list

/admin/packs/new

/admin/packs/[id]/edit

/admin/orders list + detail

6) Tech stack (choose defaults; no further questions)

Next.js (App Router) + TypeScript

UI: Tailwind + shadcn/ui

DB + Auth + Storage: Supabase (Postgres + Auth + Storage), create project in EU/UK region

ORM: Drizzle or Prisma (Codex choose one and stick to it)

Payments: Stripe Checkout + Webhooks (implemented, but do not create products)

Email: Codex choose (Resend recommended)

Analytics/Monitoring: Codex choose low-cost defaults; do not enable non-essential cookies by default

7) Data model (minimum viable; designed to expand later)
Core tables

packs

id (uuid)

slug (unique)

title

description (markdown)

price_pence (default 2000)

currency (GBP)

audience (enum: STUDENTS | MIXED | OLDER)

difficulty (enum: EASY | STANDARD | HARD)

is_published (bool)

cover_image_path (nullable)

pdf_original_path (storage path)

created_at, updated_at

pack_tags (optional V1, but add now)

pack_id

tag_id

tags

id

type (enum: TOPIC | REGION | TIMELESSNESS | PUB_SUITABILITY | FORMAT)

value (string)
Examples:

TOPIC: history, sport, film_tv, internet, literature, science…

TIMELESSNESS: evergreen, topical

PUB_SUITABILITY: family_friendly, adult

REGION: uk, global, us_leaning

FORMAT: connections, picture, puzzle…

users (managed by Supabase Auth; minimal profile table)

id (uuid matches auth.users.id)

display_name (optional)

created_at

orders

id (uuid)

user_id (nullable for guest)

customer_email

stripe_checkout_session_id

stripe_payment_intent_id (nullable until paid)

status (PENDING|PAID|FAILED|REFUNDED)

total_pence, currency

created_at

order_items

id

order_id

pack_id

unit_price_pence

deliverables

id

order_id

pack_id

watermarked_pdf_path (storage path)

download_token (random, hashed in DB)

download_count

created_at

Question bank (optional in V1; but scaffold)

The provided CSV has columns: Question, Answer(s), Used?, Category, Points.
Create tables:

questions

id

question_text

answer_text

source_url (nullable)

category_legacy (string) // from CSV

points (int)

used_legacy (string) // from CSV “Used?” column

created_at

question_tags / question_tag_suggestions

question_tag_suggestions:

question_id

suggested_tags (json)

model_name

created_at

status (PENDING|APPROVED|REJECTED)

reviewer_user_id (nullable)

8) Admin workflows (V1)
Pack creation

Admin can:

upload PDF

set title/slug/description

set audience + difficulty

set published

(optional) add tags and cover image

Order management

Admin can:

list orders

view order detail

see which pack(s) purchased

see customer email

Tagging (scaffold)

Admin can import CSV to create questions

Admin can request “AI suggestions” (feature-flag; only runs if API key exists)

Admin approves/rejects suggestions

9) Checkout + fulfilment (important)
Stripe

Implement Stripe Checkout session creation for a selected pack.

Use webhooks to mark order PAID and generate deliverables.

Constraints:

Do NOT create Stripe products or deploy.

Provide scripts/instructions for the human to:

create product/price in Stripe

add webhook endpoint in Stripe dashboard

set env vars

Delivery

After payment:

show success page with download button

send email containing download link

Download link should hit /order/[id]/download?token=... (or similar)

For logged-in users, also list purchase in /library

10) Watermarking spec

Generate a watermarked copy of the pack PDF per order.

Watermark content:

“Purchased by: {email}”

“Order: {order_id}”

“Date: {YYYY-MM-DD}”

Add small footer text on each page (avoid obscuring content).

Store watermarked PDF in Supabase Storage; serve via signed URL or streaming route.

Implementation suggestion (Codex choose):

Node server-side PDF library (e.g., pdf-lib) in a server action / route handler.

11) “Avoid repeats” behaviour

Guest: no repeat-tracking.

Logged-in:

When browsing catalogue, mark packs already purchased as “Owned”

Optionally filter out owned packs by default (“Hide purchased” toggle)

12) Content safety (admin guideline)

Admin UI should display a short checklist warning not to publish:

defamatory or hateful content

doxxing / personal data

explicit sexual content

anything that could cause legal trouble

(Just a UI reminder; no automated moderation required in V1.)

13) Privacy / data minimisation

Collect the minimum:

customer email for delivery

order/payment ids

Data retention:

Keep business records at least 5 years after the relevant tax return deadline (gov.uk).

Implement an admin setting later; for now: do not auto-delete paid orders.

14) “Support contact email” clarification

Site should display a contact email address on Contact/FAQ/receipt (placeholder for now, e.g., support@placeholder.com). Peter will replace later.

15) Repo & working style

Repo: https://github.com/peachymomotaro/pubquizsite.git

Codex must:

Work in milestone PRs (no direct commits to main)

Each PR includes: summary, screenshots, and a checklist of acceptance criteria

Add/update README with setup instructions

16) Environment variables (document but do not obtain)

NEXT_PUBLIC_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY

SUPABASE_SERVICE_ROLE_KEY (server-only)

STRIPE_SECRET_KEY

STRIPE_WEBHOOK_SECRET

STRIPE_PRICE_ID_GBP_2000 (or per-pack mapping if needed)

EMAIL_PROVIDER_API_KEY (Resend or equivalent)

(optional) OPENAI_API_KEY for tag suggestions

17) Milestone plan (each = separate PR)
PR1 — Project foundation

Next.js app scaffold, linting, formatting, basic UI shell, routing

Basic public pages with placeholder branding

README: local dev instructions

Accept: pnpm dev runs; home and packs pages render.

PR2 — Supabase integration + auth scaffold

Supabase client/server setup

Auth pages (magic link or email/password; Codex choose simplest)

Protected admin area (allow only listed admin emails in env var allowlist)

Accept: admin route requires login; non-admin blocked.

PR3 — DB schema + Pack CRUD (admin)

Migrations for packs/tags/orders tables

Admin pack creation/editing

PDF upload to storage

Accept: admin can publish a pack; pack appears in catalogue.

PR4 — Catalogue filtering + pack detail

/packs filters: audience + difficulty

Pack detail page

Accept: filters work; URLs are shareable.

PR5 — Stripe checkout + webhook fulfilment + deliverables

Checkout session creation

Webhook handler updates order state

Generate watermarked PDF deliverable

Success page + download route

Accept: In Stripe test mode, a paid event results in a deliverable link and download works.

PR6 — Email delivery

Email after purchase with download link

Templates + basic branding placeholders

Accept: Email sent in dev using provider sandbox or logged in console with clear instructions.

PR7 — Accounts library + “avoid repeats”

/library lists purchased packs for logged-in user

Catalogue shows “Owned” badge / hide toggle

Accept: account user can see prior purchases and avoid re-buying.

PR8 (optional) — Question bank import + tag suggestion scaffold

CSV import endpoint + admin UI

Tag taxonomy + manual tag editing

AI suggestion feature-flag (only runs if key exists)

Accept: sample CSV imports; admin can approve tags.

18) What Codex must NOT do

Do not deploy to Vercel

Do not create Stripe products/prices

Do not enable paid services or incur costs without explicit instruction

Do not ship any music audio clips

19) Fixtures / sample assets

Use the provided sample pack PDF as a formatting reference for what customers receive. 

Quiz 1 - Answer Sheet-combined

Use the provided CSV as an initial “question bank import” fixture (optional V1).