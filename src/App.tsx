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
import DetailedPage from './pages/DetailedPage';

function App() {
	return (
		<AppWrapper>
			<BrowserRouter>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/sign' element={<SignUp />} />
					<Route path='/movies' element={<Movies />} />
					<Route path='/series' element={<Series />} />
					<Route path='/search' element={<Search />} />
					<Route path='/personal' element={<HomePage />} />
					<Route path='/detailed/:id' element={<DetailedPage />} />
					<Route path='/' element={<Trending />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</AppWrapper>
	);
}

const AppWrapper = styled('div')`
	scroll-behavior: smooth;
	font-family: 'Montserrat', sans-serif;

	box-sizing: border-box;
`;

export default App;
