import '../i18n/init';
import i18next from 'i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = function ({ Component, pageProps }) {
	i18next.changeLanguage(pageProps.language);
	return <Component {...pageProps} />;
};

export default App;
