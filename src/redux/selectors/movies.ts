import { RootState } from '../reducers/rootReducer';

// @ts-ignore
export const getTrendingList = (state: RootState) => state.movies.trendingList;
// @ts-ignore
export const getGenresList = (state: RootState) => state.movies.genres;
// @ts-ignore
export const getMovies = (state: RootState) => state.movies.moviesResult;
