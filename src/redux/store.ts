import { createStore, applyMiddleware, Store } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer, { RootState } from './root-reducer';

const middlewares = [thunk, logger];

export const store: Store<RootState> = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

export const persistor = persistStore(store);

export default { store, persistStore };
