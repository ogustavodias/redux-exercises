// Styles
import { GlobalStyle } from "./globalStyle";
import * as S from "./style";

// Components
import Header from "./components/Header";
import Login from "./pages/Login";
import Photos from "./pages/Photos";

function App() {
  return (
    <>
      <GlobalStyle />
      <S.Container>
        <S.App>
          <Header />
          <Login />
          {/* <Photos /> */}
        </S.App>
      </S.Container>
    </>
  );
}

export default App;
