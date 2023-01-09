import { Badge } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { img_300, unavailable } from '../../config';
import { Movie } from '../../types/movies';

type ContentTileProps = {
	movie: Movie;
};

function ContentTile({ movie }: ContentTileProps) {
	const { poster, title, date, mediaType, voteAverage } = movie;
	const navigate = useNavigate();

	const onNavigateToDetailedPage = () => {
		navigate(`/detailed/${movie.id}`);
	};
	return (
		<Tile onClick={onNavigateToDetailedPage}>
			<Badge badgeContent={voteAverage} color={voteAverage > 6 ? 'primary' : 'secondary'} />
			<Poster src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
			<Title>{title}</Title>
			<ShortInfo>
				<MediaType>{mediaType}</MediaType>
				{date?.split('-')[0]}
			</ShortInfo>
		</Tile>
	);
}

const MediaType = styled('p')`
	text-transform: uppercase;
`;

const ShortInfo = styled('div')`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Title = styled('h3')`
	text-align: center;
	font-weight: 400;

	margin: 10px;
`;
const Tile = styled('div')`
	display: flex;
	flex-direction: column;
	width: 200px;
	padding: 5px;
	margin: 5px 1px;
	background-color: #1976d2;
	border-radius: 10px;
	position: relative;
	&:hover {
		background-color: #1985a0;
		scale: 1.01;
	}
`;

const Poster = styled('img')`
	cursor: pointer;
`;
export default ContentTile;
