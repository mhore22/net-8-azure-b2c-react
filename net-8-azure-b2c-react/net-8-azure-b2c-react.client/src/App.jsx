import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { useIsAuthenticated } from "@azure/msal-react";
import { Layout } from './components/Layout';
import { Home } from "./components/Home";
import './css/custom.css';

function App() {
    
    return (
        <Layout>
            <Routes>
                   <Route path="/" key={0} element={<Home />} index={true} />
            </Routes>
        </Layout>
    );
}

export default App;
