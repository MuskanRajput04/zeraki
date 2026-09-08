# ZERAKI — Every Shade of Her

A complete, from-scratch redesign concept for **Zeraki Jewels**, built as a React application.
Not a reskin of the existing site: a new visual identity, a new information architecture and a
new discovery model, built around Zeraki's real catalogue, real prices and real business facts.

**Live link:** https://claude.ai/code/artifact/a197961e-3471-4214-b310-3117f56bc500

---

## The concept

A woman doesn't have one style — she has a Tuesday style, a wedding style, a first-date style.
The whole site is organised around **six shades** rather than the usual occasion buckets:

> Soft & Romantic · Bold & Glam · Everyday Minimal · Festive Glow · Date Night · Statement Maker

"Shop by Mood" is a real, filterable route (`/mood/:key`), not a decorative homepage strip. It is
the thing that makes this redesign Zeraki's rather than any jewellery brand's.

---

## Running it

```bash
npm install
npm run dev          # http://localhost:5177
```

```bash
npm run build        # production bundle  → dist/
npm run build:single # one self-contained .html → dist-single/
python tools/make_shareable.py   # + inline all photography → artifact/zeraki.html
```

`artifact/zeraki.html` is a single 7 MB file with all 278 photographs baked in as data URIs and
zero external requests — that is what the shareable link above serves, so the concept can be sent
to stakeholders with no hosting involved.

---

## What's in the build

| Route | Page |
|---|---|
| `/` | Homepage — hero, categories, Just Dropped, brand moment, moods, bestsellers, mangalsutra feature, look book, Spotted in Zeraki, why Zeraki, reviews, Instagram |
| `/shop` | Full catalogue with filters |
| `/c/:category` | Category landing (mangalsutra, earrings, bangles, rings, necklaces, chains, payal) |
| `/collection/:key` | Edits — Just Dropped, Currently Crushing On, Anti-Tarnish, Buy 1 Get 1, Under ₹599, Temple |
| `/mood/:mood` | The six mood edits |
| `/product/:id` | Product detail |
| `/about` | Brand story |
| `/contact` | Support, policies, order tracking, FAQs |
| `/wishlist` | Saved pieces |
| `/cart` | Bag — quantity, remove, summary |
| `/checkout` | Customer info, address, payment, coupon, order summary |
| `/order/:id` | Order confirmation |
| `/signin` · `/signup` · `/forgot` | Account entry |
| `/account` | Orders, saved pieces, sign out |

80 real products across 7 categories, with working search, wishlist, bag, filters, sort and
localStorage persistence.

### The commerce flow works end to end

Product → Add to bag → bag drawer → Bag → Proceed to checkout → Checkout → Place order →
Order confirmation → Account. **Buy it now** skips the bag and opens checkout with just that
piece. Nothing is a button that only looks clickable.

Checkout does real work client-side: live totals, four payment methods (the prepaid ₹50 discount
switches off for cash on delivery), three working coupons (`ZERAKI10`, `SHADE100`, `FIRSTZK`),
per-field validation that scrolls to the first error, and an order that persists to the account
page.

**It is a prototype, deliberately.** No card or UPI details are ever collected — payment method is
chosen here and the details are captured on the provider's own page, which is how Razorpay,
Shopify Payments and PayU actually work. Nothing is submitted anywhere; all state lives in
`localStorage`. Every form says so on the page.

---

## Problems from the current site, and what was done

| Problem | Fix |
|---|---|
| Product grid starts at the top of the page | Editorial hero; the first product grid is the fourth section |
| Promotion overload — a marquee of 7 rotating messages | Announcement bar shows **one** message at a time |
| No distinctive identity | Six-shade pastel system + berry, DM Serif Display / Manrope, editorial art direction over the brand's own photography |
| Repetitive nav; same categories listed several ways | 8 nav items, visual mega-menu, sub-categories nested under their parent |
| New Arrivals / Best Sellers buried | Both are named sections with their own edits and nav entries |
| Weak product-card hierarchy | Fixed image ratio, hover second image, one clear price hierarchy, max **two** badges |
| Thin filtering | 8 filter groups with live result counts; options that would return nothing are dimmed |
| Celebrity slider looks promotional | "Spotted in Zeraki" — editorial portrait rail, with the roster as a quiet text line rather than badge-style logos |
| SEO keyword wall in the footer | Popular Searches moved into a collapsed accordion, grouped by category |
| Discount-heavy tone | Sale info is present but visually secondary throughout |
| Inconsistent product naming | One rule: `<Name> <Type>`. Pack size, plating and variants are structured fields, never part of the title |

---

## Two contradictions in the live content — please confirm before launch

These were found on the current site and had to be resolved to build a consistent design. **Both
need a decision from Zeraki**; the values used here are marked.

1. **Return window.** The Refund Policy page says **3 days**; the Exchange Policy page says
   **7 days**. This build uses **7 days** everywhere (`BRAND.policy.returnWindow`).
2. **Customer / order numbers.** The homepage marquee says "25 Lakh+ Happy Customer"; the About
   page says "delivered over 9 lakh orders". This build uses the About figure — **9,00,000+ orders
   delivered** — as the single number, on every page (`BRAND.stats`).

Every policy figure, statistic, phone number and support hour on the site is rendered from
`src/data/catalog.js` → `BRAND`. Change it in one place and it updates everywhere.

---

## Photography

**All imagery on the site is real photography — Zeraki's own.** 278 photographs were taken
from the live storefront catalogue and campaign pages, cropped to consistent ratios and
re-encoded as WebP:

- **238 product photographs** — 80 products x up to 3 shots each (studio product, macro detail,
  on-model). Every product card, gallery and thumbnail uses the photograph of that exact piece.
- **40 campaign & lifestyle photographs** — hero, editorial moments, mood cards, the look book,
  the celebrity rail, customer photos and the Instagram grid.

No illustration, vector, or generated imagery is used anywhere.

```
public/img/p/<product-handle>-<n>.webp    product photography, 700px, 4:5
public/img/e/<slot>.webp                  campaign / editorial photography
```

Images go through a single `<Figure/>` component (`src/art/Art.jsx`) which owns aspect ratios,
cover-fit, lazy loading below the fold, and a tinted placeholder in the section's own colour so
nothing flashes white while decoding. Swapping any photograph is a path change in
`src/data/catalog.js` — no component edits.

### Two things to note about the imagery

1. **Photo rights.** These are the client's own photographs, which is correct for a redesign
   proposal *for that client*. If any frame was licensed rather than shot in-house, confirm the
   licence covers the new layout before launch.
2. **The celebrity rail is deliberately unnamed.** Zeraki's real celebrity roster is a genuine
   trust asset, but the live site does not caption which celebrity appears in which frame — so no
   photo here is attributed to a named person. The confirmed roster is shown as a text line under
   the section instead. Add a `name` to any entry in `CELEBRITIES` once the client confirms the
   pairing, and the cards will show it.

## Structure

```
tools/make_shareable.py  bakes the photography into one shareable .html
src/
  art/Art.jsx          <Figure/> — the one image component (ratios, lazy loading, placeholders)
  components/          Header + mega-menu, Footer, ProductCard, Rail, Drawers, Icons
  data/catalog.js      products, categories, moods, collections, celebrities, reviews, BRAND facts
  pages/               Home, Collection, Product, About, Contact, Wishlist
  store.jsx            wishlist / bag / recently-viewed, scroll reveal, helpers
  styles/
    tokens.css         colour, type scale, spacing, motion — change the brand here
    base.css           reset, typography, buttons, tags, rails
    layout.css         header, footer, cards, drawers
    pages.css          per-page layout
    commerce.css       auth, bag, checkout, order, account
    enhance.css        art direction — section contrast, editorial cards, motion
```

**Design tokens** live in `src/styles/tokens.css`. The full palette, type scale, spacing rhythm and
motion curves are defined once at the top of that file.

`styles/enhance.css` is the art-direction pass, loaded last: it holds the section-contrast rhythm,
the editorial card treatments and the micro-interactions, so the underlying layout CSS stays
readable and the visual language can be tuned in one place.

---

## Notes on build quality

- Fully responsive, mobile-commerce first: bottom-sheet filters, sticky Add to Bag, 2-column
  grids, swipeable rails, no horizontal overflow at any width.
- Semantic HTML, labelled controls, visible focus states, skip link, `prefers-reduced-motion`
  respected, above-the-fold content rendered at rest rather than fading in.
- ~89 KB of JavaScript gzipped, no animation library, no icon library. Photography is served as
  WebP, lazy-loaded below the fold, with fixed aspect ratios so there is no layout shift.
- `rating` and `reviews` on each product are generated placeholder values — the storefront feed
  does not expose them. Wire them to the real review platform before launch.
