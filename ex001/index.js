import store from "./redux/store/store.js";
import { completeLesson, completeAll, reset } from "./redux/reducers/aulas.js";
import {
  incrementTime,
  decrementTime,
  modifyEmail,
} from "./redux/reducers/aluno.js";

store.dispatch(completeAll());
store.dispatch(reset());
store.dispatch(completeLesson(4));
store.dispatch(incrementTime());
store.dispatch(decrementTime());
store.dispatch(modifyEmail("gustavoalvesdiaz08@gmail.com.br"));
