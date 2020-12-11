import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		// Get the lang prop
		const lang = ctx.query.lang;
		// Add component styles to the head of the document
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				lang,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		const { lang } = this.props;
		return (
			<Html lang={lang}>
				<Head />
				<body>
					<script src="/no-flash.js"></script>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
