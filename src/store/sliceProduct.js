import {createSlice} from "@reduxjs/toolkit"


const sliceProduct = createSlice({
    name: "products",
    initialState: {
        products: {},
        category: [],
        topProducts: [],
    },
    reducers: {
        storeData: (state, action) => {
            let products = action.payload
            let category = [];
            let filteredProduct = {}
            
            products.forEach((el) => {
                if (!filteredProduct.hasOwnProperty(el.source.toLowerCase())) {
                    filteredProduct[el.source.toLowerCase()] = []
                }
                filteredProduct[el.source.toLowerCase()].push(el)

                if (!category.includes(el.source)) {
                    category.push(el.source)
                }
            })
            state.products = filteredProduct
            state.category = category
        },
        getTopProduct: (state, action) => {
        }
    }
})

export const {storeData, getTopProduct} = sliceProduct.actions
export default sliceProduct.reducer
