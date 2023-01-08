import { RootState } from '../store';

// @ts-ignore
export const getTrendingList = (state: RootState) => state.movies.trendingList;
