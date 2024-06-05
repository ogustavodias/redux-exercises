import { getLocalStorage } from "../utils/localStorage.js";

const TOKEN_FETCH_STARTED = "token/FETCH_STARTED";
const TOKEN_FETCH_SUCCESS = "token/FETCH_SUCCESS";
const TOKEN_FETCH_ERROR = "token/FETCH_ERROR";

const tokenFetchStarted = () => ({
  type: TOKEN_FETCH_STARTED,
});

const tokenFetchSuccess = (payload) => ({
  type: TOKEN_FETCH_SUCCESS,
  payload,
  localStorage: "token",
});

const tokenFetchError = (payload) => ({
  type: TOKEN_FETCH_ERROR,
  payload,
});

export function fetchToken(user) {
  return async (store) => {
    store.dispatch(tokenFetchStarted());

    try {
      const url = "https://dogsapi.origamid.dev/json/jwt-auth/v1/token";
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      };
      const response = await fetch(url, options);
      const { token } = await response.json();

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      // Else
      store.dispatch(tokenFetchSuccess(token));
    } catch (e) {
      store.dispatch(tokenFetchError(e.message));
    }
  };
}

const initialState = {
  loading: false,
  error: null,
  data: getLocalStorage("token", null),
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOKEN_FETCH_STARTED:
      return { ...state, loading: true };
    case TOKEN_FETCH_SUCCESS:
      return { loading: false, error: null, data: payload };
    case TOKEN_FETCH_ERROR:
      return { loading: false, error: payload, data: null };
    default:
      return state;
  }
};

export default reducer;
