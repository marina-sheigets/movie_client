import { createActions } from '../../utils';

export const getTrendingListAction = createActions('GET_TRENDING_LIST');
export const getGenresAction = createActions('GET_GENRES');
export const getMoviesAction = createActions('GET_MOVIES');
export const getSeriesAction = createActions('GET_SERIES');
export const getSearchResultsAction = createActions('GET_SEARCH_RESULTS');

export const getMovieInfoAction = createActions('GET_MOVIE_INFO');
export const getVideosAction = createActions('GET_VIDEOS');
export const getSimilarMoviesAction = createActions('GET_SIMILAR_MOVIES');
