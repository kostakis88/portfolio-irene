import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

const Navbar = () => {
    return (
        <div className="navbar-component">
            <div className="navbar-container">
                <Logo />
                <Menu />
            </div>
        </div>
    );
};

export default Navbar;
