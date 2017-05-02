import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import './index.css';

ReactDOM.render(
    <Main />,
    // 👆 transpiled into 👇 by Babel
    // React.createElement(HelloWorld, {name: 'Kippy'}),

  document.getElementById('root')
);
