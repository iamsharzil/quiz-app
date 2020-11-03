import QuizActionTypes from './quiz.types';

export const fetchQuizStart = () => ({
  type: QuizActionTypes.FETCH_QUIZ_START,
});

export const fetchQuizSuccess = (quiz: IQuiz) => ({
  type: QuizActionTypes.FETCH_QUIZ_SUCCESS,
  payload: quiz,
});

export const fetchQuizFailure = (errorMessage: string) => ({
  type: QuizActionTypes.FETCH_QUIZ_FAILURE,
  payload: errorMessage,
});
