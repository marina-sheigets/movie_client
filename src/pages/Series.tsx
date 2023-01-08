import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Content from '../components/_atoms/Content';
import Header from '../components/_atoms/Header';
import Heading from '../components/_atoms/PageHeading';
import PageWrapper from '../components/_atoms/PageWrapper';
import Tiles from '../components/_atoms/Tiles';
import ContentTile from '../components/_templates/ContentTile';
import CustomPagination from '../components/_templates/CustomPagination';
import Genres from '../components/_templates/Genres';
import useGenres from '../hooks/useGenre';
import { getSeriesAction } from '../redux/api/ApiActions';
import { getGenresList, getMovies } from '../redux/selectors/movies';
import { Genre, Movie } from '../types/movies';

function Series() {
	const dispatch = useDispatch();
	const seriesList = useSelector(getMovies);
	const genresList = useSelector(getGenresList);
	const [page, setPage] = useState(1);
	const [series, setSeries] = useState<Array<Movie>>([]);
	const [numOfPages, setNumOfPages] = useState();
	const [selectedGenres, setSelectedGenres] = useState<Array<Genre>>([]);
	const [genres, setGenres] = useState<Array<Genre>>([]);
	const genreForUrl = useGenres(selectedGenres);

	useEffect(() => {
		dispatch(getSeriesAction.request({ page, genreForUrl }));
	}, [genreForUrl, dispatch, page, selectedGenres]);

	useEffect(() => {
		setSeries(seriesList.results);
		setNumOfPages(seriesList.totalPages);
	}, [seriesList]);

	useEffect(() => {
		setGenres(genresList);
	}, [genresList]);

	return (
		<PageWrapper>
			<Header>
				<Heading>Series</Heading>
			</Header>
			<Content>
				<Genres
					type='tv'
					setSelectedGenres={setSelectedGenres}
					selectedGenres={selectedGenres}
					genres={genres}
					setGenres={setGenres}
					setPage={setPage}
				/>
				{numOfPages ? (
					numOfPages > 1 ? (
						<CustomPagination setPage={setPage} numOfPages={numOfPages} />
					) : null
				) : null}
				<Tiles>
					{series.length ? (
						series.map((serial) => <ContentTile key={serial.id} movie={serial} />)
					) : (
						<>There are no any results... </>
					)}
				</Tiles>
			</Content>
		</PageWrapper>
	);
}

export default Series;
