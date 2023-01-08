import { call, put, takeLatest } from 'redux-saga/effects';
import { getGenresAction, getMoviesAction, getTrendingListAction } from '../api/ApiActions';
import { getTrendingListRequest, getGenresRequest, getMoviesRequest } from '../api';
import { IAction } from '../types';
import { MovieBody } from '../../types/movies';

function* getTrendingList(action: IAction<number>) {
	try {
		//@ts-ignore
		const res = yield call(getTrendingListRequest, action.payload);
		yield put(getTrendingListAction.success(res.data));
	} catch ({ message }) {
		yield put(getTrendingListAction.failed({ message: message }));
	}
}

function* getGenres(action: IAction<string>) {
	try {
		//@ts-ignore
		const res = yield call(getGenresRequest, action.payload);
		yield put(getGenresAction.success(res.data));
	} catch ({ message }) {
		yield put(getGenresAction.failed({ message: message }));
	}
}

function* getMovies(action: IAction<MovieBody>) {
	try {
		//@ts-ignore
		const res = yield call(getMoviesRequest, action.payload);
		yield put(getMoviesAction.success(res.data));
	} catch ({ message }) {
		yield put(getMoviesAction.failed({ message: message }));
	}
}

function* moviesWatcher() {
	yield takeLatest(getTrendingListAction.type.REQUEST, getTrendingList);
	yield takeLatest(getGenresAction.type.REQUEST, getGenres);
	yield takeLatest(getMoviesAction.type.REQUEST, getMovies);
}

export default moviesWatcher;
