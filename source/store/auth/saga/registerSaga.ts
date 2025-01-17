import { PayloadAction } from "@reduxjs/toolkit";
import { put, call } from "redux-saga/effects";

import { Api } from "~/api";
import { registerErrorAction, registerSuccessAction } from "~/store/auth/slice";
import { AuthAction } from "~/store/auth/types";

export function* registerSaga({
  payload: { email, password, onSuccess },
}: PayloadAction<AuthAction>) {
  try {
    yield call(Api.auth.register, {
      email,
      password,
    });
    onSuccess?.();
    yield put(registerSuccessAction());
  } catch (error) {
    yield put(registerErrorAction(error));
  }
}
