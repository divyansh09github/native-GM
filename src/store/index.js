
import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from "./reducers/sample";

const store = configureStore({
  reducer: {
    sample: sampleReducer,
  },
});

export default store;