import { combineReducers } from "redux";

import authReducer from "~/store/auth/slice";

import { AuthStateType } from "./auth";
import { CartStateType } from "./cart";
import cartReducer from "./cart/slice";
import { ProductStateType } from "./product";
import productReducer from "./product/slice";

export type StateType = {
  auth: AuthStateType;
  products: ProductStateType;
  cart: CartStateType;
};

const rootReducers = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
});

export default rootReducers;
