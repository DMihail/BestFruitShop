import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { put, call } from "redux-saga/effects";

import { Api } from "~/api";
import { loginErrorAction, loginSuccessAction } from "~/store/auth/slice";
import { AuthAction } from "~/store/auth/types";
import { IUser } from "~/types";

export function* loginSaga({
  payload: { email, password, onSuccess },
}: PayloadAction<AuthAction>) {
  try {
    const response: AxiosResponse<Array<IUser>> = yield call(Api.auth.login, {
      email,
      password,
    });
    if (response.data.length) {
      yield put(loginSuccessAction());
      return onSuccess?.();
    }
    throw Error("User not found");
  } catch (error) {
    yield put(loginErrorAction(error));
  }
}
