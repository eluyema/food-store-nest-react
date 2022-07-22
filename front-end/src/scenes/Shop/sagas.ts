import { all, call, put, takeEvery } from "redux-saga/effects";
import { Action } from "redux";
import { fetchProductsByShopId, fetchShopsNames } from "./actions";
import { ShopInfo } from "./common/types/types";
import { getShops } from "./services/get-shops";
import { getProducts } from "./services/get-products";
import { Product } from "../../common/types";

interface FetchProductByShopIdAction extends Action {
  payload: {
    currentShopId: string;
  };
}

function* fetchShopsNamesRequest() {
  try {
    const shops: ShopInfo[] = yield call(getShops);
    yield put(fetchShopsNames.success({ shops }));
  } catch (error) {
    yield put(fetchShopsNames.failure(error as string));
  }
}

function* fetchProductByShopIdRequest(action: FetchProductByShopIdAction) {
  try {
    const products: Product[] = yield call(
      getProducts,
      action.payload.currentShopId
    );
    yield put(fetchProductsByShopId.success({ products }));
  } catch (error) {
    yield put(fetchProductsByShopId.failure(error as string));
  }
}

function* watchFetchShopsNamesRequest() {
  yield takeEvery(fetchShopsNames.TRIGGER, fetchShopsNamesRequest);
}

function* watchFetchProductsRequest() {
  yield takeEvery(fetchProductsByShopId.TRIGGER, fetchProductByShopIdRequest);
}

export default function* shopsSaga() {
  yield all([watchFetchShopsNamesRequest(), watchFetchProductsRequest()]);
}
