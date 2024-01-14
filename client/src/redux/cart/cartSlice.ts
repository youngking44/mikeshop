import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../types";

interface ItemQuantity {
  id: string;
  type: string;
}

interface CartState {
  products: CartItem[];
  itemCount: number;
  quantity: number;
  total: number;
}

const initialState: CartState = {
  products: [],
  itemCount: 1,
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItemCount: (state, action: PayloadAction<string>) => {
      if (action.payload === "add") {
        state.itemCount += 1;
      } else if (action.payload === "remove" && state.itemCount > 1) {
        state.itemCount -= 1;
      } else {
        state.itemCount = 1;
      }
    },

    setItemQuantity: (state, action: PayloadAction<ItemQuantity>) => {
      if (action.payload.type === "add") {
        state.products[
          state.products.findIndex((item) => item._id === action.payload.id)
        ].quantity += 1;
        state.total +=
          state.products[
            state.products.findIndex((item) => item._id === action.payload.id)
          ].price;
      } else {
        state.products[
          state.products.findIndex((item) => item._id === action.payload.id)
        ].quantity -= 1;

        state.total -=
          state.products[
            state.products.findIndex((item) => item._id === action.payload.id)
          ].price;
      }
    },

    addProduct: (state, action: PayloadAction<CartItem>) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    resetCart: (state) => {
      (state.products = []), (state.itemCount = 0);
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { setItemCount, setItemQuantity, addProduct, resetCart } =
  cartSlice.actions;

export default cartSlice.reducer;
