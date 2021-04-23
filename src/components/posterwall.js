import React from 'react';
import Poster from './poster';
import {Container, Row, Col } from "react-bootstrap";
import Masonry from "react-masonry-css";
import posterInfo from "../properties/data";

class PosterWall extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        var posters = [];
        posters = posterInfo.map((prop, key) => {
                return <Poster key={key} performer={prop.performer} song={prop.song} show={prop.show} video_url={prop.video_url} poster_url={prop.poster_url} />;
            });

        const breakpointColumnObj = {
            default: 5,
            1100: 4,
            700: 3,
            500: 2
        }
        return(
            <Masonry breakpointCols={breakpointColumnObj} className="grid" columnClassName="grid_column">
                {posters}
            </Masonry>
        );
    }
}

export default PosterWall;