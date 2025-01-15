import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { put, call } from "redux-saga/effects";

import { Api } from "~/api";
import { IProductType } from "~/types/dto/products";

import {
  searchProductsErrorAction,
  searchProductsSuccessAction,
} from "../slice";

export function* searchProductsSaga({
  payload: { title },
}: PayloadAction<{ title: string }>) {
  try {
    const response: AxiosResponse<Array<IProductType>> = yield call(
      Api.products.searchProducts,
      {
        title,
      }
    );

    yield put(searchProductsSuccessAction({ data: response.data }));
  } catch (error) {
    yield put(searchProductsErrorAction(error));

    if (error.status === 404) {
      yield put(searchProductsSuccessAction({ data: [] }));
    }
  }
}
