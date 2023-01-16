import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Content from '../components/_atoms/Content';
import Footer from '../components/_atoms/Footer';
import PageWrapper from '../components/_atoms/PageWrapper';
import Tiles from '../components/_atoms/Tiles';
import ContentTile from '../components/_templates/ContentTile';
import CustomPagination from '../components/_templates/CustomPagination';
import Genres from '../components/_templates/Genres';
import NavigationMenu from '../components/_templates/NavigationMenu';
import useGenres from '../hooks/useGenre';
import { getMoviesAction } from '../redux/api/ApiActions';
import { getGenresList, getMovies } from '../redux/selectors/movies';
import { Genre, Movie } from '../types/movies';

function Movies() {
	const dispatch = useDispatch();
	const moviesList = useSelector(getMovies);
	const genresList = useSelector(getGenresList);
	const [page, setPage] = useState(1);
	const [movies, setMovies] = useState<Array<Movie>>(moviesList);
	const [numOfPages, setNumOfPages] = useState();
	const [selectedGenres, setSelectedGenres] = useState<Array<Genre>>([]);
	const [genres, setGenres] = useState<Array<Genre>>([]);
	const genreForUrl = useGenres(selectedGenres);

	useEffect(() => {
		setGenres(genresList);
	}, [genresList]);

	useEffect(() => {
		dispatch(getMoviesAction.request({ page, genreForUrl }));
	}, [page, selectedGenres, genreForUrl, dispatch]);

	useEffect(() => {
		setMovies(moviesList.results);
		setNumOfPages(moviesList.totalPages);
	}, [moviesList]);
	return (
		<PageWrapper>
			<Content>
				<Genres
					setSelectedGenres={setSelectedGenres}
					selectedGenres={selectedGenres}
					genres={genres}
					setGenres={setGenres}
					setPage={setPage}
				/>
				<Tiles>
					{movies.length ? (
						movies.map((movie) => <ContentTile key={movie.id} movie={movie} />)
					) : (
						<>There are no any results... </>
					)}
				</Tiles>
				<CustomPagination numOfPages={numOfPages} setPage={setPage} />
			</Content>
			<Footer>
				<NavigationMenu />
			</Footer>
		</PageWrapper>
	);
}

export default Movies;
