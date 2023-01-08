import { call, put, takeLatest } from 'redux-saga/effects';
import { getTrendingListAction } from '../api/ApiActions';
import { getTrendingListRequest } from '../api';
import { IAction } from '../types';

function* getTrendingList(action: IAction<number>) {
	try {
		//@ts-ignore
		const res = yield call(getTrendingListRequest, action.payload);
		yield put(getTrendingListAction.success(res.data));
	} catch ({ message }) {
		yield put(getTrendingListAction.failed({ message: message }));
	}
}

function* moviesWatcher() {
	yield takeLatest(getTrendingListAction.type.REQUEST, getTrendingList);
}

export default moviesWatcher;
