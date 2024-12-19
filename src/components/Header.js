import React from 'react';
import image from '../images/image.png'

const Header = () => {
    return (
        <header className="section-header">
            <div className="padding-global">
                <div className="container-medium">
                    <div className="padding-section-large">
                        <div className="text-align-center">
                            <div className="align-center">
                                <div className="margin-zero margin-bottom-small">
                                    <h1 className="header-text">Hi, I'm Irene 🤍</h1>
                                    <div className="image-wrapper">
                                        <img src={image} className="image" alt="" />
                                    </div>
                                </div>
                                <div className="container-small">
                                    <p className="text-size-large">
                                        I'm a UX Designer working at{' '}
                                        <a href="#" target="_blank" rel="noreferrer">
                                            Holyday Studios
                                        </a>
                                        . My journey into making games is fueled by a relentless
                                        pursuit of <strong>innovation</strong>, pushing the
                                        boundaries of gaming to create <strong>solutions</strong>{' '}
                                        that resonate with players worldwide.
                                        <span>
                                            Every project I undertake is a canvas where{' '}
                                            <strong>aesthetics</strong> and <strong>usability</strong>{' '}
                                            converge, resulting in designs that not only catch the eye
                                            but also enrich the player's lives.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
