import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import YourApp from './components/YourApp';

import { AuthProvider } from "@propelauth/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthProvider authUrl={import.meta.env.VITE_AUTH_URL}>
        <YourApp />
    </AuthProvider>,
);