import { call, put, takeLatest } from 'redux-saga/effects';
import {
	getGenresAction,
	getMovieInfoAction,
	getMoviesAction,
	getSearchResultsAction,
	getSeriesAction,
	getSimilarMoviesAction,
	getTrendingListAction,
	getVideosAction,
} from '../api/ApiActions';
import {
	getTrendingListRequest,
	getGenresRequest,
	getMoviesRequest,
	getSeriesRequest,
	getSearchResultsRequest,
	getMovieInfoRequest,
	getVideosRequest,
	getSimilarMoviesRequest,
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

function* getMovieInfo(action: IAction<number>) {
	try {
		//@ts-ignore
		const res = yield call(getMovieInfoRequest, action.payload);
		yield put(getMovieInfoAction.success({ ...res.data }));
	} catch ({ message }: any) {
		yield put(getMovieInfoAction.failed({ message: message }));
	}
}

function* getVideos(action: IAction<number>) {
	try {
		//@ts-ignore
		const res = yield call(getVideosRequest, action.payload);
		yield put(getVideosAction.success({ ...res.data }));
	} catch ({ message }: any) {
		yield put(getVideosAction.failed({ message: message }));
	}
}

function* getSimilarMovies(action: IAction<number>) {
	try {
		//@ts-ignore
		const res = yield call(getSimilarMoviesRequest, action.payload);
		yield put(getSimilarMoviesAction.success({ ...res.data }));
	} catch ({ message }: any) {
		yield put(getSimilarMoviesAction.failed({ message: message }));
	}
}
function* moviesWatcher() {
	yield takeLatest(getTrendingListAction.type.REQUEST, getTrendingList);
	yield takeLatest(getGenresAction.type.REQUEST, getGenres);
	yield takeLatest(getMoviesAction.type.REQUEST, getMovies);
	yield takeLatest(getSeriesAction.type.REQUEST, getSeries);
	yield takeLatest(getSearchResultsAction.type.REQUEST, getSearchResults);
	yield takeLatest(getMovieInfoAction.type.REQUEST, getMovieInfo);
	yield takeLatest(getVideosAction.type.REQUEST, getVideos);
	yield takeLatest(getSimilarMoviesAction.type.REQUEST, getSimilarMovies);
}

export default moviesWatcher;
