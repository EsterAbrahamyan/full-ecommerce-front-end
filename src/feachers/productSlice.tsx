import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"


interface Products {
      id:number;
      name: string;
      price: number;
      description: string;
      image: string;
      undercategory_id: number
}

interface ProductsState {
    loading: boolean;
    products: Products[];
    error: string | null
}

const initialState: ProductsState= {
    loading: false,
    products:[],
    error: null
}

export const fetchProducts = createAsyncThunk('product/fetchProducts', async()=>{
    const res = await fetch('http://localhost:6005/product')
    const json = await res.json()
    return json as Products[]
})


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchProducts.fulfilled, (state, action:PayloadAction <Products[]>) => {
            state.loading = false;
            state.products = action.payload;
          })
          .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? 'Failed to fetch products';
          });
    }
})

export default productSlice.reducer
export const selectAllProducts = (state: RootState): Products[] => state.product.products;

