const USER_FETCH_STARTED = "user/FETCH_STARTED";
const USER_FETCH_SUCCESS = "user/FETCH_SUCCESS";
const USER_FETCH_ERROR = "user/FETCH_ERROR";

export const userFetchStarted = () => ({
  type: USER_FETCH_STARTED,
});

export const userFetchSuccess = (payload) => ({
  type: USER_FETCH_SUCCESS,
  payload,
});

export const userFetchError = (payload) => ({
  type: USER_FETCH_ERROR,
  payload,
});

export function fetchUser(token) {
  return async (store) => {
    store.dispatch(userFetchStarted());

    try {
      const url = "https://dogsapi.origamid.dev/json/api/user";
      const options = {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      };
      const response = await fetch(url, options);
      const json = await response.json();

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      // Else
      store.dispatch(userFetchSuccess(json));
    } catch (e) {
      store.dispatch(userFetchError(e.message));
    }
  };
}

const initialState = { loading: false, error: null, data: null };

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_FETCH_STARTED:
      return { ...state, loading: true };
    case USER_FETCH_SUCCESS:
      return { loading: false, error: null, data: payload };
    case USER_FETCH_ERROR:
      return { loading: false, error: payload, data: null };
    default:
      return state;
  }
};

export default reducer;
