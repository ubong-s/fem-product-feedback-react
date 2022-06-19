import { configureStore } from '@reduxjs/toolkit';
import productRequestsReducer from './features/product-requests/productRequestsSlice';

export const store = configureStore({
   reducer: {
      productRequests: productRequestsReducer,
   },
});
