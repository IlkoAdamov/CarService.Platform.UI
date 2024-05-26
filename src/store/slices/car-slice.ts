import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "carSlice",
  initialState: {
    collection: [],
  },
  reducers: {
    carAction: (currentSlice, actions) => {
      currentSlice.collection = actions.payload;
    },
  },
});

export { carSlice };

export const { carAction } = carSlice.actions;
