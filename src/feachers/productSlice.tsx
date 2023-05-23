import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

interface Products {
      name: string;
      price: number;
      description: string;
      image: string;
      undercategory_id: string
}

interface ProductsState {
    status: string;
    products: Products[];
    error: string | null
}

const initialState: ProductsState= {
    status:'test',
    products:[],
    error: null
}

export const fetchProducts = createAsyncThunk('product/fetchProducts', async()=>{
    const res = await fetch('http://localhost:5001/product')
    const json = await res.json()
    return json as Products[]
})


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.status = "success";
            state.products = action.payload
        })
    }
})

export default productSlice.reducer

