import React, { useState, useEffect } from "react";
import axios from "../helpers/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "../css/RowComponent.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const RowComponent = ({ title, fetchUrl, isLargeRow }) => {

	const [moviesState, setMoviesState] = useState([]);

	const [trailerState, setTrailerState] = useState("");

	const opts = {
		height: "600",
		width: "100%",
		playerVars: {
			autoplay: 1
		}
	};

	useEffect(() => {
		axios.get(fetchUrl)
			.then((res) => {
				console.log(res.data.results);
				setMoviesState(res.data.results);
			})
			.catch((err) => console.log(err));
	}, [fetchUrl]);

	const handleClick = (movie) => {
		if (trailerState) {
			setTrailerState('');
		}
		else {
			movieTrailer(movie?.title || movie?.name || "")
				.then(url => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerState(urlParams.get('v'));
				})
				.catch((err) => console.log(err));
		}
	}

	return (
		<div className="row">
			<h1>{title}</h1>
			<div className="row_posters">
				{/* {row poster pseudo code} */}
				{moviesState.map((movie) => (
					movie.backdrop_path &&
					<img
						onClick={() => handleClick(movie)}
						className={`row_poster ${isLargeRow && "row_posterLarge"}`}
						key={movie.id}
						src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
						alt={movie.title}
					/>
				))}
			</div>
			{trailerState && <YouTube videoId={trailerState} opts={opts} />}
		</div>
	);
};

export default RowComponent;
