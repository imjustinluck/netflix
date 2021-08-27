import React, { useState, useEffect } from 'react';
import axios from '../helpers/axios';
import "../css/BannerComponent.css";

function BannerComponent({ fetchUrl }) {

    const [movieState, setMovieState] = useState([]);

    useEffect(() => {
        axios.get(fetchUrl)
            .then((res) => {
                setMovieState(
                    res.data.results[Math.floor(Math.random() * res.data.results.length)]
                )
            })
            .catch((err) => console.log(err))
    }, [fetchUrl]);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }



    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original${movieState?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">{movieState?.title || movieState?.name || movieState?.original_name}</h1>

                <h1 className="banner_description">
                    {truncate(movieState?.overview, 200)}
                </h1>
            </div>
            <div className="banner_fadeBottom"></div>
        </header>
    )
}

export default BannerComponent
