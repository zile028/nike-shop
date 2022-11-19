import {createSlice} from "@reduxjs/toolkit";

const sliceModal = createSlice({
	name: "modal",
	initialState: {
		modal: {},
	},
	reducers: {
		showModal: (state, action) => {
			state.modal = {...state.modal, ...action.payload}
		},
		closeModal: (state, action) => {
			state.modal[action.payload] = false
		}
	}
})

export const {showModal, closeModal} = sliceModal.actions
export default sliceModal.reducer