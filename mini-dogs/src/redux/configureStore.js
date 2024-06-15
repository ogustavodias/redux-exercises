import { configureStore } from "@reduxjs/toolkit";

// Reducers
import auth from "./auth/auth";

// Middlewares
import localStorage from "./middlewares/localStorage";

const store = configureStore({
  reducer: { auth },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorage),
});

export default store;
