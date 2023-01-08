import { Chip } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getGenresAction } from '../../redux/api/ApiActions';
import { Genre } from '../../types/movies';

type GenresProps = {
	type?: string;
	setSelectedGenres: (array: Array<Genre>) => void;
	selectedGenres: Array<Genre>;
	genres: Array<Genre>;
	setGenres: (array: Array<Genre>) => void;
	setPage: (value: number) => void;
};

function Genres({
	type = 'movie',
	setSelectedGenres,
	selectedGenres,
	genres,
	setGenres,
	setPage,
}: GenresProps) {
	const dispatch = useDispatch();

	const handleAdd = (genre: Genre) => {
		setSelectedGenres([...selectedGenres, genre]);
		setGenres(genres.filter((g) => g.id !== genre.id));
		setPage(1);
	};

	const handleRemove = (genre: Genre) => {
		setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id));
		setGenres([...genres, genre]);
		setPage(1);
	};

	useEffect(() => {
		dispatch(getGenresAction.request(type));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Wrapper>
			{selectedGenres.map((selectedGenre) => (
				<Chip
					color='secondary'
					label={selectedGenre.name}
					style={{ margin: 2 }}
					size='small'
					key={selectedGenre.id}
					clickable
					onDelete={() => handleRemove(selectedGenre)}
				/>
			))}
			{genres.map((genre) => (
				<Chip
					color='primary'
					label={genre.name}
					style={{ margin: 2 }}
					size='small'
					key={genre.id}
					clickable
					onClick={() => handleAdd(genre)}
				/>
			))}
		</Wrapper>
	);
}

const Wrapper = styled('div')`
	padding: 2rem 0;
`;

export default Genres;
