import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsApi } from '../ProductsApi/ProductsApi';
import productReducer, { fetchContent } from '../features/ProductSlice';
import cartReducer from '../features/CartSlice';
import authReducer from '../features/AuthSlice'; // Correct import name

 export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    auth: authReducer, // Use consistent naming
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);

store.dispatch(fetchContent());

// Ensure the store is exported for use in your app
