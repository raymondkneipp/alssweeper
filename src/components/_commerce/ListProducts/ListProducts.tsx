import { Product } from "@chec/commerce.js/types/product";
import { EmptyProducts, SimpleProductCard } from "@components";

interface Props {
	products: Product[];
}

const ListProducts: React.VFC<Props> = ({ products }) => {
	return (
		<>
			{products ? (
				<>
					{products.map((product, index) => (
						<SimpleProductCard
							product={product}
							key={product.id}
							index={index}
						/>
					))}
				</>
			) : (
				<EmptyProducts />
			)}
		</>
	);
};

export default ListProducts;
