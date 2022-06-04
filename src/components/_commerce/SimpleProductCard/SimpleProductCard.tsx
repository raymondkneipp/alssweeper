import Image from "next/image";
import Link from "next/link";
import { Product } from "@chec/commerce.js/types/product";

import { Typography } from "@components";
import Discount from "../Discount/Discount";

interface Props {
	product: Product;
	index: number;
}

const SimpleProductCard: React.VFC<Props> = ({ product, index }) => {
	return (
		<Link href={`/shop/product/${product.permalink}`}>
			<a className="rounded-xl shadow-md flex flex-col transition-colors">
				<div className="h-60 relative rounded-t-xl overflow-hidden">
					<Image
						src={product.image?.url || ""}
						alt={product.name}
						layout="fill"
						objectFit="cover"
						priority={index <= 6}
					/>
				</div>
				<div className="p-4 space-y-2 flex flex-col flex-1">
					<Typography variant="h5" element="h2">
						{product.name}
					</Typography>
					<div className="flex-1 flex items-baseline space-x-2">
						<Typography variant="lead">
							{product.price.formatted_with_symbol}
						</Typography>
						<Typography variant="p" className="line-through" color="light">
							<Discount price={product.price.raw} />
						</Typography>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default SimpleProductCard;
