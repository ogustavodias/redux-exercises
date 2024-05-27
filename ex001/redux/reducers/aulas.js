// Types
const COMPLETE_LESSON = "lessons/COMPLETE_LESSON";
const COMPLETE_ALL = "lessons/COMPLETE_ALL";
const RESET = "lessons/RESET";

// Actions
export const completeLesson = (payload) => ({ type: COMPLETE_LESSON, payload });
export const completeAll = () => ({ type: COMPLETE_ALL });
export const reset = () => ({ type: RESET });

// Initial state
const aulas = [
  {
    id: 1,
    nome: "Design",
    completa: true,
  },
  {
    id: 2,
    nome: "HTML",
    completa: false,
  },
  {
    id: 3,
    nome: "CSS",
    completa: false,
  },
  {
    id: 4,
    nome: "JavaScript",
    completa: false,
  },
];

// Reducer
const reducer = (state = aulas, action) => {
  const { type, payload } = action;
  switch (type) {
    case COMPLETE_LESSON:
      return state.map(item => item.id === payload ? {...item, completa: true} : item);
    case COMPLETE_ALL:
      return state.map(item => ({...item, completa: true}));
    case RESET:
      return state.map(item => ({...item, completa: false}));
    default:
      return state;
  }
};

export default reducer;
