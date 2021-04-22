import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import reportWebVitals from './reportWebVitals';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css'
import PosterWall from './components/PosterWall'

function Poster(props) {
    return <h1>Hello World</h1>;
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <PosterWall />
        );
    }
}

ReactDOM.render(
  <PosterWall />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
