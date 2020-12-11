import Layout from '../../../../components/layout/layout';
import { getAllContentIds, getItemData } from '../../../../lib/content';
import Head from 'next/head';
import Date from '../../../../components/date/date';
import { getLanguage } from '../../../../lib/lang';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import styled from 'styled-components';

const ImageContainer = styled.div`
	width: 100%;
	height: 400px;
	position: relative;
`;

export default function Post({ postData }) {
	const { t } = useTranslation();
	if (!postData) return null; // this is the one-liner check
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<Container>
				<ImageContainer className="mb-4">
					<Image src={postData.image} alt="Galaxy Picture" layout="fill" objectFit="cover" />
				</ImageContainer>
				<article>
					<h1>{postData.title}</h1>
					<div>
						<Date dateString={postData.date} />
					</div>
					<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
				</article>
			</Container>
		</Layout>
	);
}

export async function getStaticPaths({ locales }) {
	const paths = getAllContentIds('posts');
	return {
		paths: paths,
		fallback: false,
	};
}
export async function getStaticProps({ params }) {
	const language = getLanguage(params.lang);
	const postData = await getItemData('posts', params.id);
	return {
		props: {
			language: language,
			postData,
		},
	};
}
