import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import reportWebVitals from './reportWebVitals';
import {Modal, Button, Nav, Navbar} from 'react-bootstrap';
import PosterWall from './components/posterwall';
import Popup from './components/modal';
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Popup />

                <PosterWall />
            </>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
