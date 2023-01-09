import { Button, CircularProgress } from '@mui/material';
import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/_atoms/PageWrapper';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useParams } from 'react-router-dom';
import {
	getMovieInfoAction,
	getVideosAction,
	getSimilarMoviesAction,
} from '../redux/api/ApiActions';
import { useDispatch, useSelector } from 'react-redux';
import { DetailedMovie, Video, Movie } from '../types/movies';
import { getSelectedMovie, getVideos, getSimilarMovies } from '../redux/selectors/movies';
import { img_300, unavailable } from '../config';
import SimilarMovies from '../components/_templates/SimilarMovies';
import { useNavigate } from 'react-router-dom';
import Comments from '../components/_templates/Comments';

function DetailedPage() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id } = useParams();
	const selectedMovie = useSelector(getSelectedMovie);
	const similarList = useSelector(getSimilarMovies);
	const videos = useSelector(getVideos);
	const [isLoading, setIsLoading] = useState(true);
	// @ts-ignore
	const [movie, setMovie] = useState<DetailedMovie>({});
	const [trailers, setTrailers] = useState<Video[]>([]);
	const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);

	const getGenres = useMemo(() => {
		if (movie.genres) {
			let genres = movie.genres.map((genre) => {
				let stringOfGenres = [];
				stringOfGenres.push(genre.name);
				return stringOfGenres;
			});
			return genres.join(', ');
		}
		return '';
	}, [movie]);

	const getCountries = useMemo(() => {
		if (movie.productionCountries) {
			let countries = movie.productionCountries.map((country) => {
				let stringOfCountries = [];
				stringOfCountries.push(country.name);
				return stringOfCountries;
			});
			return countries.join(', ');
		}
		return '';
	}, [movie]);

	useEffect(() => {
		setIsLoading(true);
		window.scroll(0, 0);
		dispatch(getMovieInfoAction.request(id));
		dispatch(getVideosAction.request(id));
		dispatch(getSimilarMoviesAction.request(id));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	useEffect(() => {
		if (!Object.keys(selectedMovie).length) {
			navigate('/');
		}
		setTrailers(videos);
		setMovie(selectedMovie);
		setSimilarMovies(similarList);
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, [selectedMovie, videos, similarList, navigate]);

	return (
		<StyledPageWrapper>
			{isLoading ? (
				<CircularProgress />
			) : (
				<CentralBox>
					<Info>
						<Section>
							<Poster
								src={movie.poster ? `${img_300}/${movie.poster}` : unavailable}
								alt={movie.title}
							/>

							<Buttons>
								<Button
									color='primary'
									sx={{ textTransform: 'none' }}
									variant='contained'
									startIcon={<FavoriteBorderIcon />}>
									Add to favorite
								</Button>
							</Buttons>
						</Section>
						<div>
							<MainTitle>{movie.title}</MainTitle>
							<ShortInfo>
								{movie.date ? <Fact>Released: {movie.date}</Fact> : null}
								{movie.genres ? <Fact>Genres: {getGenres}</Fact> : null}
								{movie.tagline ? <Fact>Slogan: {movie.tagline}</Fact> : null}

								{movie.productionCountries ? (
									<Fact>Countries: {getCountries} </Fact>
								) : null}
								<Fact>Duration: {movie.runtime}</Fact>
								<Fact>IMDb: {movie.voteAverage}</Fact>
							</ShortInfo>
						</div>
					</Info>
					<Overview>{movie.overview}</Overview>

					<Videos>
						{trailers.length
							? trailers.map((trailer) => (
									<Trailer
										key={trailer.id}
										title='video'
										allowFullScreen
										src={`https://www.youtube.com/embed/${trailer.key}`}
									/>
							  ))
							: null}
					</Videos>
					{similarMovies.length ? <SimilarMovies similarMovies={similarMovies} /> : null}
					<Comments />
				</CentralBox>
			)}
		</StyledPageWrapper>
	);
}
const StyledPageWrapper = styled(PageWrapper)`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Videos = styled('div')`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
	margin-top: 2rem;
`;
const ShortInfo = styled('div')``;

const Trailer = styled('iframe')`
	border: none;
	width: 100%;
	height: 600px;
`;
const Overview = styled('p')`
	font-size: 16px;
	line-height: 1.5rem;
	max-height: 300px;
	padding: 2rem 0;
`;
const Fact = styled('p')`
	margin: 0;
	font-size: 14px;
`;
const Buttons = styled('div')`
	display: flex;
	gap: 0.5rem;
	width: 170px;
`;
const MainTitle = styled('p')`
	font-size: 2rem;
	font-weight: 500;
	margin-top: 1rem;
`;

const Poster = styled('img')`
	width: 152px;
`;
const Info = styled('div')`
	display: flex;
`;
const Section = styled('div')`
	display: flex;
	gap: 1rem;
	flex-direction: column;
`;
const CentralBox = styled('div')`
	margin: 0 auto;
	width: 70%;
	color: white;

	min-height: 90vh;
	padding: 3rem 2rem;
	background: rgba(255, 255, 255, 0.2);
`;

export default DetailedPage;
