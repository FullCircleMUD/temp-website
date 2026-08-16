# temp-website

The holding site for **fcmud.world** while the game is in pre-alpha. It explains what Full Circle
MUD is, states plainly that the game runs on the staging instance and that asset import/export is
off until beta, and sends players to `staging.fcmud.world`.

It is temporary. At beta, production moves to `fcmud.world` and this site is retired.

## Stack

[Astro](https://astro.build), static output. No adapter, no server, no JavaScript shipped to the
browser.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # writes dist/
npm run preview  # serve the built dist/
```

## Deploy — Cloudflare Pages

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |

Then add `fcmud.world` as a custom domain on the Pages project and point DNS at it.

## Theming

The look is inherited from the game site rather than reinvented, so the two cannot drift apart:

- `public/css/fcm-dark.css` is copied verbatim from
  `src/game/web/static/website/css/fcm-dark.css`. **Do not edit it here** — change it in the game
  repo and re-copy.
- `public/css/site.css` holds only the few base rules Evennia's own `website.css` would normally
  supply (layout, navbar logo sizing, footer spacing). Colours, fonts and components all come from
  `fcm-dark.css`.
- Bootstrap 4.6.0 loads from CDN, matching the game site's `base.html`.
- Logo, favicons and the Open Graph preview are copied from the game repo's
  `static/website/images/`.

## Content rules

The game is pre-alpha and the copy has to stay honest about it:

- The playable instance is **staging**, not production.
- **No import or export of on-chain assets until beta.**
- Characters and the world get wiped on rebuilds.
- No investment framing. Blockchain is how the game stores ownership — it is not a financial
  product.
