import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import './NavMenu.css';
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { msalConfig } from '../authConfig';
import { PublicClientApplication } from '@azure/msal-browser';

const NavMenu = () => {
    const [collapsed, setCollapsed] = useState(true);
    const { instance, accounts } = useMsal();

    const msalInstance = new PublicClientApplication(msalConfig);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };

    const isAuthenticated = useIsAuthenticated();

    const navigate = useNavigate();

    useEffect(() => {

        // declare the data fetching function
        const initializePCA = async () => {
             await msalInstance.initialize();
             instance.handleRedirectPromise().then((res) => {
                if (res !== null && res.account !== null) {
                    console.log('Login successful');
                    navigate('/');
                }
            });
          }
      
        if (accounts.length > 0) {
            navigate('/');
        } else {
            
           
        }


    }, [instance, accounts, navigate]);

    const handleLogout = () => {
        instance.logoutRedirect({
            postLogoutRedirectUri: process.env.REACT_APP_APP_URL,
        });
    }


    const handleLogin = async () => {
        await msalInstance.initialize();
        msalInstance.loginRedirect({
            scopes: ["openid", "profile"],
        });
    }

    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
                <NavbarBrand tag={Link} to="/">B2C Sample</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
                    <ul className="navbar-nav flex-grow">
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                        </NavItem>
                        {!isAuthenticated && 
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="#" onClick={handleLogin}>Login</NavLink>
                            </NavItem>
                        }
                        {isAuthenticated &&
                            <>
                                <NavItem>
                                <NavLink tag={Link} className="text-dark" to="#">Welcome {accounts[0].name}</NavLink>
                                    
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="#" onClick={handleLogout}>Logout</NavLink>
                                </NavItem>
                            </>
                        }
                    </ul>
                </Collapse>
            </Navbar>
        </header>
    );
};

export default NavMenu;
