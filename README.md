# Douce Reverie

Next.js prototype for a high-end editorial fashion ecommerce homepage.

The current version migrates the initial standalone HTML concept into a localized Next.js App Router project. Simplified Chinese is the default locale, with Japanese, English, and Traditional Chinese also available.

## Files

- `app/[locale]/page.tsx` - localized homepage route
- `components/Storefront.tsx` - interactive storefront experience
- `messages/*.json` - locale dictionaries (`zh-CN`, `ja`, `en`, `zh-TW`)
- `lib/currency.ts` - locale-aware currency formatting
- `lib/products.ts` - prototype product data
- `public/images/maison-reverie-hero.png` - original hero campaign image
- `brand-spec.md` - extracted brand and visual direction
- `critique.json` - design critique notes from the initial generation
- `legacy-static/` - previous standalone HTML prototype

## Preview

```bash
npm install
npm run dev
```

Open `http://localhost:3000/zh-CN`.
