import React from 'react';
import { Movie } from '../../types/movies';
import Tiles from '../_atoms/Tiles';
import { img_300, unavailable } from '../../config';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

type SimilarMoviesProps = {
	similarMovies: Movie[];
};
function SimilarMovies({ similarMovies }: SimilarMoviesProps) {
	const navigate = useNavigate();

	const onNavigateToDetailedPage = (id: number) => {
		navigate(`/detailed/${id}`);
	};
	return (
		<Wrapper>
			<Title>Similar</Title>

			<Tiles>
				{similarMovies.map((movie) => (
					<MovieCard onClick={() => onNavigateToDetailedPage(movie.id)}>
						<Poster
							src={movie.poster ? `${img_300}/${movie.poster}` : unavailable}
							alt={movie.title}
						/>
						<MovieName>{movie.title}</MovieName>
					</MovieCard>
				))}
			</Tiles>
		</Wrapper>
	);
}

const Title = styled('p')`
	font-size: 2rem;
	font-weight: 500;
	margin-top: 1rem;
	padding-left: 1rem;
`;

const Poster = styled('img')`
	width: 150px;
`;

const Wrapper = styled(`div`)`
	text-align: center;
`;
const MovieName = styled('p')`
	font-size: 14px;
`;
const MovieCard = styled('div')`
	padding: 0 0.5rem;
	display: flex;
	margin-bottom: 2.5rem;
	flex-direction: column;
	align-items: center;
	width: 150px;
	justify-content: space-between;
	cursor: pointer;
`;

export default SimilarMovies;
