// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer, { fetchContent } from '../features/ProductSlice';
import {productsApi} from '../ProductsApi/ProductsApi'
import { setupListeners } from '@reduxjs/toolkit/query';
import cartReducer from '../features/CartSlice'
export const store = configureStore({
  reducer: {
    products: productReducer,
    cart:cartReducer,
    [productsApi.reducerPath]:productsApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});


setupListeners(store.dispatch);

store.dispatch(fetchContent());
