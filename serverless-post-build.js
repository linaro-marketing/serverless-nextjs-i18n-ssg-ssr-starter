// post-build.js
const fs = require('fs-extra');
console.log('-> Copying locales directory...');
// Path to locales directory
const localeSrc = './src/locales';
// Path to default-lambda destination
const localeDest = './.serverless_nextjs/default-lambda/locales';
// Copy Files over recursively
fs.copySync(localeSrc, localeDest, { recursive: true });
console.log('Locale directory was copied successfully');
