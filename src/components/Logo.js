import React from 'react';
import image from '../images/linkedin.png'

const Logo = () => {
    return (
        <a
            href="/"
            aria-current="page"
            className="navbar-logo"
        >
            <img
                src={image}
                loading="lazy"
                width="145"
                alt="Logo"
            />
        </a>
    );
};

export default Logo;