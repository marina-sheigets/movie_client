import axios from 'axios';
import { MovieBody } from '../../types/movies';

export const getTrendingListRequest = async (page: number) => {
	try {
		const response = await axios.get(
			`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
		);
		return { success: true, data: response.data };
	} catch (err: any) {
		return {
			success: false,
			data: err.response.data || 'Oops, something went wrong',
		};
	}
};

export const getGenresRequest = async (type: string) => {
	try {
		const response = await axios.get(
			`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
		);
		return { success: true, data: response.data };
	} catch (err: any) {
		return {
			success: false,
			data: err.response.data || 'Oops, something went wrong',
		};
	}
};

export const getMoviesRequest = async (payload: MovieBody) => {
	const { page, genreForUrl } = payload;
	try {
		const response = await axios.get(
			`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genreForUrl}`
		);
		return { success: true, data: response.data };
	} catch (err: any) {
		return {
			success: false,
			data: err.response.data || 'Oops, something went wrong',
		};
	}
};
