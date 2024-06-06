import { fetchError, fetchStarted, fetchSuccess } from "./slice";

const options = (user) => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(user),
});

export const fetchToken = (user) => async (dispatch) => {
  dispatch(fetchStarted());

  try {
    const response = await fetch(
      "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
      options(user)
    );

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    // Else
    const json = await response.json();
    return dispatch(fetchSuccess(json));
  } catch (e) {
    return dispatch(fetchError(e.message));
  }
};
