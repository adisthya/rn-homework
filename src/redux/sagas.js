import { takeLatest } from 'redux-saga/effects';
import { fetchNamesWorker } from '../workers/fetchNamesWorker';
import { fetchNewsWorker } from '../workers/fetchNewsWorker';

export default function* rootSaga() {
  yield [
    takeLatest('GET_NAMES', fetchNamesWorker),
    takeLatest('GET_NEWS', fetchNewsWorker)
  ];
}
