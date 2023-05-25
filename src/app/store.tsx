import {configureStore} from "@reduxjs/toolkit"
import usersReducer from "../Slices/usersSlice"
import productReducer from "../Slices/productSlice"
import categoryReducer from "../Slices/categorySlice"
import undercategoryReducer from "../Slices/underCategorySlice"

export const store = configureStore({
    reducer:{
        users: usersReducer,
        product: productReducer,
        category: categoryReducer,
        undercategory:undercategoryReducer
    }
})




export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
