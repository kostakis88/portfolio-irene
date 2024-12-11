import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar-component">
            <div className="navbar-container">
                <a
                    className="navbar-logo-link"
                    href="/"
                    aria-current="page"
                    aria-label="home"
                >
                    <img
                        src="#"
                        loading="lazy"
                        width="150"
                        alt=""
                        className="navbar-logo"
                    />
                </a>
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
            </div>
        </div>
    );
};

export default Navbar;
