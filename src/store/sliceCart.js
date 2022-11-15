import { createSlice } from "@reduxjs/toolkit";

const sliceCart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      let foundIndex = null;
      let copyCart = [...state.cart];
      state.cart.find((el, index) => {
        foundIndex = index;
        return el.id === action.payload.id;
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

export const { addToCart } = sliceCart.actions;
export default sliceCart.reducer;
