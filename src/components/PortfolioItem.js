import React from 'react';
import ViewWorkButton from './ViewWorkButton';

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
                <ViewWorkButton />
            </div>
        </div>
    );
};

export default PortfolioItem;
