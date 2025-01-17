/** @format */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

import authReducer from '~/store/auth/slice';

import { AUTH, AuthStateType } from './auth';
import { CartStateType } from './cart';
import cartReducer from './cart/slice';
import { ProductStateType } from './product';
import productReducer from './product/slice';

const persistConfig = {
  key: AUTH,
  storage: AsyncStorage,
  whitelist: ['isAuthorized'],
};

export type StateType = {
  auth: AuthStateType;
  products: ProductStateType;
  cart: CartStateType;
};

const rootReducers = {
  auth: persistReducer(persistConfig, authReducer),
  products: productReducer,
  cart: cartReducer,
};

export default rootReducers;
