import React from 'react';
import Link from 'next/link';
import { languages } from '../../i18n/config';
import { useTranslation } from 'react-i18next';
import { AiOutlineGlobal } from 'react-icons/ai';
import NavDropdown from 'react-bootstrap/NavDropdown';
/**
 * Renders a language selector menu to switch between the different
 * versions of the site.
 * @component
 */
const LanguageMenu = () => {
	const { t, i18n } = useTranslation();
	const navDropdownTitle = (
		<>
			<AiOutlineGlobal /> {i18n.language}
		</>
	);
	return (
		<NavDropdown title={navDropdownTitle} id="language_select_dropdown">
			{languages.map((lang, index) => {
				const current = ['uppercase', i18n.language === lang ? 'text-blue-600' : ''];
				return (
					// <Link key={index} href= as={'/' + lang}>
					<Link href={'/' + lang} key={index}>
						<NavDropdown.Item as="a" href={'/' + lang}>
							{lang}
						</NavDropdown.Item>
					</Link>
				);
			})}
		</NavDropdown>
	);
};

export default LanguageMenu;
