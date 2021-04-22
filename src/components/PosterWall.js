import React from 'react';
import Poster from './Poster';
let properties = require('../properties/posters.json');

class PosterWall extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            console.log(properties[0].name),
            <div>
                <Poster />
                <Poster />
                <Poster />
            </div>
        );
    }
}

export default PosterWall;