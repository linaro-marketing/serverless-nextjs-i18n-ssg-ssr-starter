import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import LangSelector from '../lang_selector/lang_selector';
import { useTranslation } from 'react-i18next';
import { prependPath } from '../../lib/lang.js';
import PropTypes from 'prop-types';
/**
 * Renders the main website navbar
 @component
 */
const NavBar = () => {
	const { t, i18n } = useTranslation();
	return (
		<Navbar bg="primary" expand="lg" variant="dark">
			<Link href={`/${i18n.language}`}>
				<Nav.Link as="a" href={`/${i18n.language}`}>
					<Navbar.Brand>Next.js v10 static serverless-nextjs </Navbar.Brand>
				</Nav.Link>
			</Link>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href={prependPath(`/about`)}>{t('about')}</Nav.Link>
					<Nav.Link href={prependPath(`/posts`)}>{t('posts')}</Nav.Link>
					<Nav.Link href={prependPath(`/test`)}>SSR {t('test')}</Nav.Link>
				</Nav>
				<LangSelector />
			</Navbar.Collapse>
		</Navbar>
	);
};
export default NavBar;
