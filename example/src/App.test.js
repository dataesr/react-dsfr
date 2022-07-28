import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('app');
const root = createRoot(container);

it('renders without crashing', () => {
  root.render(<App />);
  root.unmount();
});
