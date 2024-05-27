// Types
const INCREMENT_TIME = "aluno/INCREMENT_TIME";
const DECREMENT_TIME = "aluno/DECREMENT_TIME";
const MODIFY_EMAIL = "aluno/MODIFY_EMAIL";

// Actions
export const incrementTime = () => ({ type: INCREMENT_TIME });
export const decrementTime = () => ({ type: DECREMENT_TIME });
export const modifyEmail = (payload) => ({ type: MODIFY_EMAIL, payload });

// Initial state
const aluno = {
  nome: "André Rafael",
  email: "andre@origamid.com",
  diasRestantes: 120,
};

// Reducer
const reducer = (state = aluno, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT_TIME:
      return { ...state, diasRestantes: state.diasRestantes + 1 };
    case DECREMENT_TIME:
      return { ...state, diasRestantes: state.diasRestantes - 1 };
    case MODIFY_EMAIL:
      return { ...state, email: payload };
    default:
      return state;
  }
};

export default reducer;
