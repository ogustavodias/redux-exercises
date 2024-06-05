// Redux
import * as Redux from "./redux.browser.mjs";

// Reducers
import tokenReducer from "./reducers/token.js";
import userReducer from "./reducers/user.js";

// Middlewares
import thunk from "./middlewares/thunk.js";
import localStorage from "./middlewares/localStorage.js";

const reducer = Redux.combineReducers({ tokenReducer, userReducer });

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose();

const enhancer = compose(Redux.applyMiddleware(thunk, localStorage));

const store = Redux.createStore(reducer, enhancer);

export default store;
