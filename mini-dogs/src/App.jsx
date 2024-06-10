import { useDispatch } from "react-redux";
import { fetchToken, fetchUser } from "./redux/auth/auth";

function App() {
  const dispatch = useDispatch();
  async function login() {
    let callToken;
    let callUser;

    callToken = await dispatch(fetchToken({username: 'dog', password: 'dog'}));
    const {token} = callToken.payload;
    if(token) callUser = await dispatch(fetchUser(token));
    console.log(callUser);
  }

  login();

  return null;
}

export default App;
