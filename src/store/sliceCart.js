import {createSlice} from "@reduxjs/toolkit";

const sliceCart = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        total: 0
    },
    reducers: {

        changeCount: (state, action) => {
            let {index, increment} = action.payload

            state.total += state.cart[index].price * increment
            if (state.cart[index].count === 1 && increment === -1) {
                state.cart.splice(index, 1)
            } else {
                state.cart[index].count += increment
            }
        },

        removeFromCart: (state, action) => {
            let {count, price} = state.cart[action.payload]
            state.cart.splice(action.payload, 1)
            state.total -= count * price
        },

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
            state.total += action.payload.price

            state.cart = copyCart
        }
    }
})

export const {addToCart, removeFromCart, changeCount} = sliceCart.actions
export default sliceCart.reducer