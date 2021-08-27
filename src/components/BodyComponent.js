import React from 'react';
import RowComponent from './RowComponent';
import requests from '../helpers/requests';
import "../css/BodyComponent.css";
import BannerComponent from './BannerComponent';
import NavComponent from './NavComponent';

const BodyComponent = () => {
    return (
        <div className="app">
            <NavComponent />
            <BannerComponent fetchUrl={requests.fetchTrending} />
            <RowComponent title="Feature Films" fetchUrl={requests.fetchTrending} isLargeRow />
            <RowComponent title="Popular on Netflix" fetchUrl={requests.fetchNetflixOriginals} />
            <RowComponent title="Action" fetchUrl={requests.fetchActionMovies} />
            <RowComponent title="Animated / Anime" fetchUrl={requests.fetchAnimationMovies} />
            <RowComponent title="Science-Fiction / Fantasy" fetchUrl={requests.fetchSciFiMovies} />
            <RowComponent title="Comedy" fetchUrl={requests.fetchComedyMovies} />
            <RowComponent title="Mystery" fetchUrl={requests.fetchMysteryMovies} />
            <RowComponent title="Horror" fetchUrl={requests.fetchHorrorMovies} />
        </div>
    );
};

export default BodyComponent;