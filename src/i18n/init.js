import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { languages, defaultLanguage } from './config';
const locales = Object.assign(
	{},
	...Object.keys(languages).map((index) => {
		return {
			[languages[index]]: {
				translations: require('../locales/' + languages[index] + '/translation.json'),
			},
			[languages[index]]: {
				routes: require('../locales/' + languages[index] + '/routes.json'),
			},
		};
	}),
);
export const detectionOptions = {
	// order and from where user language should be detected
	order: ['navigator', 'path', 'localStorage', 'cookie', 'htmlTag'],
	// keys or params to lookup language from
	lookupQuerystring: 'lng',
	lookupCookie: 'linaroResourcesHubLang',
	lookupLocalStorage: 'linaroResourcesHubLang',
	lookupSessionStorage: 'linaroResourcesHubLang',
	lookupFromPathIndex: 0,
	lookupFromSubdomainIndex: 0,
	// cache user language on
	caches: ['localStorage', 'cookie'],
	excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
	// cookieDomain: 'cloudfront.net',
	// optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
	cookieOptions: { path: '/', sameSite: 'strict' },
};
i18next
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: defaultLanguage,
		resources: locales,
		ns: ['translations', 'routes'],
		defaultNS: 'translations',
		supportedLngs: languages,
		returnObjects: true,
		debug: false,
		detection: detectionOptions,
		interpolation: {
			escapeValue: false, // not needed for react!!
		},
		react: {
			wait: true,
		},
	});

export default i18next;
