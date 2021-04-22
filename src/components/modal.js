import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class Popup extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        modalState: true
    };

   /* componentDidMount(){
        let visited = localStorage["alreadyVisited"];
        if(visited) {
            this.setState({modalState:false})
        } else {
            localStorage["alreadyVisited"] = true;
            this.setState({modalState:true})
        }
    } */

    closeModal = () => this.setState({modalState: false});

    render() {
        return (
            <Modal show={this.state.modalState} onHide={this.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Please Consider Donating</Modal.Title>
                </Modal.Header>
                <Modal.Body>Text goes here</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.closeModal}>
                        <a style={{display: "table-cell", color: "black"}} href="https://vrhs-drama-boosters.square.site/" target="_blank">Donate</a>
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default Popup;