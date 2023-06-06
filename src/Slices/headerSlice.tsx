import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface HeaderState {
  cartCount: number;
}

const initialState: HeaderState = {
  cartCount: 0,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    incrementCartCount: (state) => {
      state.cartCount++;
    },
    decrementCartCount: (state) => {
      if (state.cartCount > 0) {
        state.cartCount--;
      }
    },
  },
});

export const { incrementCartCount, decrementCartCount } = headerSlice.actions;
export const selectCartCount = (state: RootState): number => state.header.cartCount;

export default headerSlice.reducer;
