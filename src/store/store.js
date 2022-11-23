import { configureStore } from "@reduxjs/toolkit";
import sliceCart from "./sliceCart";
import sliceProduct from "./sliceProduct";
import sliceModal from "./sliceModal";
import sliceUser from "./sliceUser";

const store = configureStore({
  reducer: {
    productStore: sliceProduct,
    cartStore: sliceCart,
    modalStore: sliceModal,
    userStore: sliceUser,
  },
});
export default store;
