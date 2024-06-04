// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa App en lugar de Header
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
