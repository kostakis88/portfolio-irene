import React from 'react';
import IconButton from './IconButton';

const PortfolioItem = ({ title, description, imgSrc, imgAlt, href, tag }) => {
    return (
        <div role="listitem" className="portfolio-item">
            <a href={href} className="portfolio-image-link">
                <div className="margin-zero margin-bottom-xsmall">
                    <div className="portfolio-image-wrapper">
                        <img src={imgSrc} alt={imgAlt} className="portfolio-image" loading="lazy" />
                        <div className="image-overlay"></div>
                    </div>
                </div>
                <div className="margin-zero margin-bottom-xsmall">
                    <h2 className="heading-style-h5">{title}</h2>
                </div>
                <div className="text-size-regular">{description}</div>
            </a>
            <div className="portfolio-tag-list">
                <a href="#" className="portfolio-tag-item">
                    <div className="tag-text">{tag}</div>
                </a>
            </div>
            <IconButton />
        </div>
    );
};

export default PortfolioItem;
