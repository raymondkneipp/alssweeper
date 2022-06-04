import { useState } from "react";
import toast from "react-hot-toast";
import { LineItem } from "@chec/commerce.js/types/line-item";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { Button, Typography } from "@components";

import { useAppDispatch, useAppSelector } from "@store";
import { decItem, incItem } from "@store/cart/cart.actions";
import tabable from "@utils/tabable";

interface Props {
	product: LineItem;
}

const QuantityAdjuster: React.VFC<Props> = ({ product }) => {
	const dispatch = useAppDispatch();
	const [loading, setLoading] = useState(false);

	const { show } = useAppSelector((state) => state.modal);

	const handleDec = (product: LineItem) => {
		setLoading(true);
		toast
			.promise(dispatch(decItem(product)), {
				loading: `Removing ${product.name}...`,
				success: `${product.name} has been removed`,
				error: "Something went wrong, please try again.",
			})
			.then(() => setLoading(false));
	};

	const handleInc = (product: LineItem) => {
		setLoading(true);
		toast
			.promise(dispatch(incItem(product)), {
				loading: `Adding ${product.name}...`,
				success: `${product.name} has been added`,
				error: "Something went wrong, please try again.",
			})
			.then(() => setLoading(false));
	};

	return (
		<div className="border rounded-xl inline-flex items-center w-36">
			<Button
				onClick={() => handleDec(product)}
				size="sq"
				theme="ghost"
				disabled={loading}
				aria-label="remove one item"
				{...tabable(show)}
			>
				<AiOutlineMinus />
			</Button>
			<Typography element="span" variant="p" className="flex-1 text-center">
				{product.quantity}
			</Typography>
			<Button
				onClick={() => handleInc(product)}
				size="sq"
				theme="ghost"
				disabled={loading}
				aria-label="add one item"
				{...tabable(show)}
			>
				<AiOutlinePlus />
			</Button>
		</div>
	);
};

export default QuantityAdjuster;
