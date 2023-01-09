export type MovieResponse = {
	id: number;
	poster_path: string;
	title?: string;
	name?: string;
	first_air_date: string;
	release_date?: string;
	media_type: string;
	vote_average: number;
};

export type VideoResponse = {
	id: string;
	key: string;
};
