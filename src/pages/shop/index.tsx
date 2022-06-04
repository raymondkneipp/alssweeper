import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Product } from "@chec/commerce.js/types/product";
import { Category } from "@chec/commerce.js/types/category";
import commerce from "@utils/commerce";
import {
	Container,
	Typography,
	Wide,
	Spacing,
	Layout,
	ListProducts,
	ListCategories,
} from "@components";

export async function getStaticProps() {
	const { data: products } = await commerce.products.list({ limit: 60 });
	const { data: categories } = await commerce.categories.list();

	return {
		props: { products, categories },
	};
}

interface Props {
	products: Product[];
	categories: Category[];
}

const ShopPage: NextPage<Props> = ({ products, categories }) => {
	const pageDesc =
		"Shop affordable and reliable " +
		categories.map((cat) => cat.name).join(", ");

	return (
		<Layout>
			<NextSeo title="Shop" description={pageDesc} />
			<Spacing>
				<Container>
					<Wide
						master={
							<>
								<Typography variant="h1">Shop</Typography>
								<ListCategories categories={categories} />
							</>
						}
						slave={<ListProducts products={products} />}
					/>
				</Container>
			</Spacing>
		</Layout>
	);
};

export default ShopPage;
