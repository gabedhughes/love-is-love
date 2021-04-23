import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <p>Copyright &copy; 2021 Gabe Hughes. All Rights Reserved</p>
            </div>
        );
    }
}

ReactDOM.render(
    <Footer />,
    document.getElementById('footer')
)

export default Footer;