import { createSlice } from "@reduxjs/toolkit";

export const createCustomSlice = (config) => {
  const slice = createSlice({
    name: config.name,
    initialState: {
      loading: false,
      error: null,
      data: null,
      ...config.initialState,
    },
    reducers: {
      fetchStarted: (state) => {
        state.loading = true;
        state.error = null;
        state.data = null;
      },

      fetchSuccess: (state, action) => {
        state.loading = false;
        state.data = action.payload;
      },

      fetchError: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      ...config.reducers,
    },
  });

  const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

  const fetchAuth = (payload) => async (dispatch) => {
    dispatch(fetchStarted());

    try {
      const { url, options } = config.fetchConfig(payload);
      const response = await fetch(url, options);

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      // Else
      const json = await response.json();
      return dispatch(fetchSuccess(json));
    } catch (e) {
      return dispatch(fetchError(e.message));
    }
  };

  return { ...slice, fetchAuth };
};
