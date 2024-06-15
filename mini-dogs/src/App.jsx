// Styles
import { GlobalStyle } from "./globalStyle";
import * as S from "./style";

// Components
import Header from "./components/Header";
import Login from "./pages/Login";
import Photos from "./pages/Photos";

//Redux
import { useSelector } from "react-redux";
import { Loading } from "./components/Loading/styles";

function App() {
  const state = useSelector((state) => state);
  const logged = state.auth.user.data ? true : false;
  const loading = state.auth.token.loading || state.auth.user.loading;

  return (
    <>
      <GlobalStyle />
      <S.Container>
        <S.App>
          <Header logged={logged} />
          {loading ? <Loading /> : null}
          {logged ? <Photos /> : <Login />}
        </S.App>
      </S.Container>
    </>
  );
}

export default App;
