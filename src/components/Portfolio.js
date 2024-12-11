import React from 'react';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  return (
    <section className="section-portfolio">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="margin-bottom margin-bottom-xxlarge">
              <div className="text-align-center">
                <div className="align-center">
                  <div className="margin-bottom margin-bottom-xsmall">
                    <div className="text-weight">FEATURED WORK</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-component">
              <div className="portfolio-list-wrapper">
                <div className="portfilio-list" role="list">
                  <PortfolioItem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
