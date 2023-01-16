import { Genre } from '../types/movies';
// ['action','drama'] => 'action,drama,' => movies
const useGenres = (selectedGenres: Array<Genre>) => {
	if (selectedGenres.length < 1) return '';

	const GenreIds = selectedGenres.map((item) => item.id.toString());
	return GenreIds.reduce((acc, curr) => acc + ',' + curr);
};

export default useGenres;
