import { all, fork } from "redux-saga/effects";

import { watchProductSaga } from "./product";
import { watchUserSaga } from "./user";

const rootSaga = function* () {
  yield all([fork(watchUserSaga)]);
  yield all([fork(watchProductSaga)]);
};

export default rootSaga;
