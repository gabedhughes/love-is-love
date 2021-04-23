import React from 'react';
import {Container, Image} from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import {MDBMask, MDBView} from "mdbreact";

class Poster extends React.Component {
    constructor(props) {
        super(props);
        let properties = {
            performer: this.props.performer,
            song: this.props.song,
            show: this.props.show,
            poster_url: this.props.poster_url,
            video_url: this.props.video_url
        }
        this.state = {isFlipped: false};
        this.state = {dimensions: {}};
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return(
            <MDBView hover zoom>
                <img
                    src="https://loveislove-cdn.s3.amazonaws.com/rent.jpeg"
                    className="img-fluid"
                    alt=""
                />
                <MDBMask className="flex-center">
                    <p className="white-text">{this.props.performer}</p>
                    <p>{this.props.song}</p>
                    <p>{this.props.show}</p>
                </MDBMask>
            </MDBView>
        );
    }
}

export default Poster;