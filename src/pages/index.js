import { useEffect } from 'react';
import { useRouter } from 'next/router';
import i18next from 'i18next';

/**
 * Acts as a redirect for directing users to the current
 * i18n subpath
 */
export default function Home() {
	const router = useRouter();
	useEffect(() => {
		const { pathname } = router;
		if (pathname == '/') {
			router.push('/' + i18next.language.substring(0, 2));
		}
	});
	return null;
}
