import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import { getSortedLangsData } from './lang';
/**
 * Fetches the sorted posts data from the posts/ markdown files.
 * @param  {String} lang The potential language
 * @return {Number}     The valid language code
 */

/**
 * Fetches sorted content data from markdown files based on a directory
 * @param  {String} directory The name of the top level directory to fetch markdown content from.
 * @return {Array}     The array of sorted content objects.
 */
export function getContentData(directory, sort_by_date = true) {
	// Get file names under /posts
	const contentDirectory = path.join(process.cwd(), directory);
	const fileNames = fs.readdirSync(contentDirectory);
	const allContentData = fileNames.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '');
		// Read markdown file as string
		const fullPath = path.join(contentDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);
		// Combine the data with the id
		return {
			id,
			...matterResult.data,
		};
	});
	if (sort_by_date) {
		// Sort posts by date
		return allContentData.sort((a, b) => {
			if (a.date < b.date) {
				return 1;
			} else {
				return -1;
			}
		});
	} else {
		return allContentData;
	}
}
/**
 * Fetchs the static props for listsing posts, with the current supported i18n
 * alternatives.
 * @return {Array}     An array of static props for the posts/[id].js file.
 */
export function getAllContentIds(directory) {
	const contentDirectory = path.join(process.cwd(), directory);
	const fileNames = fs.readdirSync(contentDirectory);
	// Returns an array that looks like this:
	// [
	//   { params: { id: 'pre-rendering', lang: 'en' } },
	//   { params: { id: 'pre-rendering', lang: 'de' } },
	//   { params: { id: 'ssg-ssr', lang: 'en' } },
	//   { params: { id: 'ssg-ssr', lang: 'de' } },
	// ]
	const languageSlugs = getSortedLangsData();
	var paths = [];
	for (let fileNameI in fileNames) {
		for (let langI in languageSlugs) {
			paths.push({
				params: {
					id: fileNames[fileNameI].replace(/\.md$/, ''),
					lang: languageSlugs[langI],
				},
			});
		}
	}
	return paths;
}
/**
 * Fetches the post data for a given id.
 * @param  {String} id The id of a post to fetch data for.
 * @return {Object}     The post data object
 */
export async function getItemData(directory, id) {
	const contentDirectory = path.join(process.cwd(), directory);
	const fullPath = path.join(contentDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	// Use remark to convert markdown into HTML string
	const processedContent = await remark().use(html).process(matterResult.content);
	const contentHtml = processedContent.toString();

	// Combine the data with the id and contentHtml
	return {
		id,
		contentHtml,
		...matterResult.data,
	};
}
