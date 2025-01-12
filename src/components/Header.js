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
                                        <img src={image} className="home-image" alt="" />
                                    </div>
                                </div>
                                <div className="container-small">
                                    <p className="text-size-large">
                                        I specialize in crafting immersive <strong>UI/UX designs</strong>{' '}
                                        that enhance gameplay, <strong>visual and graphic design</strong>{' '}
                                        that aligns with game aesthetics, and impactful <strong>promotional marketing materials</strong>{' '}
                                        to amplify a game's presence. Combining creativity with functionality, 
                                        I create seamless experiences that captivate players and bring games to life.
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
