import { createSlice } from "@reduxjs/toolkit";

/**
 * Cria um slice com uma função assíncrona
 * @param {Object} config
 * @param {String} config.name
 * @param {Object} config.initialState
 * @param {Object} config.reducers
 * @param {Function} config.fetchConfig
 */
export function createCustomSlice(config) {
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
}
