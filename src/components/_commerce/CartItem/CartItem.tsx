import Image from "next/image";
import Link from "next/link";
import { LineItem } from "@chec/commerce.js/types/line-item";

import { QuantityAdjuster, Typography } from "@components";
import tabable from "@utils/tabable";
import { useAppSelector } from "@store";

interface Props {
	product: LineItem;
}

const CartItem: React.VFC<Props> = ({ product }) => {
	const { show } = useAppSelector((state) => state.modal);

	return (
		<div className="flex p-3 space-x-3 items-center">
			<Image
				src={product.image?.url || ""}
				alt={product.name}
				layout="fixed"
				width={80}
				height={80}
				objectFit="contain"
				priority={true}
			/>
			<div className="flex flex-col space-y-2 flex-1">
				<Link href={`/shop/product/${product.permalink}`}>
					<a {...tabable(show)}>
						<Typography variant="h6">{product.name}</Typography>
					</a>
				</Link>
				<QuantityAdjuster product={product} />
			</div>
			<Typography variant="p">
				{product.line_total.formatted_with_symbol}
			</Typography>
		</div>
	);
};

export default CartItem;
