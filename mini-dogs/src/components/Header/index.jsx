// Styles
import * as S from "./styles";

// Redux
import { useDispatch } from "react-redux";
import { clearToken, clearUser } from "../../redux/reducers/auth";
import { clearPhotos } from "../../redux/reducers/photos";

const Header = (props) => {
  const dispatch = useDispatch();

  function logout() {
    dispatch(clearUser());
    dispatch(clearToken());
    dispatch(clearPhotos());
  }

  return (
    <S.Header>
      <h1>Mini Dogs</h1>
      <S.Logout data-logged={props.logged} onClick={logout} />
    </S.Header>
  );
};

export default Header;
