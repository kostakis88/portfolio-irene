import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureList from '../components/FeatureList';
import image from '../images/image.png'

const About = () => {
  const heroSectionOne = {
    isImageFirst: true,
    textProps: {
      heading: 'What kind of designer I am',
      content: (
        <>
          I'm a UX Designer currently working at{' '}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Epic Games
          </a>{' '}
          on the{' '}
          <a
            href="#"
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
        label: 'RESUME',
      },
    },
    imageProps: {
      src: image,
      srcSet:
        image,
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
      src: image,
      srcSet:
        image,
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
