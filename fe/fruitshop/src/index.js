import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/user/HomePage/HomePage';
import { BrowserRouter } from 'react-router-dom';
import RouterCustom from './RouterCustom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RouterCustom />
  </BrowserRouter>
);

