import fetchNewsApi from "../API/fetchNewsApi";
import { put, call } from "redux-saga/effects";

export function* fetchNewsWorker() {
  const response = yield call(fetchNewsApi);
  yield put({type: 'GET_NEWS_DONE', response});
}
