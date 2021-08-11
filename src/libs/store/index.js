import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter";

export default configureStore({
  reducer: {
    counter,
  },
});
