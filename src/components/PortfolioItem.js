import React from 'react';

const PortfolioItem = () => {
    return (
        <div className="portfolio-list-item" role="listitem">
            <div className="portfolio-item">
                <a className="portfolio-image-link">
                    <div className="margin-bottom margin-bottom-xsmall">
                        <div className="portfolio-image-wrapper">
                            <img className="portfolio-image" alt="" />
                        </div>
                    </div>
                    <div className="margin-bottom margin-bottom-xsmall">
                        <h2 className="heading-style-h5">Fortnite Battle Royale</h2>
                    </div>
                    <div className="text-size-regular">
                        Creating engaging user experiences for Fortnite Battle Royale at
                        Epic Games
                    </div>
                </a>
                <div>
                    <div className="portfolio-tag-list">
                        <a className="portfolio-tag-item" href="#">
                            <div className="tag-text">Full Time Role</div>
                        </a>
                    </div>
                </div>
                <div className="portfolio-button-wrapper">
                    <a className="button" href="#">
                        <div>View work</div>
                        <div className="icon">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 3L11 8L6 13"
                                    stroke="CurrentColor"
                                    strokeWidth="1.5"
                                ></path>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;
