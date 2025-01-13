import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { put, call } from "redux-saga/effects";

import { Api } from "~/api";
import { getUserErrorAction, getUserSuccessAction } from "~/store/user/slice";
import { AuthAction, UserType } from "~/store/user/types";

export function* registerSaga({
  payload: { email, password, onSuccess },
}: PayloadAction<AuthAction>) {
  try {
    const response: AxiosResponse<UserType> = yield call(Api.auth.register, {
      email,
      password,
    });
    onSuccess?.();
    yield put(getUserSuccessAction(response.data));
  } catch (error) {
    yield put(getUserErrorAction(error));
  }
}
