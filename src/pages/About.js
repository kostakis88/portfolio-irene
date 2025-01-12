import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureList from '../components/FeatureList';
import image from '../images/image.png';
import career from '../images/career.png';

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
          My passion for UX design stems from a deep love for understanding human psychology and empathizing with users' needs. 
          I thrive on solving complex problems through creativity, combining my artistic sensibility with a methodical approach to design. 
          For me, UX is where art meets science—a space where I can craft intuitive, meaningful experiences that improve lives. 
          Every project is an opportunity to merge my curiosity about people with my drive to create solutions that are not only functional but also delightful. 
          This blend of empathy, creativity, and problem-solving is why I chose to dedicate my career to UX design.
        </>
      ),
    },
    imageProps: {
      src: career,
      srcSet:
        career,
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
