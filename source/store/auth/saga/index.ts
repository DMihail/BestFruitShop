import { takeEvery } from "redux-saga/effects";

import { LOGIN, REGISTER } from "~/store/auth";

import { loginSaga } from "./loginSaga";
import { registerSaga } from "./registerSaga";

export function* watchAuthSaga() {
  yield takeEvery(LOGIN, loginSaga);
  yield takeEvery(REGISTER, registerSaga);
}
