import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { useEffect } from 'react';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

type LocationType = { [key: string]: number };
const Location: LocationType = {
	'/': 0,
	'/movies': 1,
	'/series': 2,
	'/search': 3,
};

function NavigationMenu() {
	const [value, setValue] = React.useState(Location[window.location.pathname]);
	const navigate = useNavigate();

	useEffect(() => {
		switch (value) {
			case 0: {
				navigate('/');
				break;
			}
			case 1: {
				navigate('/movies');
				break;
			}
			case 2: {
				navigate('/series');
				break;
			}
			case 3: {
				navigate('/search');
				break;
			}
		}
	}, [value, navigate]);

	return (
		<StyledBottomNavigation
			sx={{ background: '071a2f' }}
			showLabels
			value={value}
			onChange={(event, newValue: number) => {
				setValue(newValue);
			}}>
			<BottomNavigationAction label='Trending' icon={<WhatshotIcon />} />
			<BottomNavigationAction label='Movies' icon={<LocalMoviesIcon />} />
			<BottomNavigationAction label='TV Series' icon={<TvIcon />} />
			<BottomNavigationAction label='Search' icon={<SearchIcon />} />
		</StyledBottomNavigation>
	);
}

const StyledBottomNavigation = styled(BottomNavigation)`
	height: 3rem;
	z-index: 100;
	&.css-fukdpa-MuiBottomNavigation-root {
		background: #071a2f;
		button {
			color: white;
		}
	}
	.css-1bjk3jo-MuiButtonBase-root-MuiBottomNavigationAction-root.Mui-selected {
		color: #1976d2;
	}
`;

export default NavigationMenu;
