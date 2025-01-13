import { takeEvery } from "redux-saga/effects";

import { LOGIN, REGISTER } from "~/store/user";

import { loginSaga } from "./loginSaga";
import { registerSaga } from "./registerSaga";

export function* watchUserSaga() {
  yield takeEvery(LOGIN, loginSaga);
  yield takeEvery(REGISTER, registerSaga);
}
