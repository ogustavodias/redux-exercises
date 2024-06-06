import { configureStore } from "@reduxjs/toolkit";

// Reducers of slices
import tokenReducer from "./slices/token/slice.js";
import userReducer from "./slices/user/slice.js";

const store = configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
  },
});

export default store;
