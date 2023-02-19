import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { HelmetProvider } from 'react-helmet-async';

import './index.css';
import App from './App';
import { StoreProvider } from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <StoreProvider>
  <HelmetProvider>
    <App />
    </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
);

