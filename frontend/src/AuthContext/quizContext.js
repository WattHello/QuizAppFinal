import { useContext, createContext, useReducer } from "react";
import quizReducer from "../reducer/quizReducer";

const initialState = {
  index: 0,
  score: 0,
  quizCategory: "",
  selectedOption: "",
  isLoading: false,
  error: null,
  questions: [],
};

const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => {
  const [state, quizDispatch] = useReducer(quizReducer, initialState);

  const value = {
    ...state,
    quizDispatch,
    nextQuestion: () => quizDispatch({ type: 'INDEX' }),
    selectOption: (id, isCorrect) => quizDispatch({
      type: 'SELECT_OPTION',
      payload: { id, isCorrect }
    }),
    resetQuiz: () => quizDispatch({ type: 'INITIAL' }),
    setCategory: (category) => quizDispatch({
      type: 'CATEGORY',
      payload: category
    }),
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};