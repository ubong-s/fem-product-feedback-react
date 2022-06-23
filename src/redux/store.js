import { configureStore } from '@reduxjs/toolkit';
import editFormReducer from './features/forms/editFormsSlice';
import addFormReducer from './features/forms/addFormsSlice';
import productRequestsReducer from './features/product-requests/productRequestsSlice';

export const store = configureStore({
   reducer: {
      productRequests: productRequestsReducer,
      addForm: addFormReducer,
      editForm: editFormReducer,
   },
});
