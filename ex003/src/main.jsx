import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Redux Store
import store from "./redux/store.js";

// Redux Provider
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
