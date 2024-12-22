import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PortfolioHeader from '../components/PortfolioHeader';
import ContentSection from '../components/ContentSection';
import ButtonPrimary from '../components/ButtonPrimary';
import image from '../images/image.png';

const WorkDetails = () => {
  const { id } = useParams(); // Fetch the ID from the URL
  const [workData, setWorkData] = useState(null);

  // Mock data for demonstration; replace this with an API call or actual data fetch
  const mockWorkDetails = {
    1: {
      headerData: {
        title: 'Crafting an Impactful Settings Menu',
        subtitle: 'Redesign concept for the episode selection screen in Life is Strange.',
        tags: [
          { href: '/services/personal-project', label: 'Personal Project' },
        ],
      },
      imageData: {
        src: image,
        srcSet: image,
        alt: 'Life is Strange Episode Selection',
        overlayStyle: {
          transform:
            'translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)',
          transformStyle: 'preserve-3d',
        },
      },
      contentData: [
        { type: 'heading', content: 'Overview' },
        {
          type: 'text',
          content:
            'Life is Strange Remastered stars Max Caulfield, a photographer who discovers she can rewind time. I took on the challenge of redesigning the episode selection menu because I was determined to design a menu that connects the player more closely with not only the characters, but evoke more emotions through the UI before they are taken into the narrative adventure.',
        },
        { type: 'heading', content: 'Final Product' },
        {
          type: 'video',
          src: '#',
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
          src: image,
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
          src: image,
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
          src: image,
        },
      ],
    },
    // Add more mock work details for other IDs as needed
  };

  useEffect(() => {
    // Simulate fetching data based on the ID
    const fetchedData = mockWorkDetails[id];
    setWorkData(fetchedData);
  }, [id]);

  if (!workData) {
    return <p>Loading...</p>; // Show a loading indicator while fetching data
  }

  const { headerData, imageData, contentData } = workData;

  return (
    <div className="work-details">
      <PortfolioHeader headerData={headerData} imageData={imageData} />
      <section className="section-portfolio-content">
        <div className="padding-global">
          <div className="container-small">
            <div className="padding-section-large">
              <ContentSection content={contentData} />
            </div>
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
