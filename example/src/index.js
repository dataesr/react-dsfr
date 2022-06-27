import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@gouvfr/dsfr/dist/utility/icons/icons-system/icons-system.min.css';

// if (process.env.NODE_ENV !== 'production') {
//     const axe = require('@axe-core/react');
//     axe(React, ReactDOM, 1000);
// }

ReactDOM.render(<App />, document.getElementById('root'));
