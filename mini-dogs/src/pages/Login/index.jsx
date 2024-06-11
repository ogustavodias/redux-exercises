// Styles
import * as S from "./styles";

// Components
import Input from "../../components/Input/index";
import Button from "../../components/Button";

const Login = () => {
  return (
    <S.Login>
      <Input label={"Usuário"} id={"username"} />
      <Input label={"Senha"} id={"password"} type={"password"} />
      <Button>Entrar</Button>
    </S.Login>
  );
};

export default Login;
