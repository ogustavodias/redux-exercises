// Redux
import * as Redux from "../redux.browser.mjs";

// Reducers
import alunoReducer from "../reducers/aluno.js";
import aulasReducer from "../reducers/aulas.js";
const reducer = Redux.combineReducers({ alunoReducer, aulasReducer });

// Store
const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Function render

const render = () => {
  const name = document.querySelector("#name span");
  const email = document.querySelector("#email span");
  const remainingTime = document.querySelector("#remaining_time span");
  const completeLessons = document.querySelector("#complete_lessons span");

  name.innerText = store.getState().alunoReducer.nome;
  email.innerText = store.getState().alunoReducer.email;
  remainingTime.innerText = store.getState().alunoReducer.diasRestantes;
  completeLessons.innerText = store.getState().aulasReducer.filter(aula => aula.completa).length;
};

render();

store.subscribe(render);

export default store;
