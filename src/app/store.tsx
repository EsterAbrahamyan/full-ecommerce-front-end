import {configureStore} from "@reduxjs/toolkit"
import usersReducer from "../Slices/usersSlice"
import productReducer from "../Slices/productSlice"
import categoryReducer from "../Slices/categorySlice"
import undercategoryReducer from "../Slices/underCategorySlice"
import headerReducer from "../Slices/headerSlice"
import sliderReducer from "../Slices/sliderSlice"
import cartReducer from "../Slices/CartItemsSlice"
// import homepageReducer from "../Slices/homepageSlice"

export const store = configureStore({
    reducer:{
        users: usersReducer,
        product: productReducer,
        category: categoryReducer,
        undercategory:undercategoryReducer,
        header: headerReducer,
        slider: sliderReducer,
        cart: cartReducer
        // homepage: homepageReducer

    
        
        
    }
})




export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
