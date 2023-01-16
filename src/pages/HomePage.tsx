import React, { useState } from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/_atoms/PageWrapper';
import { Button, Checkbox } from '@mui/material';
import Content from '../components/_atoms/Content';
import { useNavigate } from 'react-router-dom';
import Tiles from '../components/_atoms/Tiles';
import ContentTile from '../components/_templates/ContentTile';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function HomePage() {
	const [userName, setUserName] = useState('Katya');
	const [role, setRole] = useState('admin');
	const [favoritesMovies, setFavoritesMovies] = useState([
		{
			id: 315162,
			poster: '/1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg',
			title: 'Puss in Boots: The Last Wish',
			date: '2022-12-21',
			mediaType: 'movie',
			voteAverage: 8.632,
		},
	]);
	const navigate = useNavigate();

	const goToLoginPage = () => {
		navigate('/login');
	};
	const goToRegisterPage = () => {
		navigate('/register');
	};

	return (
		<PageWrapper>
			<Content>
				<Greeting>
					<Avatar
						alt='avatar-logo'
						src='https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png'
					/>
					<ShortInfo>
						<h1>Welcome, {userName}</h1>
						{role === 'guest' ? (
							<Authorize>
								<p>To save your favorite movies, please authorize : </p>
								<Button onClick={goToLoginPage}>Login</Button>
								or
								<Button onClick={goToRegisterPage}>Sign Up</Button>
							</Authorize>
						) : (
							<p> Date of registration: 10 January 2023</p>
						)}
					</ShortInfo>
				</Greeting>
				{role === 'guest' ? null : (
					<List>
						<h2>Favorites</h2>
						<Tiles>
							{favoritesMovies.length ? (
								favoritesMovies.map((movie) => (
									<Movie>
										<ContentTile key={movie.id} movie={movie} />
										<Button variant='contained' color='primary'>
											Delete
										</Button>
									</Movie>
								))
							) : (
								<>You didn't save any movie ... </>
							)}
						</Tiles>
					</List>
				)}
				{role === 'admin' ? (
					<List>
						<h2>List of Users</h2>
						<TableContainer component={Paper}>
							<Table>
								<TableHead>
									<TableRow>
										<StyledTableCell>
											<Checkbox />
										</StyledTableCell>
										<StyledTableCell>Email</StyledTableCell>
										<StyledTableCell>Date of registration</StyledTableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell>
											<Checkbox />
										</TableCell>
										<TableCell>oleg@gmail.com</TableCell>
										<TableCell>12/04/2022</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<Checkbox />
										</TableCell>
										<TableCell>oleg@gmail.com</TableCell>
										<TableCell>12/04/2022</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
					</List>
				) : null}
			</Content>
		</PageWrapper>
	);
}

const StyledTableCell = styled(TableCell)`
	background: rgb(0, 0, 0, 0.2);
`;

const Movie = styled('div')`
	display: flex;
	flex-direction: column;
`;

const Authorize = styled('div')`
	display: flex;
	align-items: center;
`;
const List = styled('div')`
	padding: 3rem 0;
	color: white;
`;

const ShortInfo = styled('div')`
	display: flex;
	flex-direction: column;
	color: white;
`;

const Greeting = styled('div')`
	display: flex;
	gap: 2rem;
`;

const Avatar = styled('img')`
	color: white;
	width: 250px;
`;

export default HomePage;
