import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  step: 1,
  min: 0,
  max: 100,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value >= state.max) {
        state.value = state.max;
        return;
      }
      state.value += state.step;
    },
    decrement: (state) => {
      if (state.value <= state.min) {
        state.value = state.min;
        return;
      }
      state.value -= state.step;
    },

    setStep: (state, action) => {
      if (action.payload < state.max - state.min) {
        state.step = action.payload;
        return;
      }
    },
    setMax: (state, action) => {
      if (state.max > state.min) {
        state.max = action.payload;
        return;
      }
    },
    setMin: (state, action) => {
      if (action.payload < state.max) {
        state.min = action.payload;
        state.value = state.min;
        return;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  setStep,
  setMax,
  setMin,
} = counterSlice.actions;

export default counterSlice.reducer;
