import { createAsyncThunk } from "@reduxjs/toolkit";
import { LineItem } from "@chec/commerce.js/types/line-item";
import commerce from "@utils/commerce";

export const addToCart = createAsyncThunk(
	"cart/addToCart",
	async (productId: string) => {
		const cart = await commerce.cart.add(productId, 1);
		return cart;
	}
);

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
	const cart = await commerce.cart.retrieve();
	return cart;
});

export const decItem = createAsyncThunk(
	"cart/decItem",
	async (product: LineItem) => {
		const cart = await commerce.cart.update(product.id, {
			quantity: product.quantity - 1,
		});

		return cart;
	}
);

export const incItem = createAsyncThunk(
	"cart/incItem",
	async (product: LineItem) => {
		const cart = await commerce.cart.update(product.id, {
			quantity: product.quantity + 1,
		});

		return cart;
	}
);
