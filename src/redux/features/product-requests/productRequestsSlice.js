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

const getLocalStorage = () => {
   const allRequests = JSON.parse(localStorage.getItem('allRequests'));
   const requestFilters = JSON.parse(localStorage.getItem('requestFilters'));
   return { allRequests, requestFilters };
};

const initialState = {
   allRequests: getLocalStorage().allRequests || [...data.productRequests],
   suggestion: [],
   planned: [],
   in_progress: [],
   live: [],
   filters: getLocalStorage().requestFilters || {
      category: 'all',
      sort: 'Most Upvotes',
      roadmapMobile: 'planned',
   },
};

export const productRequestsSlice = createSlice({
   name: 'productRequests',
   initialState,
   reducers: {
      fetchStatuses: (state, action) => {
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
         let { id, status } = action.payload;

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
         state[replaceSpace(status)] = upvoteFunc(state[replaceSpace(status)]);
      },
      toggleRoadMapMobile: (state, action) => {
         state.filters.roadmapMobile = action.payload;
      },
      addNewFeedback: (state, action) => {
         const { title, category, description } = action.payload;
         let tempId = Math.max(
            ...state.allRequests.map((request) => request.id)
         );

         const newFeedback = {
            id: tempId + 1,
            title,
            category,
            upvotes: 0,
            upvoted: false,
            status: 'suggestion',
            description,
            comments: [],
         };

         state.allRequests = [...state.allRequests, newFeedback];
      },

      editCurrentFeedback: (state, action) => {
         const { id, title, status, category, description } = action.payload;

         const tempRequests = (requests) =>
            [...requests].map((request) => {
               if (Number(request.id) === Number(id)) {
                  return {
                     ...request,
                     id: Number(id),
                     title,
                     status,
                     category,
                     description,
                  };
               }

               return request;
            });

         state.allRequests = tempRequests(state.allRequests);
         for (let i = 0; i < statuses.length; i++) {
            state[replaceSpace(statuses[i])] = filterStatus(
               state.allRequests,
               statuses[i]
            );
         }
      },

      deleteCurrentFeedback: (state, action) => {
         const { id, status } = action.payload;
         let tempRequests = (requests) =>
            [...requests].filter((request) => request.id !== Number(id));

         state.allRequests = tempRequests(state.allRequests);
         state[replaceSpace(status)] = tempRequests(
            state[replaceSpace(status)]
         );
      },

      addNewComment: (state, action) => {
         console.log(action);
         const { user, feedbackId, commentId: id, content } = action.payload;
         const tempRequests = [...state.allRequests].map((request) => {
            if (Number(request.id) === Number(feedbackId)) {
               return {
                  ...request,
                  comments: [
                     ...request.comments,
                     {
                        id,
                        content,
                        user,
                     },
                  ],
               };
            }

            return request;
         });

         state.allRequests = tempRequests;
      },

      replyComment: (state, action) => {
         const {
            currentUser,
            feedbackId,
            status,
            commentId,
            reply,
            replyingTo,
         } = action.payload;

         const newReply = {
            content: reply,
            replyingTo,
            user: currentUser,
         };

         const tempRequests = (requests) =>
            [...requests].map((request) => {
               if (feedbackId === request.id) {
                  return {
                     ...request,
                     comments: [...request.comments].map((comment) => {
                        if (commentId === comment.id) {
                           if (comment.replies) {
                              return {
                                 ...comment,
                                 replies: [...comment.replies, newReply],
                              };
                           }

                           return {
                              ...comment,
                              replies: [newReply],
                           };
                        }

                        return comment;
                     }),
                  };
               }

               return request;
            });

         state.allRequests = tempRequests(state.allRequests);
         state[replaceSpace(status)] = tempRequests(
            state[replaceSpace(status)]
         );
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
   editCurrentFeedback,
   deleteCurrentFeedback,
   addNewComment,
   replyComment,
} = productRequestsSlice.actions;

export default productRequestsSlice.reducer;
