import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { put, takeEvery, call } from "redux-saga/effects";

import { Api } from "~/api";
import { IProductType } from "~/types/dto/products";

import { getProductsErrorAction, getProductsSuccessAction } from "./slice";
import { GET_PRODUCTS } from "./types";

function* getProducts({
  payload: { title },
}: PayloadAction<{ title: string }>) {
  try {
    const response: AxiosResponse<Array<IProductType>> = yield call(
      Api.goods.getGoods,
      {
        title,
      }
    );
    yield put(getProductsSuccessAction({ data: response.data }));
  } catch (error) {
    yield put(getProductsErrorAction(error));
  }
}

export function* watchProductSaga() {
  yield takeEvery(GET_PRODUCTS, getProducts);
}
