import React from 'react';
import ReactDOM from 'react-dom/client';
import Search from '../Search/Search';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Search />
  </React.StrictMode>
);

reportWebVitals();
