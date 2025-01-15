import { takeEvery } from "redux-saga/effects";

import { GET_PRODUCTS_BY_SLUG, SEARCH_PRODUCTS } from "~/store/product";

import { getProductsBySlugSaga } from "./getProductsBySlugSaga";
import { searchProductsSaga } from "./searchProductsSaga";

export function* watchProductSaga() {
  yield takeEvery(SEARCH_PRODUCTS, searchProductsSaga);
  yield takeEvery(GET_PRODUCTS_BY_SLUG, getProductsBySlugSaga);
}
