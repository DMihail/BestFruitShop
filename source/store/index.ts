import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { compose } from "redux";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import rootReducers, { StateType } from "~/store/root-reducer";

import rootSaga from "./root-sagas";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persistConfig: PersistConfig<StateType> = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducers);
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
