import { Movie } from '../../types/movies';
import { getTrendingListAction } from '../api/ApiActions';
import { MovieResponse } from '../types/movies';

const initialState = {
	trendingList: [],
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
			console.log(transformedList);
			return {
				...state,
				trendingList: transformedList,
			};
		}

		default: {
			return state;
		}
	}
};

export default moviesReducer;
