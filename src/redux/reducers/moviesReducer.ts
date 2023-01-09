import { Movie, DetailedMovie, Video } from '../../types/movies';
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
import { MovieResponse, VideoResponse } from '../types/movies';

const initialState = {
	trendingList: [],
	genres: [],
	moviesResult: { totalPages: null, results: [] },
	selectedMovie: {},
	videos: [],
	similarMovies: [],
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
		case getMovieInfoAction.type.FAILED: {
			return {
				...state,
				selectedMovie: {},
			};
		}

		case getMovieInfoAction.type.SUCCESS: {
			const {
				id,
				overview,
				poster_path,
				production_countries,
				release_date,
				runtime,
				tagline,
				title,
				name,
				vote_average,
				first_air_date,
				genres,
			} = action.payload;
			const selectedMovie: DetailedMovie = {
				id,
				overview,
				poster: poster_path,
				title: title || name,
				date: first_air_date || release_date,
				voteAverage: vote_average,
				genres,
				tagline,
				runtime,
				productionCountries: production_countries || [],
			};
			return {
				...state,
				selectedMovie: selectedMovie,
			};
		}
		case getVideosAction.type.SUCCESS: {
			let videos: Video[] = [];
			if (action.payload.results.length) {
				action.payload.results.forEach((video: VideoResponse) => {
					let videoObj = {
						id: video.id,
						key: video.key,
					};
					videos.push(videoObj);
				});
			}
			return {
				...state,
				videos,
			};
		}
		case getSimilarMoviesAction.type.SUCCESS: {
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
				similarMovies: transformedList,
			};
		}
		default: {
			return state;
		}
	}
};

export default moviesReducer;
