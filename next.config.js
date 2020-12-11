require('dotenv').config({
	path: `environments/.env.${process.env.BUILD_ENV || 'localhost'}`,
});
console.log(`Current Environment: ${process.env.BUILD_ENV}`);
console.log(`Current Site URL: ${process.env.NEXT_PUBLIC_SITE_URL}`);

module.exports = {
	target: 'serverless',
	// Domains to allow remote image retrieval from.
	// When uploading images to s3, set this to the public s3 bucket url
	images: {
		domains: [process.env.NEXT_PUBLIC_SITE_URL],
	},
};
