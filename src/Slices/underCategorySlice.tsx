import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"


interface underCategory {
      id:number;
      name: string;
      category_id: number;
      Products: products [];

}

interface products{
    id:number;
    name: string;
    price: number;
    description: string;
    image: string;
    undercategory_id: number
}

interface underCategoryState {
    loading: boolean;
    underCategory: underCategory[];
    error: string | null
}

const initialState: underCategoryState= {
    loading: false,
    underCategory: [],
    error: null
}

export const fetchunderCategory = createAsyncThunk('undercategory/fetchunderCategory', async()=>{
    const res = await fetch('http://localhost:6005/undercategory')
    const json = await res.json()
    return json as underCategory[]
})
export const fetchunderCategoryId = createAsyncThunk('undercategory/fetchunderCategoryId', async(id:number)=>{
    const res = await fetch(`http://localhost:6005/undercategory/${id}`)
    const json = await res.json()
    return json as underCategory[]
})


const underCategorySlice = createSlice({
    name: "undercategory",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchunderCategory.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchunderCategory.fulfilled, (state, action:PayloadAction <underCategory[]>) => {
            state.loading = false;
            state.underCategory = action.payload;
          })
          .addCase(fetchunderCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? 'Failed to fetch underCategory';
          })
          .addCase(fetchunderCategoryId.fulfilled, (state, action:PayloadAction <underCategory[]>) => {
            state.loading = false;
            state.underCategory = action.payload;
          })
    }
})

export default underCategorySlice.reducer
export const selectAllunderCategories = (state: RootState): underCategory[] => state.undercategory.underCategory;
