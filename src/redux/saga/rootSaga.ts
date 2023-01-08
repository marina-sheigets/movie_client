import { all } from 'redux-saga/effects';
import moviesWatcher from './moviesWatcher';

const sagasArray = [moviesWatcher()];

function* rootSaga() {
	yield all(sagasArray);
}

export default rootSaga;
