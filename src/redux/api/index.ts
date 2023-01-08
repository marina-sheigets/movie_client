import axios from 'axios';

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
