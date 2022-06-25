import { configureStore } from '@reduxjs/toolkit';
import productRequestsReducer from './features/product-requests/productRequestsSlice';
import userSliceReducer from './features/user/userSlice';

export const store = configureStore({
   reducer: {
      productRequests: productRequestsReducer,
      user: userSliceReducer,
   },
});
