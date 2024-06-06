import { fetchError, fetchStarted, fetchSuccess } from "./slice";

const options = (token) => ({
  method: "GET",
  headers: {
    Authorization: "Bearer " + token,
  },
});

export const fetchUser = (token) => async (dispatch) => {
  dispatch(fetchStarted());

  try {
    const response = await fetch(
      "https://dogsapi.origamid.dev/json/api/user",
      options(token)
    );

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    // Else
    const json = await response.json();
    return dispatch(fetchSuccess(json));
  } catch (e) {
    return dispatch(fetchError(e.message));
  }
};
