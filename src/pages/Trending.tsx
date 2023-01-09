import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContentTile from '../components/_templates/ContentTile';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingListAction } from '../redux/api/ApiActions';
import { getTrendingList } from '../redux/selectors/movies';
import { Movie } from '../types/movies';
import CustomPagination from '../components/_templates/CustomPagination';
import PageWrapper from '../components/_atoms/PageWrapper';
import Header from '../components/_atoms/Header';
import { Typography } from '@mui/material';
import Content from '../components/_atoms/Content';
import Tiles from '../components/_atoms/Tiles';
import Footer from '../components/_atoms/Footer';
import NavigationMenu from '../components/_templates/NavigationMenu';

function Trending() {
	const dispatch = useDispatch();
	const trendingList = useSelector(getTrendingList);
	const [list, setList] = useState<Array<Movie>>([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		dispatch(getTrendingListAction.request(page));
	}, [page, dispatch]);

	useEffect(() => {
		if (trendingList.length) {
			setList(trendingList);
		}
	}, [trendingList]);
	return (
		<PageWrapper>
			<Header>
				<Heading>Trending</Heading>
			</Header>
			<Content>
				<Tiles>
					{list.length ? (
						list.map((movie) => <ContentTile key={movie.id} movie={movie} />)
					) : (
						<>There are no any results... </>
					)}
				</Tiles>

				<StyledCustomPagination setPage={setPage} />
			</Content>
			<Footer>
				<NavigationMenu />
			</Footer>
		</PageWrapper>
	);
}

const Heading = styled(Typography)`
	font-size: 3rem;
	font-weight: 700;
`;

const StyledCustomPagination = styled(CustomPagination)`
	padding-top: 1rem;
	.MuiPagination-root {
		button {
			color: white;
		}
	}
`;

export default Trending;
