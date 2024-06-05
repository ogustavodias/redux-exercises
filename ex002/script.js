// Redux store
import store from "./redux/store.js";

// Functions of reducers
import { fetchToken } from "./redux/reducers/token.js";
import { fetchUser } from "./redux/reducers/user.js";

async function login(userData) {
  let token = store.getState().tokenReducer.data;

  if (!token) token = await store.dispatch(fetchToken(userData));

  const user = await store.dispatch(fetchUser(token));
}

login({ username: "dog", password: "dog" });
