import { addResultToList } from './quiz-result.util';
import { QUIZ_RESULT_INITIAL_STATE } from './quiz-result.state';
import QuizActionTypes from './quiz-result.types';

const quizResultReducer = (
  state = QUIZ_RESULT_INITIAL_STATE,
  action: QuizResultAction,
) => {
  switch (action.type) {
    case QuizActionTypes.SELCTED_ANSWER:
      return {
        ...state,
        selectedAnswer: action.payload,
      };

    case QuizActionTypes.QUIZ_SUMMARY:
      return {
        ...state,
        result: addResultToList(state.result, action.payload),
      };

    case QuizActionTypes.CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload,
      };

    case QuizActionTypes.INITIAL_STATE:
      return {
        result: [],
        selectedAnswer: null,
        currentQuestion: 0,
      };

    default:
      return state;
  }
};

export default quizResultReducer;
