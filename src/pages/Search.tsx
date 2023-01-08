import { Tab, Tabs, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Content from '../components/_atoms/Content';
import Header from '../components/_atoms/Header';
import Heading from '../components/_atoms/PageHeading';
import PageWrapper from '../components/_atoms/PageWrapper';
import Tiles from '../components/_atoms/Tiles';
import ContentTile from '../components/_templates/ContentTile';
import CustomPagination from '../components/_templates/CustomPagination';
import { getSearchResultsAction } from '../redux/api/ApiActions';
import { getMovies } from '../redux/selectors/movies';
import { Movie } from '../types/movies';

function Search() {
	const dispatch = useDispatch();
	const moviesResult = useSelector(getMovies);
	const [type, setType] = useState(0);
	const [page, setPage] = useState(1);
	const [searchText, setSearchText] = useState('');
	const [content, setContent] = useState<Array<Movie>>([]);
	const [numOfPages, setNumOfPages] = useState();

	useEffect(() => {
		window.scroll(0, 0);
		dispatch(getSearchResultsAction.request({ searchText, type, page }));
	}, [dispatch, type, page, searchText]);

	useEffect(() => {
		setContent(moviesResult.results);
		setNumOfPages(moviesResult.totalPages);
	}, [moviesResult]);
	return (
		<PageWrapper>
			<Header>
				<Heading>Movies</Heading>
			</Header>
			<Content>
				<StyledTextField
					label='Search'
					fullWidth
					variant='filled'
					onChange={(e) => setSearchText(e.target.value)}
					placeholder={'Enter keywords...'}
				/>
				<StyledTabs
					sx={{ width: '100%' }}
					value={type}
					onChange={(e, newVal) => {
						setType(newVal);
						setPage(1);
					}}
					indicatorColor='primary'
					textColor='primary'>
					<Tab sx={{ width: '50%', color: 'white' }} label='Search Movies' />
					<Tab sx={{ width: '50%', color: 'white' }} label='Search TV Series' />
				</StyledTabs>
				<Tiles>
					{content.length ? (
						content.map((movie) => <ContentTile key={movie.id} movie={movie} />)
					) : (
						<>There are no any results... </>
					)}
				</Tiles>
				<CustomPagination setPage={setPage} numOfPages={numOfPages} />
			</Content>
		</PageWrapper>
	);
}

const StyledTextField = styled(TextField)`
	.css-e4w4as-MuiFormLabel-root-MuiInputLabel-root {
		color: rgba(0, 0, 0, 0.6);
	}
	.css-10zro85-MuiInputBase-root-MuiFilledInput-root {
		background: rgba(255, 255, 255, 0.2);
	}
`;

const StyledTabs = styled(Tabs)`
	.css-gulbw7-MuiButtonBase-root-MuiTab-root {
		width: 50%;
	}
`;

export default Search;
