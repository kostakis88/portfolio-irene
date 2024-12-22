import React from 'react';
import HeaderTitle from './HeaderTitle';
import PortfolioImage from './PortfolioImage';

const PortfolioHeader = ({ headerData, imageData }) => {
  return (
    <div className="padding-global">
    <div className="container-large">
        <div className="padding-section-large">
    <div className="portfolio-header-component">
      <div className="margin-zero margin-bottom-xxlarge">
        <div className="portfolio-header-content-wrapper">
          <HeaderTitle {...headerData} />
        </div>
      </div>
      <PortfolioImage {...imageData} />
    </div>
    </div>
    </div>
    </div>
  );
};

export default PortfolioHeader;
