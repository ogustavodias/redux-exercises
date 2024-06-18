import React from "react";

// Styles
import * as S from "./styles";

// Components
import Input from "../../components/Input/index";
import Button from "../../components/Button";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchToken, fetchUser } from "../../redux/reducers/auth";

const Login = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token.data);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = async (e) => {
    e.preventDefault();

    let callToken;

    callToken = await dispatch(fetchToken({ username, password }));
    const { token } = callToken.payload;
    if (token) await dispatch(fetchUser(token));
  };

  React.useEffect(() => {
    if (token) dispatch(fetchUser(token));
  }, [dispatch, token]);

  return (
    <S.Login onSubmit={login} className="anime">
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
