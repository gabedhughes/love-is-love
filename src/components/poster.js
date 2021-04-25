import React from 'react';
import {Container, Image} from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import {MDBMask, MDBView} from "mdbreact";
import VideoPlayer from "./videoplayer";

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

    state = {
        videoIsOpen: false
    }

    handleHover(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    toggleModal = () => this.setState(state => ({videoIsOpen: !state.videoIsOpen}))

    render() {
        return(
            <div>
                <div className='poster' onClick={this.toggleModal}>
                    <img
                        src={this.props.poster_url}
                        className="poster-image"
                        alt=""
                    />
                    <div className='poster-overlay'>
                        <div className='poster-text'>
                            <p><b>{this.props.performer}</b></p>
                            <p>Performing {this.props.song} from {this.props.show}</p>
                            <p style={{fontSize:'25px'}}>&#9658;</p>
                        </div>
                    </div>
                </div>
                <VideoPlayer opened={this.state.videoIsOpen} toggleModal={this.toggleModal} video_url={this.props.video_url}/>
            </div>
        );
    }
}

export default Poster;