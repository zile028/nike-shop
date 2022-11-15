import { configureStore } from "@reduxjs/toolkit";
import sliceCart from "./sliceCart";
import sliceProduct from "./sliceProduct";

const store = configureStore({
  reducer: {
    productStore: sliceProduct,
    cartStore: sliceCart,
  },
});
export default store;
