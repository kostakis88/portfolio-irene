import React from 'react';
import PortfolioItem from './PortfolioItem';
import Button from './Button';
import image from '../images/image.png'

const Portfolio = () => {

  const portfolioItems = [
    {
      id: 1,
      title: 'Fortnite Battle Royale',
      description: 'Creating engaging user experiences for Fortnite Battle Royale at Epic Games',
      imgSrc: image,
      imgAlt: 'Fortnite Image',
      tag: 'Full Time Role',
    },
    {
      id: 2,
      title: 'Crafting an Impactful Settings Menu',
      description: 'Analyzing best practices',
      imgSrc: image,
      imgAlt: 'Settings Menu',
      tag: 'Personal Project',
    },
    {
      id: 3,
      title: 'Designing with Accessibility - The Walking Dead Final Season',
      description: 'Analyzing design approaches presented throughout The Walking Dead Final Season',
      imgSrc: image,
      imgAlt: 'Walking Dead Thumbnail',
      tag: 'Personal Project',
    },
    {
      id: 4,
      title: "Marvel's Spider-Man 2",
      description: "UI/UX Art Intern on Marvel's Spider-Man 2 at Insomniac Games",
      imgSrc: image,
      imgAlt: 'Spider-Man 2 Thumbnail',
      tag: 'Internship',
    },
    {
      id: 5,
      title: 'Designing a Mode Selection Menu for a Spider-Verse Game',
      description: 'Menu design concept for a spider-verse game.',
      imgSrc: image,
      imgAlt: 'Spider-Verse Thumbnail',
      tag: 'Personal Project',
    },
    {
      id: 6,
      title: 'Creating a more personal Life is Strange episode selection screen',
      description: 'Redesign concept for episode selection screen in Life is Strange.',
      imgSrc: image,
      imgAlt: 'Life is Strange Thumbnail',
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
                  {portfolioItems.map((item) => (
                    <PortfolioItem key={item.id} id={item.id} {...item} />
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
