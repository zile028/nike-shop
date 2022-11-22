import {createSlice} from "@reduxjs/toolkit";

const sliceModal = createSlice({
    name: "modal",
    initialState: {
        modal: {
            login: false
        }
    },
    reducers: {
        toggleModal: (state, action) => {
            state.modal = {...state.modal, ...action.payload}
        }
    }
})

export const {toggleModal} = sliceModal.actions
export default sliceModal.reducer