import React from 'react';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {

  const portfolioItems = [
    {
      title: 'Fortnite Battle Royale',
      description: 'Creating engaging user experiences for Fortnite Battle Royale at Epic Games',
      imgSrc: 'https://cdn.prod.website-files.com/65789852928ac72747df127e/65789aeac6bdf6d60ffc6cc2_Fortnite%20Header%20Image.png',
      imgAlt: 'Fortnite Image',
      href: '/works/fortnite-battle-royale',
      tag: 'Full Time Role',
    },
    {
      title: 'Crafting an Impactful Settings Menu',
      description: 'Analyzing best practices',
      imgSrc: 'https://cdn.prod.website-files.com/65789852928ac72747df127e/661e8e8c75ea901d8be29cb9_Frame%203.png',
      imgAlt: 'Settings Menu',
      href: '/works/crafting-an-impactful-settings-menu',
      tag: 'Personal Project',
    },
    {
      title: 'Designing with Accessibility - The Walking Dead Final Season',
      description: 'Analyzing design approaches presented throughout The Walking Dead Final Season',
      imgSrc: 'https://cdn.prod.website-files.com/65789852928ac72747df127e/6578a838f17d148d78d35918_TWDG%20Thumbnail.png',
      imgAlt: 'Walking Dead Thumbnail',
      href: '/works/designing-with-accessibility-the-walking-dead-final-season',
      tag: 'Personal Project',
    },
    {
      title: "Marvel's Spider-Man 2",
      description: "UI/UX Art Intern on Marvel's Spider-Man 2 at Insomniac Games",
      imgSrc: 'https://cdn.prod.website-files.com/65789852928ac72747df127e/6578a581c1aafbf9c60c25bb_SM2%20image.png',
      imgAlt: 'Spider-Man 2 Thumbnail',
      href: '/works/marvels-spider-man-2',
      tag: 'Internship',
    },
    {
      title: 'Designing a Mode Selection Menu for a Spider-Verse Game',
      description: 'Menu design concept for a spider-verse game.',
      imgSrc: 'https://cdn.prod.website-files.com/65789852928ac72747df127e/6578a7b249fec1dba41b6ebd_Gwen%20Thumbnail.png',
      imgAlt: 'Spider-Verse Thumbnail',
      href: '/works/spider-verse-menu-design',
      tag: 'Personal Project',
    },
    {
      title: 'Creating a more personal Life is Strange episode selection screen',
      description: 'Redesign concept for episode selection screen in Life is Strange.',
      imgSrc: 'https://cdn.prod.website-files.com/65789852928ac72747df127e/6578c7662f7dc2bbe2f13e17_LIS%20thumbnail.png',
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
                <div className="portfolio-list" role="list">
                  {portfolioItems.map((item, index) => (
                    <PortfolioItem key={index} {...item} />
                  ))}
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
