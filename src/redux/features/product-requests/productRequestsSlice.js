import { createSlice } from '@reduxjs/toolkit';
import data from '../../../data/data.json';
import {
   filterStatus,
   replaceSpace,
   ascendDescend,
} from '../../../utils/helpers';

const statuses = [
   ...new Set(data.productRequests.map((request) => request.status)),
];

const initialState = {
   currentUser: data.currentUser,
   allRequests: [...data.productRequests],
   suggestion: [],
   planned: [],
   in_progress: [],
   live: [],
   filters: { category: 'all', sort: 'Most Upvotes', roadmapMobile: 'planned' },
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
      filterSuggestions: (state) => {
         let tempRequests = [...filterStatus(state.allRequests, 'suggestion')];

         if (state.filters.category !== 'all') {
            tempRequests = tempRequests.filter(
               (request) =>
                  request.category.toLowerCase() ===
                  state.filters.category.toLowerCase()
            );
         }

         if (state.filters.sort) {
            if (state.filters.sort === 'Most Upvotes') {
               tempRequests = ascendDescend(
                  tempRequests,
                  'upvotes',
                  'descending'
               );
            }
            if (state.filters.sort === 'Least Upvotes') {
               tempRequests = ascendDescend(
                  tempRequests,
                  'upvotes',
                  'ascending'
               );
            }
            if (state.filters.sort === 'Most Comments') {
               tempRequests = ascendDescend(
                  tempRequests,
                  'comments',
                  'descending'
               );
            }
            if (state.filters.sort === 'Least Comments') {
               tempRequests = ascendDescend(
                  tempRequests,
                  'comments',
                  'ascending'
               );
            }
         }

         state.suggestion = tempRequests;
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
         state.planned = upvoteFunc(state.planned);
         state.live = upvoteFunc(state.live);
         state.in_progress = upvoteFunc(state.in_progress);
      },
      toggleRoadMapMobile: (state, action) => {
         state.filters.roadmapMobile = action.payload;
      },
      addNewFeedback: (state, action) => {
         const { title, category, detail } = action.payload;
         const newFeedback = {
            id: new Date().getTime(),
            title,
            category,
            upvotes: 0,
            upvoted: false,
            status: 'suggestion',
            description: detail,
            comments: [],
         };

         state.allRequests = [...state.allRequests, newFeedback];
         state.suggestion = [...state.suggestion, newFeedback];
      },
   },
});

// Action creators are generated for each case reducer function
export const {
   upvoteRequest,
   fetchStatuses,
   updateFilters,
   filterSuggestions,
   toggleRoadMapMobile,
   addNewFeedback,
} = productRequestsSlice.actions;

export default productRequestsSlice.reducer;
