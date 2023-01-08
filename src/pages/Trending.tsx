import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContentTile from '../components/_templates/ContentTile';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingListAction } from '../redux/api/ApiActions';
import { getTrendingList } from '../redux/selectors/movies';
import { Movie } from '../types/movies';
import CustomPagination from '../components/_templates/CustomPagination';

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
		<Wrapper>
			<StyledCustomPagination setPage={setPage} />
			<Content>
				<Tiles>
					{list.length ? (
						list.map((movie) => <ContentTile key={movie.id} movie={movie} />)
					) : (
						<>There are no any results... </>
					)}
				</Tiles>
			</Content>
		</Wrapper>
	);
}

const Tiles = styled('div')`
	color:white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
`;

const StyledCustomPagination = styled(CustomPagination)`
	padding-top: 1rem;
	.MuiPagination-root {
		button {
			color: white;
		}
	}
`;

const Wrapper = styled('div')`
	background: #001e3c;
	min-height: 100vh;
`;
const Content = styled('div')`
	width: 70%;
	margin: 0 auto;
`;

export default Trending;
