import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Button, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends React.Component {
    render() {
        return (
            <Navbar sticky="top" bg="light" expand="md">
                <Navbar.Brand className="mx-auto">
                    <div className='navbar-text'>
                        <h1 className='header-text'>Love is Love</h1>
                        <p className='header-subtext'>2021 Musical Theatre Showcase</p>
                    </div>
                </Navbar.Brand>
                <Button variant="primary" className="donate-button ml-auto" style={{backgroundColor: '#F172A1'}}>
                    <a style={{display: "table-cell", color: "white"}} href="https://vrhs-drama-boosters.square.site/" target="_blank">Donate</a>
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