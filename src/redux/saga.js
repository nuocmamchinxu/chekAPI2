import { takeLatest, put, call } from "redux-saga/effects";
import { fetchDataSuccess, fetchDataFail } from "./action";
import { loadData } from "./api";
export function* onLoadPostAsync() {
  try {
    const res = yield call(loadData);
    yield put(fetchDataSuccess(res.data));
  } catch (error) {
    yield put(fetchDataFail(error));
  }
}
export function* onLoadPost() {
  yield takeLatest("FETCH_DATA_REQUEST", onLoadPostAsync);
}
