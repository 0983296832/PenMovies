import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../api/tmdbApi";
export const fetchMovies = createAsyncThunk("get/getMovies", async (type) => {
  const params = {};
  const response = await tmdbApi.getMoviesList(type, { params });
  return response.results;
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviePopular: [],
    movieTopRated: [],
    status: null,
    error: "",
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.status = "loading";
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.status = "success";
    },
    [fetchMovies.rejected]: (state) => {
      state.status = "failed";
      state.movies = [];
      state.error = "Error";
    },
  },
});
export default moviesSlice.reducer;
