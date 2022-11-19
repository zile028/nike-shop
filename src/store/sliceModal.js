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
            let copyModal = {...state.modal}
            console.log(copyModal)
        }
    }
})

export const {toggleModal} = sliceModal.actions
export default sliceModal.reducer