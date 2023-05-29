import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"


interface Category {
      id:number;
      name: string;
      underCategories: underCategories [];
}

interface underCategories{
  id: number;
  name: string;
  category_id: number;
  Product: product []
}

interface product{
  id:number;
  name: string;
  price: number;
  image: string;
  underCategory_id: number
}

interface CategoryState {
    loading: boolean;
    category: Category[];
    error: string | null
}

const initialState: CategoryState= {
    loading: false,
    category:[],
    error: null
}

export const fetchCategory = createAsyncThunk('category/fetchCategory', async()=>{
    const res = await fetch('http://localhost:6005/category')
    const json = await res.json()
    return json 
})

export const fetchCategoryId = createAsyncThunk("category/fetchCategoryId", async (id: number) => {
    // Fetch category data by ID from the server
    const res = await fetch(`http://localhost:6005/category/${id}`);
    const json = await res.json();
    return json 
  });


const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCategory.pending, (state) => {
            state.loading = true;
         })
        
        .addCase(fetchCategory.fulfilled, (state, action:PayloadAction <Category[]>) => {
            state.loading = false;
            state.category = action.payload;
          })
          .addCase(fetchCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? 'Failed to fetch Category';
          })
          
          .addCase(fetchCategoryId.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchCategoryId.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? "Failed to fetch category";
          })
          .addCase(fetchCategoryId.fulfilled, (state, action:PayloadAction <Category>) => {
            state.loading = false;
            state.category=[action.payload];
          })

    }
})

export default categorySlice.reducer
export const selectAllCategories = (state: RootState): Category[] => state.category.category;
// export const selectCategoryById = (state: RootState, id: string): Category | undefined =>
//   state.category.category.find((category) => category.id === parseInt(id));

