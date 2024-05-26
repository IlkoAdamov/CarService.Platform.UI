import { configureStore } from "@reduxjs/toolkit";
import { redirectSlice } from "./slices/redirect-slice";
import { carSlice } from "./slices/car-slice";

const store = configureStore({
  reducer: {
    PAGE: redirectSlice.reducer,
    CAR: carSlice.reducer,
  },
});

export { store };
