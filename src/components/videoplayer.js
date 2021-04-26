import React from 'react';
import {Modal} from "react-bootstrap";
import ReactPlayer from "react-player";

class VideoPlayer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Modal show={this.props.opened } onHide={this.props.toggleModal} centered={true} size='xl'>
                    <Modal.Body>
                        <div className='player-wrapper'>
                            <ReactPlayer
                                className='react-player'
                                url={this.props.video_url}
                                width='100%'
                                height='100%'
                                controls='show'
                                playing={true}
                            />
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default VideoPlayer;