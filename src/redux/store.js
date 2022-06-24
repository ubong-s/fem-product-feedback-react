import { configureStore } from '@reduxjs/toolkit';
import editFormReducer from './features/forms/editFormsSlice';
import productRequestsReducer from './features/product-requests/productRequestsSlice';

export const store = configureStore({
   reducer: {
      productRequests: productRequestsReducer,
      editForm: editFormReducer,
   },
});
