import { createSlice } from "@reduxjs/toolkit";
 import { createAsyncThunk } from "@reduxjs/toolkit";
 import axios from 'axios';
const initialState = {
    products:[],
}

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async () => {
      const res = await axios('https://dummyjson.com/products')
      const data = await res.data
      return data
    }
  )


const ProductSlice = createSlice({
    name:"products",
    initialState,

 reducer:{


    
 },
 extraReducers :(builder)=>{
      builder.addCase(fetchContent.pending, (state) => {
        state.isLoading = true
      })
      builder.addCase(fetchContent.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload
      })
      builder.addCase(fetchContent.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
 })
 },
})

  



export default ProductSlice.reducer