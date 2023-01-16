import React from 'react';
import styled from 'styled-components';
import { Avatar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-color.png';
type LocationType = { [key: string]: string };
const Location: LocationType = {
	'/': 'Trending',
	'/movies': 'Movies',
	'/series': 'Series',
	'/search': 'Search',
	'/detailed': '',
};

function Header() {
	const navigate = useNavigate();
	const pageName = Location[window.location.pathname];

	const goToHomePage = () => {
		navigate('/personal');
	};
	const goToLoginPage = () => {
		navigate('/login');
	};
	const goToRegisterPage = () => {
		navigate('/register');
	};
	const goToTrending = () => {
		navigate('/');
	};
	return (
		<HeaderDiv>
			<Wrapper>
				<Logo onClick={goToTrending} src={logo}></Logo>
				<h1>{pageName}</h1>
				<Navigation>
					<UserAvatar onClick={goToHomePage} />
					<Button onClick={goToLoginPage}>Login</Button>
					<Button onClick={goToRegisterPage}>Sign Up</Button>
				</Navigation>
			</Wrapper>
		</HeaderDiv>
	);
}

const Navigation = styled('div')`
	display: flex;
	gap: 1rem;
`;
const UserAvatar = styled(Avatar)`
	cursor: pointer;
`;

const HeaderDiv = styled('div')`
	display: flex;
	justify-content: center;
	width: 100%;
	background: #071a2f;
	-webkit-box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.5);
	-moz-box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.5);
	box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.5);
`;
const Logo = styled('img')`
	width: 60px;
	cursor: pointer;
`;

const Wrapper = styled('header')`
	display: flex;
	width: 70%;
	justify-content: space-between;
	align-items: center;
	height: 4rem;
	color: white;
`;

export default Header;
