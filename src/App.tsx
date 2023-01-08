import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Movies from './pages/Movies';
import Trending from './pages/Trending';
import Search from './pages/Search';
import Series from './pages/Series';
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import NavigationMenu from './components/_templates/NavigationMenu';

function App() {
	return (
		<AppWrapper>
			<Header>
				<Heading>Trending</Heading>
			</Header>
			<BrowserRouter>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/sign' element={<SignUp />} />
					<Route path='/movies' element={<Movies />} />
					<Route path='/series' element={<Series />} />
					<Route path='/search' element={<Search />} />
					<Route path='/personal' element={<HomePage />} />
					<Route path='/' element={<Trending />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
				<Footer>
					<NavigationMenu />
				</Footer>
			</BrowserRouter>
		</AppWrapper>
	);
}
const Heading = styled(Typography)`
	font-size: 3rem;
	font-weight: 700;
`;

const AppWrapper = styled('div')`
	scroll-behavior: smooth;
	font-family: 'Montserrat', sans-serif;

	box-sizing: border-box;
`;

const Header = styled('header')`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 4rem;
	background: #071a2f;
	color: white;
	-webkit-box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.5);
	-moz-box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.5);
	box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.5);
`;

const Footer = styled('footer')`
	z-index: 5;
	position: fixed;
	height: 3rem;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 0.5rem 0;

	background: #071a2f;
	-webkit-box-shadow: 0px -7px 5px 0px rgba(0, 0, 0, 0.5);
	-moz-box-shadow: 0px -7px 5px 0px rgba(0, 0, 0, 0.5);
	box-shadow: 0px -7px 5px 0px rgba(0, 0, 0, 0.5);
`;

export default App;
