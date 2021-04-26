import React from 'react';
import Poster from './poster';
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
            default: 6,
            1100: 5,
            700: 4,
            500: 3
        }
        return(
            <Masonry breakpointCols={breakpointColumnObj} className="grid" columnClassName="grid_column">
                {posters}
            </Masonry>
        );
    }
}

export default PosterWall;