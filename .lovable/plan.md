# Build Abbey Party Rents site with click-to-call & click-to-text

The site is still the placeholder. I'll build the full single-page site per the previously approved plan and wire click-to-call (`tel:+19037017419`) and click-to-text (`sms:+19037017419?&body=...`) buttons across every section.

## Click-to-call / click-to-text placements

Two reusable components (`CallBtn`, `TextBtn`) used in:
- Sticky top nav (Call primary, Text ghost; Text hidden on very small screens)
- Hero (gold Call + ghost Text)
- Rentals section header + each rental card ("Quote this" → tel:)
- Restrooms (gold Call + ghost Text)
- Service area block
- Contact band (gold Call + ghost Text + tappable phone number)
- Footer (Call + Text)
- **Mobile-only fixed bottom bar**: 50/50 Call + Text, always visible while scrolling on phones

`tel:` uses `+19037017419`. `sms:` uses the same number with a prefilled body "Hi Abbey Party Rents — I'd like a quote." Displayed format everywhere: `+1 (903) 701-7419`.

## Files

- `src/styles.css` — replace with brand tokens (navy `--primary`, champagne `--secondary`/`--champagne`, cream bg) in oklch, Fraunces + Inter font families, shadow + gradient tokens
- `src/routes/__root.tsx` — add Google Fonts `<link>` entries (Fraunces, Inter) alongside the existing stylesheet link
- `src/routes/index.tsx` — replace placeholder with full single-page site (nav, hero, trust strip, rentals grid, restrooms, how-it-works, service area + Google Map iframe, testimonials, FAQ accordion, contact band, footer, mobile sticky bar) + SEO `head()` with LocalBusiness JSON-LD
- `src/assets/*.jpg` — 9 images already generated (hero-tent, 6 rental categories, 2 restroom shots)

No new packages. Uses existing shadcn `accordion` and lucide icons (Phone, MessageSquare, MapPin, Clock, Mail, Check, ArrowRight).
