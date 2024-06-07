import { configureStore } from "@reduxjs/toolkit";

// Reducers of slices
import authReducers from "./slices/auth/auth.js";

const store = configureStore({
  reducer: {
    authReducers,
  },
});

export default store;
