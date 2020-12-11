
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


## TODO 

- Implement localized routes when suport from Next.js is available.
- Currently serverless-nextjs does not replace the `public/sitemap.xml` on deployment. 
  - A workaround could be to use the AWS cli to delete the current sitemap.xml before deployment.

## Deployment

The `BUILD_ENV` should correlate to an `environments/.env.develop` file, containing your `NEXT_PUBLIC_SITE_URL` at a minimum. This URL will be prepended to `sitemap.xml` entries and used as the root domain in `next.config.js`.

### Multi-env

If you are deploying a multi-environment project (e.g staging/production versions of the app), you should utilise the `deploy.sh` script. 

You need to create a separate S3 bucket for storing your multi-env `.serverless` cache folders.

Edit the `deploy.sh` script with the path to your s3 bucket.

Then you will be able to deploy your app using:

```
BUILD_ENV=develop ./deploy.sh
```

### Single env

If you are only deploying to a single environment you could run:

```
BUILD_ENV=main npx serverless
```

#### Credits

Originally forked from [github.com/Xairoo/nextjs-i18n-static-page-starter](https://github.com/Xairoo/nextjs-i18n-static-page-starter) 
