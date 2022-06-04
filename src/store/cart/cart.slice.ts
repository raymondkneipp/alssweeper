import { createSlice } from "@reduxjs/toolkit";
import { LineItem } from "@chec/commerce.js/types/line-item";
import { Price } from "@chec/commerce.js/types/price";
import { addToCart, decItem, fetchCart, incItem } from "./cart.actions";

export interface CartState {
	total_items: number;
	total_unique_items: number;
	subtotal: Price;
	line_items: LineItem[];
	hosted_checkout_url: string;
}

const initialState: CartState = {
	total_items: 0,
	total_unique_items: 0,
	subtotal: {
		raw: 0,
		formatted: "",
		formatted_with_symbol: "",
		formatted_with_code: "",
	},
	line_items: [],
	hosted_checkout_url: "",
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(addToCart.fulfilled, (state, action) => {
			state.total_items = action.payload.cart.total_items;
			state.total_unique_items = action.payload.cart.total_unique_items;
			state.subtotal = action.payload.cart.subtotal;
			state.line_items = action.payload.cart.line_items;
			state.hosted_checkout_url = action.payload.cart.hosted_checkout_url;
		});
		builder.addCase(fetchCart.fulfilled, (state, action) => {
			state.total_items = action.payload.total_items;
			state.total_unique_items = action.payload.total_unique_items;
			state.subtotal = action.payload.subtotal;
			state.line_items = action.payload.line_items;
			state.hosted_checkout_url = action.payload.hosted_checkout_url;
		});
		builder.addCase(decItem.fulfilled, (state, action) => {
			state.total_items = action.payload.cart.total_items;
			state.total_unique_items = action.payload.cart.total_unique_items;
			state.subtotal = action.payload.cart.subtotal;
			state.line_items = action.payload.cart.line_items;
			state.hosted_checkout_url = action.payload.cart.hosted_checkout_url;
		});
		builder.addCase(incItem.fulfilled, (state, action) => {
			state.total_items = action.payload.cart.total_items;
			state.total_unique_items = action.payload.cart.total_unique_items;
			state.subtotal = action.payload.cart.subtotal;
			state.line_items = action.payload.cart.line_items;
			state.hosted_checkout_url = action.payload.cart.hosted_checkout_url;
		});
	},
});

// export const {  } = cartSlice.actions;
export default cartSlice.reducer;
