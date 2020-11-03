import { combineReducers } from 'redux';
import quizResultReducer from './quiz-result/quiz-result.reducers';
import quizTimerReducer from './quiz-timer/quiz.reducers';
import quizReducer from './quiz/quiz.reducers';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['cart'],
// };

const rootReducer = combineReducers({
  quiz: quizReducer,
  quiz_result: quizResultReducer,
  quiz_timer: quizTimerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

// export default persistReducer(persistConfig, rootReducer);
