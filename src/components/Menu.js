import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <nav role="navigation" className="navbar-menu">
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'navbar-link navbar-current' : 'navbar-link')}
            >
                Home
            </NavLink>
            <NavLink
                to="/works"
                className={({ isActive }) => (isActive ? 'navbar-link navbar-current' : 'navbar-link')}
            >
                Work
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'navbar-link navbar-current' : 'navbar-link')}
            >
                About
            </NavLink>
        </nav>
    );
};

export default Menu;
