import React from 'react';
import logo from '../images/logo.png'

const Logo = () => {
    return (
        <a
            href="/"
            aria-current="page"
            className="navbar-logo"
        >
            <img
                src={logo}
                loading="lazy"
                alt="Logo"
            />
        </a>
    );
};

export default Logo;