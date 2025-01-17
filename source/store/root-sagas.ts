import { all, fork } from "redux-saga/effects";

import { watchAuthSaga } from "./auth";
import { watchProductSaga } from "./product";

const rootSaga = function* () {
  yield all([fork(watchAuthSaga)]);
  yield all([fork(watchProductSaga)]);
};

export default rootSaga;
