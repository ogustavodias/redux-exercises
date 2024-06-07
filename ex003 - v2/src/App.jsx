import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken, fetchUser } from "./redux/slices/auth/auth.js";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const state = useSelector((state) => state.authReducers);
  const dispatch = useDispatch();

  async function login(e) {
    e.preventDefault();
    const callToken = await dispatch(fetchToken({ username, password }));
    const { token } = callToken.payload;
    if (token) await dispatch(fetchUser(token));
  }

  return (
    <>
      {state.user.data ? `Bem vindo ${state.user.data.username}` : null}
      <form style={{ display: "grid", gap: 10 }} onSubmit={login}>
        <label htmlFor="username">User</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Login</button>
      </form>
    </>
  );
}

export default App;
