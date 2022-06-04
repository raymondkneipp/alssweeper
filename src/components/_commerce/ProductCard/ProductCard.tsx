import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { Product } from "@chec/commerce.js/types/product";

import { Typography, Button, Tall, Badge, Discount, Stars } from "@components";

import { useAppDispatch } from "@store";
import { addToCart } from "@store/cart/cart.actions";

interface Props {
	product: Product;
}

const ProductCard: React.VFC<Props> = ({ product }) => {
	const dispatch = useAppDispatch();

	const [loading, setLoading] = useState(false);

	const handleAddToCart = (productId: string) => {
		setLoading(true);

		toast
			.promise(dispatch(addToCart(productId)), {
				loading: `Adding ${product.name} to cart...`,
				success: `${product.name} has been added`,
				error: "Something went wrong, please try again.",
			})
			.then(() => setLoading(false));
	};

	return (
		<div className="shadow-md p-6 rounded-xl">
			<Tall
				master={
					<Image
						src={product.image?.url || ""}
						alt={product.name}
						layout="responsive"
						height={300}
						width={300}
						objectFit="contain"
						priority={true}
					/>
				}
				slave={
					<div className="flex space-y-6 flex-col items-start col-span-2">
						<Badge>In Stock</Badge>

						<Stars />

						<Typography variant="h1">{product.name}</Typography>

						<span dangerouslySetInnerHTML={{ __html: product.description }} />
						<div className="flex flex-col sm:flex-row sm:items-end space-y-6 sm:space-y-0 sm:space-x-6 flex-1 self-stretch justify-between">
							<div className="flex items-baseline space-x-2">
								<Typography variant="h2">
									{product.price.formatted_with_symbol}
								</Typography>
								<Typography variant="h4" className="line-through" color="light">
									<Discount price={product.price.raw} />
								</Typography>
							</div>
							<Button
								size="lg"
								onClick={() => handleAddToCart(product.id)}
								disabled={loading}
							>
								Add to Cart
							</Button>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default ProductCard;
