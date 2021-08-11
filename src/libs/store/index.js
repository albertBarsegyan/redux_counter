import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter";
import textListSlice from './features/textListSlice';

export default configureStore({
  reducer: {
    counter,
    textList: textListSlice,
  },
});
