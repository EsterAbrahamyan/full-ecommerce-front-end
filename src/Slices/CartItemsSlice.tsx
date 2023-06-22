import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  undercategory_id: number;
}

interface Cart {
  id: number;
  product_id: number;
  name: string;
  price: number;
  quantity: number;
  Product: Product;
}

interface CartState {
  status: string;
  carts: Cart[];
  error: null | string;
  setIsdel: boolean; // Add setIsdel property
}


const initialState: CartState = {
  status: "success",
  carts: [],
  error: null,
  setIsdel: false, // Add setIsdel property with initial value
};

export interface Id {
  product_id: number;
  user_id: number;
  quantity: number;
}

export const createCart = createAsyncThunk(
  "cart/createCart",
  async ({ product_id, user_id, quantity }: Id) => {
    const res = await fetch("http://localhost:6005/cartitems/new", {
      method: "Post",
      body: JSON.stringify({
        product_id,
        user_id,
        quantity,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await res.json(); // Await the JSON parsing
    return json;
  }
);

export const deleteCartItem = createAsyncThunk("cart/deleteCartItems",async (id: number) => {
    const res = await fetch(`http://localhost:6005/cartitems/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await res.json(); // Await the JSON parsing
    return json;
  }
);

export const getCart = createAsyncThunk("cart/getCart", async (id?: string) => {
  const res = await fetch(`http://localhost:6005/cartitems/${id}`);
  const json = await res.json(); // Await the JSON parsing
  return json;
});

export const incrementCartItem = createAsyncThunk(
  "cartitems/incrementCartItem",
  async (id: number) => {
    const res = await fetch(
      `http://localhost:6005/cartitems/increment/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          quantity: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const json = await res.json(); 
    return json;
  }
) as any; 


export const decrementCartItem = createAsyncThunk(
  "cartitems/decrementCartItem",
  async (id: number) => {
    const res = await fetch(
      `http://localhost:6005/cartitems/decrement/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          quantity: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const json = await res.json(); // Await the JSON parsing
    return json;
  }
);

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    setIsdel: (state, action: PayloadAction<boolean>) => {
      state.setIsdel = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCart.fulfilled, (state, action) => {
        state.status = "success";
        if (action.payload && Array.isArray(action.payload)) {
          state.carts.push(...action.payload); // <--- Use spread operator to add elements
        }
      })
      .addCase(getCart.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.carts = payload;
      })
      .addCase(deleteCartItem.fulfilled,(state, {payload})=>{
        state.status = 'success'
        if(payload.cartItem){
            state.carts.push(payload.cartItem)
        }
    })
      .addCase(incrementCartItem.fulfilled, (state, { payload }) => {
        state.status = "success";
        const product_id = payload.cartItem.product_id;
        const cartItemIndex = state.carts.findIndex(
          (item) => item.product_id === product_id
        );
        if (cartItemIndex !== -1) {
          state.carts[cartItemIndex].quantity += 1;
        }
      })
      .addCase(decrementCartItem.fulfilled, (state, { payload }) => {
        state.status = "success";
        const cartItemId = payload.cartItem.product_id;
        const cartItemIndex = state.carts.findIndex(
          (item) => item.product_id === cartItemId
        );
        if (cartItemIndex !== -1) {
          if (state.carts[cartItemIndex].quantity > 1) {
            state.carts[cartItemIndex].quantity -= 1;
          }
        }
      });
  },
});

export const { setIsdel } = cartSlice.actions;

export const getCartItems = (state: RootState) => state.cart.carts;

export default cartSlice.reducer;
