import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../slice/movieReducer";
import tvReducer from "../slice/tvReducer";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    tv: tvReducer,
  },
});
