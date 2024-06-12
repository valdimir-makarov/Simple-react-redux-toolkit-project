import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartArray: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cartArray.push(action.payload);
     
    }
  }
})

export const { addProduct } = cartSlice.actions
export default cartSlice.reducer
