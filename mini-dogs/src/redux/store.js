import { configureStore } from "@reduxjs/toolkit";

// Reducers
import auth from "./auth/auth";

const store = configureStore({
  reducer: {auth},
});

export default store;
