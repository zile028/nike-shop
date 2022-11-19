import {configureStore} from "@reduxjs/toolkit"
import sliceProduct from "./sliceProduct";
import sliceCart from "./sliceCart";
import sliceModal from "./sliceModal";


const store = configureStore({
    reducer: {
        productStore: sliceProduct,
        cartStore: sliceCart,
        modalStore: sliceModal,
    }
})
export default store