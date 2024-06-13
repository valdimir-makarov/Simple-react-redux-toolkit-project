import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartArray: [],
  cartQuantity: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const itemIndex = state.cartArray.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartArray[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartArray.push(tempProduct);
      }
    }
  }
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
