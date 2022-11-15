import {createSlice} from "@reduxjs/toolkit";

const sliceCart = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        total: 0
    },
    reducers: {
        addToCart: (state, action) => {
            let copyCart = [...state.cart]
            let foundIndex = null
            copyCart.find((el, index) => {
                if (el.id === action.payload.id) {
                    foundIndex = index
                    return
                }
            })
            if (foundIndex === null) {
                copyCart.push({...action.payload, count: 1})
            } else {
                copyCart[foundIndex].count++
            }

            state.cart = copyCart
        }
    }
})

export const {addToCart} = sliceCart.actions
export default sliceCart.reducer