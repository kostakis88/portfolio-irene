import React from 'react';
import HeroSection from '../components/HeroSection';
import about from '../images/about.png';
import career from '../images/career.png';
import KeyStrengths from '../components/KeyStrengths';

const About = () => {
  const heroSectionOne = {
    isImageFirst: true,
    textProps: {
      heading: 'What kind of designer I am',
      content: (
        <>
          I am a passionate UX Designer dedicated to creating engaging and intuitive gaming experiences.
          Recently contributing to Firestone Idle RPG, I specialize in crafting gameplay mechanics and enhancing the quality of life for players.
          My design philosophy centers around empathy, usability, and evoking positive emotions, always striving to understand my audience deeply to solve problems effectively.
          <br />
          <br />
          I bring games to life through immersive UI/UX design, ensuring every interface feels seamless and aligned with the game’s world and aesthetic.
          With a strong foundation in visual and graphic design, I create cohesive in-game elements and captivating promotional materials that amplify a game’s presence.
          Data-informed and detail-oriented, I deliver thoughtful, end-to-end solutions that balance creativity with functionality.
          <br />
          <br />
          Beyond work, I’m inspired by exploring new cities, catching up on games I’ve been meaning to play, experimenting in Photoshop, and perfecting dessert recipes.
          <br />
          <br />
          My goal? To craft gaming experiences that leave players excited, immersed, and unforgettable!
        </>
      ),
      button: {
        label: 'RESUME',
      },
    },
    imageProps: {
      src: about,
      srcSet:
        about,
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
      <KeyStrengths />
    </>
  );
};

export default About;
