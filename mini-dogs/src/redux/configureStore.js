import { configureStore } from "@reduxjs/toolkit";

// Reducers
import auth from "./reducers/auth.js";
import photos from "./reducers/photos.js";

// Middlewares
import localStorage from "./middlewares/localStorage";

const store = configureStore({
  reducer: { auth, photos },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorage),
});

export default store;
