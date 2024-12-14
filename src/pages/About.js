import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureList from '../components/FeatureList';

const About = () => {
  const heroSectionOne = {
    isImageFirst: true,
    textProps: {
      heading: 'What kind of designer I am',
      content: (
        <>
          I'm a UX Designer currently working at{' '}
          <a href="https://store.epicgames.com/en-US/" target="_blank" rel="noopener noreferrer">
            Epic Games
          </a>{' '}
          on the{' '}
          <a
            href="https://store.epicgames.com/en-US/p/fortnite--battle-royale"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fortnite Battle Royale
          </a>{' '}
          team. My workload involves crafting fun gameplay experiences and introducing new mechanics to evolve the
          quality of life of Fortnite. I'm an empathetic UX designer, who advocates for the best user experience -
          ultimately putting strong emphasis on great usability and positive emotion.
          <br />
          <br />
          I strive to learn about the audience I am designing for so I can gain the perspective needed to be a problem
          solver. I understand the value of being data-informed, presenting thoroughly thought through, end-to-end UX
          solutions to teammates, partners, and leadership.
          <br />
          ‍
          <br />
          When I’m not heads down at work, you’ll catch me playing through my video game backlog, exploring different
          cities, playing around in Photoshop, and on the hunt for delicious dessert recipes!
        </>
      ),
      button: {
        href: 'https://cdn.prod.website-files.com/65789851928ac72747df11b7/66b3cc4bdb2e335222f33ffd_Megan%20McNamee%20Resume.pdf',
        label: 'RESUME',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    },
    imageProps: {
      src: 'https://cdn.prod.website-files.com/65789851928ac72747df11b7/65e788140f65b5323f24f0bf_4A5F2B88-732C-43D6-A70F-82AAAACA5444%20(1).jpg',
      srcSet:
        'https://cdn.prod.website-files.com/65789851928ac72747df11b7/65e788140f65b5323f24f0bf_4A5F2B88-732C-43D6-A70F-82AAAACA5444%20(1)-p-500.jpg 500w, https://cdn.prod.website-files.com/65789851928ac72747df11b7/65e788140f65b5323f24f0bf_4A5F2B88-732C-43D6-A70F-82AAAACA5444%20(1)-p-800.jpg 800w, https://cdn.prod.website-files.com/65789851928ac72747df11b7/65e788140f65b5323f24f0bf_4A5F2B88-732C-43D6-A70F-82AAAACA5444%20(1)-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65789851928ac72747df11b7/65e788140f65b5323f24f0bf_4A5F2B88-732C-43D6-A70F-82AAAACA5444%20(1).jpg 1179w',
      sizes: '(max-width: 767px) 94vw, (max-width: 991px) 92vw, 43vw',
      alt: '',
      className: 'shadow-two',
    },
  };

  const heroSectionTwo = {
    isImageFirst: false,
    textProps: {
      heading: 'Why I chose to dedicate my career in Game UX',
      content: (
        <>
          I'll cut right to the chase... OF COURSE I LOVE VIDEO GAMES! 😄
          <br />
          <br />
          But there's a unique reason why. It's an important medium that has brought people worldwide together, and the
          user experience is the heartbeat of a player's journey. Over the years of playing games, I have recognized the
          importance of onboarding, customization settings, accessible UI design... ultimately empowering the player to
          take control of their experience. Players can ultimately call this experience an important and positive
          element in their life. <strong>That is my goal</strong>. I value how games offer this and I am passionate
          about bringing that to life in the games I work on. 🤍
        </>
      ),
    },
    imageProps: {
      src: 'https://cdn.prod.website-files.com/65789851928ac72747df11b7/6578b9ce015e606d33dd2e8b_image.png',
      srcSet:
        'https://cdn.prod.website-files.com/65789851928ac72747df11b7/6578b9ce015e606d33dd2e8b_image-p-500.png 500w, https://cdn.prod.website-files.com/65789851928ac72747df11b7/6578b9ce015e606d33dd2e8b_image-p-800.png 800w, https://cdn.prod.website-files.com/65789851928ac72747df11b7/6578b9ce015e606d33dd2e8b_image-p-1080.png 1080w, https://cdn.prod.website-files.com/65789851928ac72747df11b7/6578b9ce015e606d33dd2e8b_image-p-1600.png 1600w, https://cdn.prod.website-files.com/65789851928ac72747df11b7/6578b9ce015e606d33dd2e8b_image.png 1956w',
      sizes: '(max-width: 767px) 94vw, (max-width: 991px) 92vw, 43vw',
      alt: '',
      className: 'shadow-two-2',
    },
  };

  return (
    <>
      <HeroSection {...heroSectionOne} />
      <HeroSection {...heroSectionTwo} />
      <FeatureList />
    </>
  );
};

export default About;
