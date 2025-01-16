import { AxiosResponse } from "axios";
import { all, call, put } from "redux-saga/effects";

import { Api } from "~/api";
import { PRODUCTS_SLUG } from "~/constants/product";
import {
  getProductsBySlugErrorAction,
  getProductsBySlugSuccessAction,
} from "~/store/product";
import { IProductType } from "~/types";

export function* getProductsBySlugSaga() {
  try {
    const responses: Array<AxiosResponse<Array<IProductType>>> = yield all(
      Object.keys(PRODUCTS_SLUG).map((item) =>
        call(Api.products.getProductsBySlug, {
          slug: item,
        })
      )
    );

    const data = responses.map((item) => {
      if (item?.data?.length) {
        const data = item.data;
        return {
          slug: data[0].slug,
          products: data,
        };
      }
      return {};
    });

    yield put(getProductsBySlugSuccessAction({ data }));
  } catch (error) {
    yield put(getProductsBySlugErrorAction(error));
  }
}
