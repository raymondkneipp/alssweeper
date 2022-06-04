import type { NextPage } from "next";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { FaArrowLeft } from "react-icons/fa";
import { Product } from "@chec/commerce.js/types/product";
import commerce from "@utils/commerce";
import stripHtml from "@utils/strip-html";
import { Container, Spacing, Layout, ProductCard, Button } from "@components";

export async function getStaticPaths() {
	const { data: products } = await commerce.products.list();

	const paths = products.map((product: Product) => ({
		params: { permalink: product.permalink },
	}));

	return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }: any) {
	const product = await commerce.products.retrieve(params.permalink, {
		type: "permalink",
	});

	return {
		props: {
			product,
		},
		revalidate: 60,
	};
}

interface Props {
	product: Product;
}

const ProductPage: NextPage<Props> = ({ product }) => {
	const router = useRouter();

	return (
		<Layout>
			<NextSeo
				title={product.name}
				description={stripHtml(product.description)}
			/>
			<Spacing>
				<Container prose className="space-y-6">
					<Button theme="ghost" onClick={() => router.back()}>
						<FaArrowLeft size={20} />
						<span>Back</span>
					</Button>
					<ProductCard product={product} />
				</Container>
			</Spacing>
		</Layout>
	);
};

export default ProductPage;
