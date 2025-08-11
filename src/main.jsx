import React from 'react';
import ReactDOM from 'react-dom/client'; // 👈 this has changed in React 18+
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // 👈 createRoot instead of render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
