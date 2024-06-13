import React from "react";

// Styles
import * as S from "./styles";

// Components
import Input from "../../components/Input/index";
import Button from "../../components/Button";

// Redux
import { useDispatch } from "react-redux";
import { fetchToken, fetchUser } from "../../redux/auth/auth";

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function login(e) {
    e.preventDefault();

    let callToken;
    let callUser;

    callToken = await dispatch(fetchToken({ username, password }));
    const { token } = callToken.payload;
    if (token) callUser = await dispatch(fetchUser(token));
    console.log(callUser);
  }

  return (
    <S.Login onSubmit={login}>
      <Input
        label={"Usuário"}
        id={"username"}
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <Input
        label={"Senha"}
        id={"password"}
        type={"password"}
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <Button>Entrar</Button>
    </S.Login>
  );
};

export default Login;
