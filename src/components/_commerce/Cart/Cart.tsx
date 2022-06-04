import { FaTimes } from "react-icons/fa";
import cn from "variant-classnames";

import { Typography, Button, CartItem, CartEmpty } from "@components";

import { useAppDispatch, useAppSelector } from "@store";
import { hideModal } from "@store/modal/modal.slice";
import tabable from "@utils/tabable";

const Cart: React.VFC = () => {
	const dispatch = useAppDispatch();

	const { total_items, line_items, subtotal, hosted_checkout_url } =
		useAppSelector((state) => state.cart);
	const { show } = useAppSelector((state) => state.modal);

	return (
		<div
			className={cn(
				{
					$all: "z-40 right-0 fixed bottom-0 max-w-lg w-screen top-0 bg-white shadow-md flex flex-col overflow-auto p-3 transition duration-500",
					show: { false: "translate-x-full" },
				},
				{ show }
			)}
		>
			<div className="flex justify-between p-3">
				<div className="flex items-baseline space-x-2">
					<Typography variant="h3">Shopping Cart</Typography>
					<Typography variant="p">({total_items} Items)</Typography>
				</div>

				<Button
					size="sq"
					theme="ghost"
					onClick={() => dispatch(hideModal())}
					aria-label="close cart"
					{...tabable(show)}
				>
					<FaTimes size={20} />
				</Button>
			</div>
			{total_items > 0 ? (
				<>
					<div className="divide-y flex-1">
						{line_items.map((product) => (
							<CartItem key={product.id} product={product} />
						))}
					</div>
					<div className="p-3 flex flex-col space-y-6">
						<Typography variant="h4">
							Subtotal: {subtotal.formatted_with_symbol}
						</Typography>
						<Button to={hosted_checkout_url} {...tabable(show)}>
							Checkout
						</Button>
					</div>
				</>
			) : (
				<CartEmpty />
			)}
		</div>
	);
};

export default Cart;
