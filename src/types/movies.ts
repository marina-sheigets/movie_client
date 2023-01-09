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

export type SearchBody = {
	searchText: string;
	page: number;
	type: string;
};

export type DetailedMovie = {
	id: number;
	poster: string;
	title: string;
	date?: string;
	voteAverage: number;
	overview: string;
	genres?: Array<{ id: number; name: string }>;
	tagline?: string;
	runtime: number;
	productionCountries?: Array<{ [key: string]: string; name: string }>;
};

export type Video = {
	id: string;
	key: string;
};
