// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer, { fetchContent } from '../features/ProductSlice';
import {productsApi} from '../ProductsApi/ProductsApi'
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    products: productReducer,
    [productsApi.reducerPath]:productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

// Optional: Setup listeners to enable refetching on focus/connection regain
setupListeners(store.dispatch);

// Dispatch fetchContent after store configuration
store.dispatch(fetchContent());
