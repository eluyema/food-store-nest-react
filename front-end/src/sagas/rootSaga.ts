import { all } from "redux-saga/effects";
import shopsSaga from "../scenes/Shop/sagas";

export default function* rootSaga() {
  yield all([shopsSaga()]);
}
