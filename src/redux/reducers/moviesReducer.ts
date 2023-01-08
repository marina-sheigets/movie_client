import { Movie } from '../../types/movies';
import {
	getGenresAction,
	getMoviesAction,
	getSearchResultsAction,
	getSeriesAction,
	getTrendingListAction,
} from '../api/ApiActions';
import { MovieResponse } from '../types/movies';

const initialState = {
	trendingList: [],
	genres: [],
	moviesResult: { totalPages: null, results: [] },
};

const moviesReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case getTrendingListAction.type.SUCCESS: {
			const transformedList: Movie[] = [];
			action.payload.results.forEach((movie: MovieResponse) => {
				const movieItemObj = {
					id: movie.id,
					poster: movie.poster_path,
					title: movie.title || movie.name,
					date: movie.first_air_date || movie.release_date,
					mediaType: movie.media_type,
					voteAverage: movie.vote_average,
				};
				transformedList.push(movieItemObj);
			});
			return {
				...state,
				trendingList: transformedList,
			};
		}

		case getGenresAction.type.SUCCESS: {
			return {
				...state,
				genres: action.payload.genres,
			};
		}

		case getMoviesAction.type.SUCCESS: {
			const transformedList: Movie[] = [];
			action.payload.results.forEach((movie: MovieResponse) => {
				const movieItemObj = {
					id: movie.id,
					poster: movie.poster_path,
					title: movie.title || movie.name,
					date: movie.first_air_date || movie.release_date,
					mediaType: 'movie',
					voteAverage: movie.vote_average,
				};
				transformedList.push(movieItemObj);
			});
			return {
				...state,
				moviesResult: { totalPages: action.payload.total_pages, results: transformedList },
			};
		}

		case getSeriesAction.type.SUCCESS: {
			const transformedList: Movie[] = [];
			action.payload.results.forEach((movie: MovieResponse) => {
				const movieItemObj = {
					id: movie.id,
					poster: movie.poster_path,
					title: movie.title || movie.name,
					date: movie.first_air_date || movie.release_date,
					mediaType: 'tv',
					voteAverage: movie.vote_average,
				};
				transformedList.push(movieItemObj);
			});
			return {
				...state,
				moviesResult: { totalPages: action.payload.total_pages, results: transformedList },
			};
		}
		case getSearchResultsAction.type.SUCCESS: {
			const transformedList: Movie[] = [];
			action.payload.results.forEach((movie: MovieResponse) => {
				const movieItemObj = {
					id: movie.id,
					poster: movie.poster_path,
					title: movie.title || movie.name,
					date: movie.first_air_date || movie.release_date,
					mediaType: action.payload.type === 0 ? 'movie' : 'tv',
					voteAverage: movie.vote_average,
				};
				transformedList.push(movieItemObj);
			});
			return {
				...state,
				moviesResult: { totalPages: action.payload.total_pages, results: transformedList },
			};
		}
		default: {
			return state;
		}
	}
};

export default moviesReducer;
