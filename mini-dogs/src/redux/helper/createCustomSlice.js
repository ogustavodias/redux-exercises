import { createSlice } from "@reduxjs/toolkit";

/**
 * Cria um slice com uma função assíncrona
 * @param {Object} config
 * @param {String} config.name
 * @param {Object} config.initialState
 * @param {Object} config.reducers
 * @param {Function} config.fetchConfig
 */
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

      clear: (state) => {
        state.data = null;
      },
      ...config.reducers,
    },
  });

  const { fetchStarted, fetchSuccess, fetchError, clear } = slice.actions;

  const asyncFetch = (payload) => async (dispatch) => {
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

  const logout = () => (dispatch) => {
    dispatch(clear());
  };

  return { ...slice, asyncFetch, logout };
};
