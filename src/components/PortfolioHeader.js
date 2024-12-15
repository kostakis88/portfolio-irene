import React from 'react';
import HeaderTitle from './HeaderTitle';
import PortfolioImage from './PortfolioImage';

const PortfolioHeader = ({ headerData, imageData }) => {
  return (
    <div className="portfolio-header-component">
      <div className="margin-bottom margin-xxlarge">
        <div className="portfolio-header-content-wrapper w-layout-grid">
          <HeaderTitle {...headerData} />
        </div>
      </div>
      <PortfolioImage {...imageData} />
    </div>
  );
};

export default PortfolioHeader;
