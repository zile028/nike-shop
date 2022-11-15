import {configureStore} from "@reduxjs/toolkit"
import sliceProduct from "./sliceProduct";
import sliceCart from "./sliceCart";


const store = configureStore({
    reducer: {
        productStore: sliceProduct,
        cartStore: sliceCart,
    }
})
export default store