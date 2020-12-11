---
title: "About the project"
---

This Next.js 10 starter utilises `i18next` and `react-i18next` to provide a simple but effective i18n solution.

## Localized Routes


This starter supports simple localized routes. Add your routes to the `src/locales/[lang]/routes.json` where `[lang]` is one of your supported languages. 

**Important Note:**

Next.js currently has a severe limitation in the routing capabilites meaning nested localized routes cannot be implemented.

- https://github.com/vercel/next.js/issues/20091
- https://github.com/vercel/next.js/issues/9130

This started will be updated when Next.js has a solution for the above.


## Sitemap 

nextjs-sitemap-generator is used to generated a multi-lang sitemap. `sitemap.xml.js` is a node JS script that should be run after building the site.
