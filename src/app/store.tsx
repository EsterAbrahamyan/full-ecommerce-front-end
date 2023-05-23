import {configureStore} from "@reduxjs/toolkit"
import usersReducer from "../feachers/usersSlice"
import productReducer from "../feachers/productSlice"
import categoryReducer from "../feachers/categorySlice"
import undercategoryReducer from "../feachers/underCategorySlice"

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
