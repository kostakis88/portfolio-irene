import React from 'react';

const Menu = () => {
    return (
        <nav role="navigation" className="navbar-menu">
            <a href="/" aria-current="page" className="navbar-link navbar-current">
                Home
            </a>
            <a href="/works" className="navbar-link">
                Work
            </a>
            <a href="/about" className="navbar-link">
                About
            </a>
        </nav>
    );
};

export default Menu;