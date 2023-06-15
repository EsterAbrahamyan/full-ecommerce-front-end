import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  undercategory_id: number;
}

interface ProductsState {
  loading: boolean;
  products: Product[];
  error: string | null;
}

const initialState: ProductsState = {
  loading: false,
  products: [],
  error: null,
};

export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
  const res = await fetch("http://localhost:6005/product");
  const json = await res.json();
  return json as Product[];
});

// export const fetchProduct = createAsyncThunk("product/fetchProduct", async (id: number) => {
//   const res = await fetch(`http://localhost:6005/product/${id}`);
//   const json = await res.json();
//   return json as Product;
// });

export const fetchProduct = createAsyncThunk("product/fetchProduct", async (id: number) => {
  const res = await fetch(`http://localhost:6005/product/${id}`);
  const json = await res.json();
  return json as Product;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch products";
      })
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action: PayloadAction<Product, string, never, never>) => {
        state.loading = false;
        state.products=[action.payload];
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch product";
      });
  },
});

export default productSlice.reducer;
export const selectAllProducts = (state: RootState): Product[] => state.product.products;
// export const selectProductById = (state: RootState, id: string): Product | undefined =>
//   state.product.products.find((product) => product.id === parseInt(id));