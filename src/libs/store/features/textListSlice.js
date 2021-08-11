import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const textListSlice = createSlice({
  name: 'textList',
  initialState,
  reducers: {
    addText: (state, action) => {
      if (action.payload.length > 0) {
        state.list.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addText } = textListSlice.actions;

export default textListSlice.reducer;
