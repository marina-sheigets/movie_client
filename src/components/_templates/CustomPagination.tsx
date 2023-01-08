import React from 'react';
import { Pagination } from '@mui/material';
import styled from 'styled-components';

type CustomPaginationProps = {
	setPage: (page: number) => void;
	numOfPages?: number;
};

const CustomPagination = ({ setPage, numOfPages = 10 }: CustomPaginationProps) => {
	const handlePageChange = (page: string) => {
		setPage(+page);
		window.scroll(0, 0);
	};

	return (
		<Wrapper>
			<Pagination
				hidePrevButton
				hideNextButton
				count={numOfPages}
				onChange={(event: any) => handlePageChange(event.target.textContent)}
				color='primary'
			/>
		</Wrapper>
	);
};

const Wrapper = styled('div')`
	.css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root {
		color: white;
	}
	.css-1v2lvtn-MuiPaginationItem-root {
		color: white;
	}
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 1rem 0;
`;

export default CustomPagination;
