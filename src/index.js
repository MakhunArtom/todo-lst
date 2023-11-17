import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { App } from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="app">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
//  basename = '/tick-tick';
