import { combineReducers } from "@reduxjs/toolkit";
import { createCustomSlice } from "../../helper/createCustomSlice";

const token = createCustomSlice({
  name: "token",
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

export const fetchToken = token.fetchAuth;
export const fetchUser = user.fetchAuth;
export default authReducers;
