import { QUIZ_INITIAL_STATE } from './quiz.state';
import QuizActionTypes from './quiz.types';

const quizReducer = (state = QUIZ_INITIAL_STATE, action: QuizAction) => {
  switch (action.type) {
    case QuizActionTypes.FETCH_QUIZ_START:
      return {
        ...state,
        isFetching: true,
      };

    case QuizActionTypes.FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        isFetching: false,
        quiz: action.payload,
      };

    case QuizActionTypes.FETCH_QUIZ_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default quizReducer;
