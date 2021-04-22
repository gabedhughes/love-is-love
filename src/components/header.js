import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends React.Component {
    render() {
        return (
            <Navbar sticky="top" bg="light" expand="md">
                <Navbar.Brand className="mx-auto">Love is Love</Navbar.Brand>
                <Button variant="primary" className="ml-auto">
                    <a style={{display: "table-cell", color: "black"}} href="https://vrhs-drama-boosters.square.site/" target="_blank">Donate</a>
                </Button>
            </Navbar>
        );
    }
}

ReactDOM.render(
    <Header/>,
    document.getElementById("header")
)

export default Header;