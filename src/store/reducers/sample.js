import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  others: 'keep any data!'
};

const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push({ id: Date.now(), text: action.payload });
    },
    deleteData: (state, action) => {
      state.data = state.data.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addData, deleteData } = sampleSlice.actions;

export default sampleSlice.reducer;