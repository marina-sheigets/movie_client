export type Movie = {
	id: number;
	poster: string;
	title?: string;
	date?: string;
	mediaType: string;
	voteAverage: number;
};

export type Genre = {
	id: number;
	name: string;
};

export type MovieBody = {
	page: number;
	genreForUrl: string;
};
