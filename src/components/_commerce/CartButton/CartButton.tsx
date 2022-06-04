import { useEffect } from "react";
import { FaShoppingBag } from "react-icons/fa";

import { Badge, Button } from "@components";

import { useAppDispatch, useAppSelector } from "@store";
import { showModal } from "@store/modal/modal.slice";
import { fetchCart } from "@store/cart/cart.actions";

const CartButton: React.VFC = () => {
	const dispatch = useAppDispatch();

	const { total_items } = useAppSelector((state) => state.cart);

	useEffect(() => {
		dispatch(fetchCart());
	}, [dispatch]);

	return (
		<Button
			onClick={() => dispatch(showModal())}
			size="sq"
			theme="ghost"
			aria-label="open cart"
		>
			<FaShoppingBag size={20} />
			<div className="absolute bottom-0 right-0">
				<Badge>{total_items}</Badge>
			</div>
		</Button>
	);
};

export default CartButton;
