import commerce from "@utils/commerce";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import {
	Container,
	Typography,
	Wide,
	Spacing,
	Layout,
	ListProducts,
	ListCategories,
} from "@components";
import { Product } from "@chec/commerce.js/types/product";
import { Category } from "@chec/commerce.js/types/category";

export async function getStaticPaths() {
	const { data: categories } = await commerce.categories.list();

	const paths = categories.map((category: Category) => ({
		params: { slug: category.slug },
	}));

	return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }: any) {
	const { slug } = params;
	const { data: products } = await commerce.products.list({
		limit: 60,
		category_slug: [slug],
	});
	const { data: categories } = await commerce.categories.list();
	const category = await commerce.categories.retrieve(slug, { type: "slug" });

	return {
		props: { products: products || null, category, categories },
		revalidate: 60,
	};
}

interface Props {
	products: Product[];
	category: Category;
	categories: Category[];
}

const CategoryPage: NextPage<Props> = ({ products, categories, category }) => {
	return (
		<Layout>
			<NextSeo title={category.name} description={category.description} />
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

export default CategoryPage;
