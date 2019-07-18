import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import * as serviceWorker from './serviceWorker';

const jsx = (
    <React.Fragment>
        <h1>Calculadora</h1>
        <Calculator />
    </React.Fragment>
);
ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
