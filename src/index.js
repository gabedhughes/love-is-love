import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Poster(props) {
    return <h1>Hello World</h1>;
}

function PosterWall() {
    return (
        <div>
            <Poster />
            <Poster />
            <Poster />
        </div>
    );
}

ReactDOM.render(
  <PosterWall />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
