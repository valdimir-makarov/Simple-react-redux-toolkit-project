import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { filter } from 'lodash';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  filter:'',
  filteredProducts:[],
};

export const fetchContent = createAsyncThunk(
  'products/fetchContent',
  async () => {
    const res = await axios.get('https://dummyjson.com/products');
    const data = await res.data;
    console.log('API Response:', data); // Ensure the structure of the API response
    return data.products; // Return the products array
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

    setFilter(state,action){
      state.filter=action.payload
  
    }



  },
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
     
      console.log('State after fetchContent.fulfilled:', state.products); // Log the updated state
      try{
        state.filteredProducts= state.products.filter((product)=>{
      product.title.toLowerCase().includes(state.filter.toLowerCase())
    })
    }
    catch(error){
      console.log("the filteredProducts reducer is not working ")
    }
   
   
   
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
export const { setFilter } = productSlice.actions;
export default productSlice.reducer;
