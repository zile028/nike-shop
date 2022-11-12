import {configureStore} from "@reduxjs/toolkit"
import sliceProduct from "./sliceProduct";


const store = configureStore({
    reducer: {
        productStore: sliceProduct
    }
})
export default store