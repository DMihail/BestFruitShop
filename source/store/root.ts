/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, compose } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducers from '~/store/root-reducer';

import rootSaga from './root-sagas';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = combineReducers(rootReducers);
// @ts-ignore
const composeEnhancers = compose;

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(composeEnhancers(sagaMiddleware)),
});

sagaMiddleware.run(rootSaga);

export const persist = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
