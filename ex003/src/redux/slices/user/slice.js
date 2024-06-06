import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  reducers: {
    fetchStarted: (state) => {
      state.loading = true;
    },

    fetchSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },

    fetchError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },
  },
});

export const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

export default slice.reducer;