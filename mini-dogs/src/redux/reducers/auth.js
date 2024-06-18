import { combineReducers } from "@reduxjs/toolkit";
import { createCustomSlice } from "../helper/createCustomSlice";

// Helper function
import getLocalStorage from "../../helper/getLocalStorage";

const token = createCustomSlice({
  name: "token",
  initialState: {
    data: getLocalStorage("token", null),
  },
  reducers: {
    fetchSuccess: {
      reducer(state, action) {
        state.loading = false;
        state.data = action.payload;
      },

      prepare(payload) {
        return {
          payload,
          meta: { localStorage: { key: "token", value: payload.token } },
        };
      },
    },

    clear: {
      reducer(state) {
        state.data = null;
      },

      prepare() {
        return { meta: { localStorage: { key: "token", value: "" } } };
      },
    },
  },
  fetchConfig: (user) => ({
    url: "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    },
  }),
});

const user = createCustomSlice({
  name: "user",
  fetchConfig: (token) => ({
    url: "https://dogsapi.origamid.dev/json/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  }),
});

const authReducers = combineReducers({
  token: token.reducer,
  user: user.reducer,
});

export const fetchToken = token.asyncFetch;
export const fetchUser = user.asyncFetch;
export const clearToken = token.logout;
export const clearUser = user.logout;
export default authReducers;
