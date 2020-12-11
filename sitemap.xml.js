// Fetch required environment variables
require('dotenv').config({
	path: `environments/.env.${process.env.BUILD_ENV || 'localhost'}`,
});
const sitemap = require('nextjs-sitemap-generator');
console.log('Generating a sitemap...');
// const BUILD_ID = fs.readFileSync('.next/BUILD_ID').toString();
// Helper function to strip the trailing slash from a URL string
const stripTrailingSlash = (url) => {
	if (url.endsWith('/')) {
		return url.slice(0, -1);
	} else {
		return url;
	}
};
// Get the stripped URL
const strippedURL = stripTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL);
// Generate the sitemap!
sitemap({
	baseUrl: strippedURL,
	pagesDirectory: __dirname + '/.next/serverless/pages',
	targetDirectory: 'out/',
	ignoredExtensions: ['js', 'map'],
	ignoredPaths: ['[fallback]'],
});
