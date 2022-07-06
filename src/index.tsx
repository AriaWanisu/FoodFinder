import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <BrowserRouter>
    <App/>
    </BrowserRouter>
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById('root')
);