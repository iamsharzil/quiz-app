import QuizTimerActionTypes from './quiz.types';

export const quizTimerStart = () => ({
  type: QuizTimerActionTypes.QUIZ_TIMER_START,
});

export const quizTimerReset = () => ({
  type: QuizTimerActionTypes.QUIZ_TIMER_RESET,
});
