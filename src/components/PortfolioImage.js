import React from 'react';

const PortfolioImage = ({ src, srcSet, alt }) => {
  return (
    <div className="portfolio-header-image-wrapper">
      <img
        src={src}
        srcSet={srcSet}
        alt={alt}
        className="portfolio-header-image"
        loading="eager"
      />
    </div>
  );
};

export default PortfolioImage;
