import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { GlobalStyles } from '../../styles/global';
import { lightTheme, darkTheme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';
import NavBar from '../navbar/navbar.js';
import useDarkMode from 'use-dark-mode';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
const Layout = function ({ children, fluid }) {
	const { t } = useTranslation();
	// const [theme, setTheme] = useState('light');
	const darkMode = useDarkMode(false);
	return (
		<ThemeProvider theme={darkMode.value === false ? lightTheme : darkTheme}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
					rel="stylesheet"
				/>
				<meta name="description" content="Learn how to build a personal website using Next.js" />
				<meta name="og:title" content={t('siteMeta.title')} />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />{' '}
				<title>{t('siteMeta.title')}</title>
			</Head>
			<GlobalStyles />
			<NavBar darkMode={darkMode} />
			{fluid ? (
				<Container fluid>
					<main>{children}</main>
				</Container>
			) : (
				<Container>
					<main>{children}</main>
				</Container>
			)}
			<Container className="text-center pt-3">
				<span>
					You're in {darkMode.value ? 'Dark' : 'Light'} Mode{' '}
					<button className={'btn btn-primary btn-sm'} onClick={darkMode.toggle}>
						Toggle
					</button>
				</span>
			</Container>
		</ThemeProvider>
	);
};
export default Layout;
