import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '@propelauth/react';
import App from './App';

const authUrl = "https://3554294.propelauthtest.com";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider authUrl={authUrl}>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>
);