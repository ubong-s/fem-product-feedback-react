import { createSlice } from '@reduxjs/toolkit';
import data from '../../../data/data.json';

const initialState = {
   currentUser: data.currentUser,
   allRequests: [...data.productRequests],
   filteredRequests: [...data.productRequests],
};

export const productRequestsSlice = createSlice({
   name: 'productRequests',
   initialState,
   reducers: {
      upvoteRequest: (state, action) => {
         let id = action.payload;
         const tempRequests = [...state.allRequests].map((product) => {
            if (product.id === id && !product.upvoted) {
               product.upvotes += 1;
               product.upvoted = true;
            } else if (product.id === id && product.upvoted) {
               product.upvotes -= 1;
               product.upvoted = false;
            }

            return product;
         });

         state.allRequests = tempRequests;
         state.filteredRequests = tempRequests;
      },
   },
});

// Action creators are generated for each case reducer function
export const { upvoteRequest } = productRequestsSlice.actions;

export default productRequestsSlice.reducer;
