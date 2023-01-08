import { call, put, takeLatest } from 'redux-saga/effects';
import {
	getGenresAction,
	getMoviesAction,
	getSearchResultsAction,
	getSeriesAction,
	getTrendingListAction,
} from '../api/ApiActions';
import {
	getTrendingListRequest,
	getGenresRequest,
	getMoviesRequest,
	getSeriesRequest,
	getSearchResultsRequest,
} from '../api';
import { IAction } from '../types';
import { MovieBody, SearchBody } from '../../types/movies';

function* getTrendingList(action: IAction<number>) {
	try {
		//@ts-ignore
		const res = yield call(getTrendingListRequest, action.payload);
		yield put(getTrendingListAction.success(res.data));
	} catch ({ message }: any) {
		yield put(getTrendingListAction.failed({ message: message }));
	}
}

function* getGenres(action: IAction<any>) {
	try {
		//@ts-ignore
		const res = yield call(getGenresRequest, action.payload);
		yield put(getGenresAction.success(res.data));
	} catch ({ message }: any) {
		yield put(getGenresAction.failed({ message: message }));
	}
}

function* getMovies(action: IAction<MovieBody>) {
	try {
		//@ts-ignore
		const res = yield call(getMoviesRequest, action.payload);
		yield put(getMoviesAction.success(res.data));
	} catch ({ message }: any) {
		yield put(getMoviesAction.failed({ message: message }));
	}
}

function* getSeries(action: IAction<MovieBody>) {
	try {
		//@ts-ignore
		const res = yield call(getSeriesRequest, action.payload);
		yield put(getSeriesAction.success(res.data));
	} catch ({ message }: any) {
		yield put(getSeriesAction.failed({ message: message }));
	}
}

function* getSearchResults(action: IAction<SearchBody>) {
	try {
		//@ts-ignore
		const res = yield call(getSearchResultsRequest, action.payload);
		yield put(getSearchResultsAction.success({ ...res.data, type: action.payload?.type }));
	} catch ({ message }: any) {
		yield put(getSearchResultsAction.failed({ message: message }));
	}
}

function* moviesWatcher() {
	yield takeLatest(getTrendingListAction.type.REQUEST, getTrendingList);
	yield takeLatest(getGenresAction.type.REQUEST, getGenres);
	yield takeLatest(getMoviesAction.type.REQUEST, getMovies);
	yield takeLatest(getSeriesAction.type.REQUEST, getSeries);
	yield takeLatest(getSearchResultsAction.type.REQUEST, getSearchResults);
}

export default moviesWatcher;
