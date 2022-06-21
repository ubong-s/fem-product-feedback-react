import { createAction, createSlice } from '@reduxjs/toolkit';
import data from '../../../data/data.json';

function filterStatus(requests, statusParams) {
   return requests.filter((status) => status?.status === statusParams);
}

function replaceSpace(str) {
   return str.replace('-', '_');
}

const statuses = [
   ...new Set(data.productRequests.map((request) => request.status)),
];

const initialState = {
   currentUser: data.currentUser,
   allRequests: [...data.productRequests],
   filteredRequests: [...data.productRequests],
   suggestion: [],
   planned: [],
   in_progress: [],
   live: [],
   filters: { category: 'All', sort: 'Most Upvotes' },
};

export const productRequestsSlice = createSlice({
   name: 'productRequests',
   initialState,
   reducers: {
      fetchStatuses: (state) => {
         for (let i = 0; i < statuses.length; i++) {
            state[replaceSpace(statuses[i])] = filterStatus(
               state.allRequests,
               statuses[i]
            );
         }
      },
      updateFilters: (state, action) => {
         const { name, value } = action.payload;

         state.filters[name] = value;
      },
      upvoteRequest: (state, action) => {
         let id = action.payload;

         const upvoteFunc = (requests) =>
            requests.map((request) => {
               if (request.id === id && !request.upvoted) {
                  request.upvotes += 1;
                  request.upvoted = true;
               } else if (request.id === id && request.upvoted) {
                  request.upvotes -= 1;
                  request.upvoted = false;
               }

               return request;
            });

         state.allRequests = upvoteFunc(state.allRequests);
         state.suggestion = upvoteFunc(state.suggestion);
      },
   },
});

// Action creators are generated for each case reducer function
export const { upvoteRequest, fetchStatuses, updateFilters } =
   productRequestsSlice.actions;

export default productRequestsSlice.reducer;
