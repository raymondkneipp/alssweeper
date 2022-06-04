import { useRouter } from "next/router";

import { Typography, Button } from "@components";

import { useAppDispatch } from "@store";
import { hideModal } from "@store/modal/modal.slice";

const CartEmpty: React.VFC = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();

	return (
		<div className="flex flex-1 flex-col space-y-6 justify-center items-center">
			<Typography variant="h3">No Items</Typography>
			<Button
				onClick={() => {
					router.push("/shop");
					dispatch(hideModal());
				}}
			>
				Continue Shopping
			</Button>
		</div>
	);
};

export default CartEmpty;
