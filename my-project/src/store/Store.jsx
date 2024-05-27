import { configureStore } from '@reduxjs/toolkit';
import productReducer, { fetchContent } from '../features/ProductSlice'; // Ensure the correct path

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
store.dispatch(fetchContent())