import QuizActionTypes from './quiz-result.types';

export const getSelectedAnswer = (value: string) => ({
  type: QuizActionTypes.SELCTED_ANSWER,
  payload: value,
});

export const addSelectedAnswerToResult = (result: TQuizResult) => ({
  type: QuizActionTypes.QUIZ_SUMMARY,
  payload: result,
});

export const setCurrentQuestion = (value: number) => ({
  type: QuizActionTypes.CURRENT_QUESTION,
  payload: value,
});

export const setInitialState = () => ({
  type: QuizActionTypes.INITIAL_STATE,
});
