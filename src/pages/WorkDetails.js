import React from 'react';
import PortfolioHeader from '../components/PortfolioHeader';
import ContentSection from '../components/ContentSection';
import ButtonPrimary from '../components/ButtonPrimary';

const WorkDetails = () => {
  const headerData = {
    title: 'Creating a more personal Life is Strange episode selection screen',
    subtitle:
      'Redesign concept for the episode selection screen in Life is Strange.',
    tags: [
      { href: '/services/personal-project', label: 'Personal Project' },
    ],
  };

  const imageData = {
    src: 'https://cdn.prod.website-files.com/65789852928ac72747df127e/657a60d6674a4d7e50302e29_6412085730cbae8090df014d_Ep1.png',
    srcSet:
      'https://cdn.prod.website-files.com/65789852928ac72747df127e/657a60d6674a4d7e50302e29_6412085730cbae8090df014d_Ep1-p-500.png 500w, https://cdn.prod.website-files.com/65789852928ac72747df127e/657a60d6674a4d7e50302e29_6412085730cbae8090df014d_Ep1-p-800.png 800w, https://cdn.prod.website-files.com/65789852928ac72747df127e/657a60d6674a4d7e50302e29_6412085730cbae8090df014d_Ep1-p-1080.png 1080w, https://cdn.prod.website-files.com/65789852928ac72747df127e/657a60d6674a4d7e50302e29_6412085730cbae8090df014d_Ep1-p-1600.png 1600w, https://cdn.prod.website-files.com/65789852928ac72747df127e/657a60d6674a4d7e50302e29_6412085730cbae8090df014d_Ep1.png 1920w',
    alt: 'Life is Strange Episode Selection',
    overlayStyle: {
      transform:
        'translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)',
      transformStyle: 'preserve-3d',
    },
  };

  const contentData = [
    { type: 'heading', content: 'Overview' },
    {
      type: 'text',
      content:
        'Life is Strange Remastered stars Max Caulfield, a photographer who discovers she can rewind time. I took on the challenge of redesigning the episode selection menu because I was determined to design a menu that connects the player more closely with not only the characters, but evoke more emotions through the UI before they are taken into the narrative adventure.',
    },
    { type: 'heading', content: 'Final Product' },
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/Iw4e9F2tMAg?start=1',
      title: 'Life is Strange Remastered: Episode Selection Redesign',
    },
    { type: 'heading', content: 'Analyzing In-Game Design' },
    {
      type: 'text',
      content:
        'The original design of this screen showcases episodes in a horizontal tile, by enlarging the photo showcased on the tile to be part of the main background. A scribbled up arrow is presented towards the right of the last tile to indicate there are more tiles to view.',
    },
    {
      type: 'image',
      src: 'https://cdn.prod.website-files.com/65789852928ac72747df127e/657a5b36a5fe6744961c2736_image%2018.png',
    },
    { type: 'heading', content: 'Design Process' },
    {
      type: 'text',
      content:
        'While concepting out a redesign of this screen, I didn’t want to create an entirely new theme. Instead, I wanted to reconstruct the way the player cycles through each episode, by introducing a special touch to it...',
    },
    {
      type: 'text',
      content: 'Goals:',
    },
    {
      type: 'text',
      content: 'Showcase only one episode tile at a time to create curiosity and retain focus on element.',
    },
    {
      type: 'text',
      content: 'Encompass each episode to reflect a polaroid of episode preview.',
    },
    {
      type: 'image',
      src: 'https://cdn.prod.website-files.com/65789852928ac72747df127e/657a5d09b78111bce933c79d_Group%208%20(1).png',
    },
    { type: 'heading', content: 'Episode Tile Stylization' },
    {
      type: 'text',
      content:
        'For the episode cards, I made sure to include the following elements to give it more character:',
    },
    { type: 'text', content: 'Film grain' },
    { type: 'text', content: 'Paper texture' },
    { type: 'text', content: 'Lens Flare' },
    { type: 'text', content: 'Sharpie marking for episode and title' },
    {
      type: 'image',
      src: 'https://cdn.prod.website-files.com/65789852928ac72747df127e/657a6093b78111bce93600bf_64120a5539e6a900a8de1306_Group%201.png',
    },
  ];

  return (
    <div className="work-details">
      <PortfolioHeader headerData={headerData} imageData={imageData} />
      <section className="section-portfolio-content">
        <div className="padding-global">
          <div className="container-small">
            <ContentSection content={contentData} />
          </div>
        </div>
      </section>
      <div className="margin-bottom margin-large">
        <div className="button-group is-center">
          <ButtonPrimary href="/works" label="View More Work" className="is-secondary" />
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;
