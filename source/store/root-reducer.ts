import { combineReducers } from "redux";

import { CartStateType } from "./cart";
import cartReducer from "./cart/slice";
import { ProductStateType } from "./product";
import productReducer from "./product/slice";
import { UsersStateType } from "./user";
import usersReducer from "./user/slice";

export type StateType = {
  users: UsersStateType;
  products: ProductStateType;
  cart: CartStateType;
};

const rootReducers = combineReducers({
  users: usersReducer,
  products: productReducer,
  cart: cartReducer,
});

export default rootReducers;
