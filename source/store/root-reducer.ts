import { combineReducers } from "redux";

import { ProductStateType } from "./product";
import productReducer from "./product/slice";
import { UsersStateType } from "./user";
import usersReducer from "./user/slice";

export type StateType = {
  users: UsersStateType;
  products: ProductStateType;
};

const rootReducers = combineReducers({
  users: usersReducer,
  products: productReducer,
});

export default rootReducers;
