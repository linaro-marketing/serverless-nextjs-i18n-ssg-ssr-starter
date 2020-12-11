import { languages, defaultLanguage } from '../i18n/config';
import i18next from 'i18next';
import { detectionOptions } from '../i18n/init';
/**
 * Fetch the current languages which are supported by the app.
 * @return {Array}     Returns an Array of the current supported languages.
 */
export function getSortedLangsData() {
	return languages;
}
/**
 * Helper function to prepend the current language to a URL.
 * @param  {String} path The path to prepend the current language slug to.
 * @return {String}     The prepended i18n path for use in Link/Router paths
 */
export function prependPath(path) {
	const currentLanguage = i18next.language;
	return `/${currentLanguage}${path}`;
}
/**
 * Creates an array of the current language slugs for use in the getStaticPaths for [lang]/index.js
 * @return {Array}     Returns and array of objects representing the current language slugs
 */
export function getAllLanguageSlugs() {
	return languages.map((lang) => {
		return { params: { lang: lang } };
	});
}
/**
 * Gets the current language in use.
 * @return {String}     The current language in use
 */
export function getLang() {
	return i18next.language.substring(0, 2);
}
/**
 * Gets a valid language based on i18n locale code
 * Checks to see if the language exists and if not, returns the default lang.
 * @param  {String} lang The potential language
 * @return {Number}     The valid language code
 */
export function getLanguage(lang) {
	return languages.includes(lang) ? lang : defaultLanguage;
}
/**
 * Gets the i18n language code to use with i18next
 * @param  {Object} req The request object to retrieve the language from.
 * @return {Number}     The i18n lang shortcode
 */
export function getLanguageFromRequest(req) {
	return req.cookies[detectionOptions['lookupCookie']]
		? req.cookies[detectionOptions['lookupCookie']]
		: req.url.split('/')[1].split('/')[0];
}
