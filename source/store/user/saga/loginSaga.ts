import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { put, call } from "redux-saga/effects";

import { Api } from "~/api";
import { getUserErrorAction, getUserSuccessAction } from "~/store/user/slice";
import { AuthAction, UserType } from "~/store/user/types";

export function* loginSaga({
  payload: { email, password, onSuccess },
}: PayloadAction<AuthAction>) {
  try {
    const response: AxiosResponse<Array<UserType>> = yield call(
      Api.auth.login,
      {
        email,
        password,
      }
    );
    if (response.data.length) {
      yield put(getUserSuccessAction(response.data[0]));
      onSuccess?.();
    }
    throw Error("User not found");
  } catch (error) {
    yield put(getUserErrorAction(error));
  }
}
