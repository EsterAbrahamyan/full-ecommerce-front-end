import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

interface Category {
      name: string;
}

interface CategoryState {
    status: string;
    category: Category[];
    error: string | null
}

const initialState: CategoryState= {
    status:'test',
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
        .addCase(fetchCategory.fulfilled, (state, action)=>{
            state.status = "success";
            state.category = action.payload
        })
    }
})

export default categorySlice.reducer

