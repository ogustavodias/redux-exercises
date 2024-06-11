import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <h1>Mini Dogs</h1>
      <S.Logout data-logged={false} />
    </S.Header>
  );
};

export default Header;
