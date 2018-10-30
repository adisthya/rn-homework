import fetchNamesApi from "../API/fetchNamesApi";
import { put, call } from "redux-saga/effects";

export function* fetchNamesWorker() {
  const response = yield call(fetchNamesApi);
  yield put({type: 'GET_NAMES_DONE', response});
}
