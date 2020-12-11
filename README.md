
# serverless-nextjs-i18n-ssg-ssr-starter

This started aims to bridge the gap for those getting started with Next.js v10 and serverless-nextjs. Although the thought of hosting with Vercel/Netlify is nice, for our requirements, hosting our own infrastructure is must. Thus, `serverless-nextjs` is the best option for hosting with AWS short of spinning up a server.

Features include:

- `i18next`
  - Core i18next library
- `react-i18next`
  - Used for the `useTranslation` hook
- `i18next-browser-languagedetector`
  - Used to detect the users requested language.
- `react-bootstrap`
  - An awesome react wrapper for the popular Bootstrap framework.
- `styled-components`
  - Used to create simple styled components
- `react-styleguidist`
  - Used for generating some documentation for your app components
- Multi-env support
  - Like most projects, the need for a multi environment app is a must
  - Add environment variables to `environments/.env.<BUILD_ENV_NAME>`
  - Then run the deployment with `BUILD_ENV=<BUILD_ENV_NAME> npx serverless`

Clients will be directly redirected from `/` to `/[lang]` based on the detected language.

## Installation

Clone the repository and then run `yarn install`

## Configuration

-   Set the languages and the default language `/src/i18n/config.js`
-   Locales are located in `/src/locales/`
-   Before running `BUILD_ENV=develop npx serverless` you will need to configure serverless via `--profile` or simply exporting your AWS credentials.
-   Setup your environments

## Export Static Pages

`npm run export`

Originally forked from [github.com/Xairoo/nextjs-i18n-static-page-starter](https://github.com/Xairoo/nextjs-i18n-static-page-starter) 
