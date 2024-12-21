import React from 'react';

const PortfolioImage = ({ src, srcSet, alt, overlayStyle }) => {
  return (
    <div className="portfolio-header-image-wrapper">
      <img
        src={src}
        srcSet={srcSet}
        alt={alt}
        className="portfolio-header-image"
        loading="eager"
      />
      <div style={overlayStyle} className="image-overlay"></div>
    </div>
  );
};

export default PortfolioImage;
