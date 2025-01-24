import React from 'react';
import PortfolioItem from './PortfolioItem';
import Button from './Button';
import battle from '../images/battle.png';
import store from '../images/store.png';
import seasonal from '../images/seasonal.png';
import promo from '../images/promo.png';

const Portfolio = () => {

  const portfolioItems = [
    {
      id: 1,
      title: 'Crafting Immersive UI/UX for the Main Battle Screen - Firestone Idle RPG',
      description: 'Designing an Intuitive Fantasy Battle Screen for Idle RPG Adventures',
      imgSrc: battle,
      imgAlt: 'Battle Image',
      tag: 'Full Time Role',
    },
    {
      id: 2,
      title: 'Gem Store Menu - Firestone Idle RPG',
      description: 'Creating Engaging Interfaces to Boost Purchases and Drive Monetization',
      imgSrc: store,
      imgAlt: 'Store Menu Image',
      tag: 'Full Time Role',
    },
    {
      id: 3,
      title: 'Designing Seasonal Event Promotional Banners - Firestone Idle RPG',
      description: 'Festive Flair: Captivating Banner Designs for Seasonal Promotions',
      imgSrc: seasonal,
      imgAlt: 'Seasonal Events Image',
      tag: 'Full Time Role',
    },
    {
      id: 4,
      title: 'Promotional Design for Google Play – Firestone Idle RPG',
      description: "Crafting Eye-Catching Google Play Visuals for Game Promotions",
      imgSrc: promo,
      imgAlt: 'Promo Image',
      tag: 'Full Time Role',
    },
  ];

  return (
    <section className="section-portfolio">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="margin-zero margin-bottom-xxlarge">
              <div className="text-align-center">
                <div className="align-center">
                  <div className="margin-zero margin-bottom-xsmall">
                    <div className="text-weight section-title">FEATURED WORK</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-component">
              <div className="portfolio-list-wrapper">
                <div className="portfolio-list" role="list">
                  {portfolioItems.map((item) => (
                    <PortfolioItem key={item.id} id={item.id} {...item} />
                  ))}
                </div>
              </div>
              <Button label="View all"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
