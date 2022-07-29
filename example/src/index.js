import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import '@gouvfr/dsfr/dist/utility/icons/icons-system/icons-system.min.css';

// if (process.env.NODE_ENV !== 'production') {
//     const axe = require('@axe-core/react');
//     axe(React, ReactDOM, 1000);
// }
const root = createRoot(document.getElementById('root'));

root.render(<App />);
