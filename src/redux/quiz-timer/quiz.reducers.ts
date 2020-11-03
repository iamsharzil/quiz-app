import { QUIZ_TIMER_INITIAL_STATE } from './quiz.state';
import QuizTimerActionTypes from './quiz.types';

const quizTimerReducer = (
  state = QUIZ_TIMER_INITIAL_STATE,
  action: QuizAction,
) => {
  switch (action.type) {
    case QuizTimerActionTypes.QUIZ_TIMER_START:
      return {
        ...state,
        timer: state.timer - 1,
      };

    case QuizTimerActionTypes.QUIZ_TIMER_RESET:
      return {
        ...state,
        timer: 15,
      };

    default:
      return state;
  }
};

export default quizTimerReducer;
