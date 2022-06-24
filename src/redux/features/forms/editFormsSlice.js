import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   title: '',
   category: 'feature',
   status: 'suggestion',
   description: '',
};

export const formsSlice = createSlice({
   name: 'forms',
   initialState,
   reducers: {
      updateEditForm: (state, action) => {
         state = { ...action.payload };
      },
   },
});

// Action creators are generated for each case reducer function
export const { updateEditForm } = formsSlice.actions;

export default formsSlice.reducer;
