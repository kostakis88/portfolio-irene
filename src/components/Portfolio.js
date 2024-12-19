import React from 'react';
import PortfolioItem from './PortfolioItem';
import Button from './Button';
import image from '../images/image.png'

const Portfolio = () => {

  const portfolioItems = [
    {
      title: 'Fortnite Battle Royale',
      description: 'Creating engaging user experiences for Fortnite Battle Royale at Epic Games',
      imgSrc: image,
      imgAlt: 'Fortnite Image',
      href: '/works/fortnite-battle-royale',
      tag: 'Full Time Role',
    },
    {
      title: 'Crafting an Impactful Settings Menu',
      description: 'Analyzing best practices',
      imgSrc: image,
      imgAlt: 'Settings Menu',
      href: '/works/crafting-an-impactful-settings-menu',
      tag: 'Personal Project',
    },
    {
      title: 'Designing with Accessibility - The Walking Dead Final Season',
      description: 'Analyzing design approaches presented throughout The Walking Dead Final Season',
      imgSrc: image,
      imgAlt: 'Walking Dead Thumbnail',
      href: '/works/designing-with-accessibility-the-walking-dead-final-season',
      tag: 'Personal Project',
    },
    {
      title: "Marvel's Spider-Man 2",
      description: "UI/UX Art Intern on Marvel's Spider-Man 2 at Insomniac Games",
      imgSrc: image,
      imgAlt: 'Spider-Man 2 Thumbnail',
      href: '/works/marvels-spider-man-2',
      tag: 'Internship',
    },
    {
      title: 'Designing a Mode Selection Menu for a Spider-Verse Game',
      description: 'Menu design concept for a spider-verse game.',
      imgSrc: image,
      imgAlt: 'Spider-Verse Thumbnail',
      href: '/works/spider-verse-menu-design',
      tag: 'Personal Project',
    },
    {
      title: 'Creating a more personal Life is Strange episode selection screen',
      description: 'Redesign concept for episode selection screen in Life is Strange.',
      imgSrc: image,
      imgAlt: 'Life is Strange Thumbnail',
      href: '/works/life-is-strange-episode-selection-redesign',
      tag: 'Personal Project',
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
                    <div className="text-weight">FEATURED WORK</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-component">
              <div className="portfolio-list-wrapper">
                <div className="portfolio-list" role="list">
                  {portfolioItems.map((item, index) => (
                    <PortfolioItem key={index} {...item} />
                  ))}
                </div>
              </div>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
