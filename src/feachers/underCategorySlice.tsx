import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

interface underCategory {
      name: string;
      category_id: number
}

interface underCategoryState {
    status: string;
    underCategory: underCategory[];
    error: string | null
}

const initialState: underCategoryState= {
    status:'test',
    underCategory:[],
    error: null
}

export const fetchunderCategory = createAsyncThunk('undercategory/fetchunderCategory', async()=>{
    const res = await fetch('http://localhost:5001/undercategory')
    const json = await res.json()
    return json as underCategory[]
})


const underCategorySlice = createSlice({
    name: "undercategory",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchunderCategory.fulfilled, (state, action)=>{
            state.status = "success";
            state.underCategory = action.payload
        })
    }
})

export default underCategorySlice.reducer

