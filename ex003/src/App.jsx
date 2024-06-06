import { useState } from "react";
import { fetchToken } from "./redux/slices/token/fetch";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./redux/slices/user/fetch";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    const tokenData = await dispatch(fetchToken({ username, password }));
    const { token } = tokenData.payload;
    if (token) {
      console.log(token);
      await dispatch(fetchUser(token));
    }
  }

  return (
    <>
      {state.user.data ? `Bem vindo ${state.user.data.username}` : null}
      <form style={{ display: "grid", gap: 10 }} onSubmit={handleSubmit}>
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
