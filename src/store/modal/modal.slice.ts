import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
	show: boolean;
}

const initialState: ModalState = {
	show: false,
};

export const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		showModal: (state) => {
			state.show = true;
		},
		hideModal: (state) => {
			state.show = false;
		},
	},
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
