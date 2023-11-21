import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";

const baseUrl = "https://localhost:44449/";
const msalInstance = new PublicClientApplication(msalConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <MsalProvider instance={msalInstance}>
            <App />
        </MsalProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
