import {configureStore} from "@reduxjs/toolkit";
import sliceCart from "./sliceCart";
import sliceProduct from "./sliceProduct";
import sliceModal from "./sliceModal";

const store = configureStore({
	reducer: {
		productStore: sliceProduct,
		cartStore: sliceCart,
		modalStore: sliceModal,
	},
});
export default store;
