// Styles
import * as S from "./styles";

// Redux
import { useDispatch } from "react-redux";
import { clearToken, clearUser } from "../../redux/auth/auth";

const Header = (props) => {
  const dispatch = useDispatch();

  function logout() {
    dispatch(clearUser());
    dispatch(clearToken());
  }

  return (
    <S.Header>
      <h1>Mini Dogs</h1>
      <S.Logout data-logged={props.logged} onClick={logout} />
    </S.Header>
  );
};

export default Header;
