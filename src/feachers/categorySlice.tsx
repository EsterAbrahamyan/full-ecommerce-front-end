import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"


interface Category {
      id:number;
      name: string;
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
    return json as Category[]
})


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
          });
    }
})

export default categorySlice.reducer
export const selectAllCategories = (state: RootState): Category[] => state.category.category;


