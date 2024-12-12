import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

const Footer = () => {
    return (
        <footer className="padding-global">
            <div className="container-large">
                <div className="padding-vertical padding-xxlarge">
                    <div className="padding-bottom padding-xxlarge">
                        <div className="footer-top-wrapper">
                            <Logo />
                            <div className="footer-link-list">
                                <Menu />
                            </div>
                            <div className="footer-social-list">
                                <a
                                    href="https://www.linkedin.com/in/megan-mcnamee/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-link w-inline-block"
                                >
                                    <img
                                        src="https://cdn.prod.website-files.com/65789851928ac72747df11b7/65789852928ac72747df124a_Icon_LinkedIn.png"
                                        loading="lazy"
                                        width="24.5"
                                        alt="LinkedIn Icon"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="line-divider"></div>
                    <div className="padding-top padding-medium">
                        <div className="footer-bottom-wrapper">
                            <div className="footer-credit-text">
                                Thanks for stopping by. Have a great day! 😊
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
