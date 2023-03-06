import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/utils/utils.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GeneralContextProvider } from './contexts/GeneralContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GeneralContextProvider>
        <App />
      </GeneralContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
