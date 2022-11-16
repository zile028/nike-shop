import { createSlice } from "@reduxjs/toolkit";

const sliceCart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    removeFromCart: (state, action) => {
      state.cart.splice(action.payload, 1);
    },

    changeCount: (state, { payload }) => {
      let { count } = state.cart[payload.index];

      if (count === 1 && payload.increment === -1) {
        state.cart.splice(payload.index, 1);
      } else {
        state.cart[payload.index].count += payload.increment;
      }
    },

    addToCart: (state, action) => {
      let foundIndex = null;
      let copyCart = [...state.cart];

      state.cart.find((el, index) => {
        if (el.id === action.payload.id) {
          foundIndex = index;
          return;
        }
      });

      if (foundIndex === null) {
        copyCart.push({ ...action.payload, count: 1 });
      } else {
        copyCart[foundIndex].count++;
      }
      console.log(copyCart);
      console.log(foundIndex);
      state.cart = [...copyCart];
    },
  },
});

export const { addToCart, changeCount, removeFromCart } = sliceCart.actions;
export default sliceCart.reducer;
