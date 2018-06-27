import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import './index.css';

ReactDOM.render(<App />, document.getElementById('app'));
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
debugger;
console.log( `I would pay ${courseValue} for this awesome course!`);
// // console.log( 'I would pay for this awesome course!');
