import React from 'react';
import ImageSplit from './ImageSplit';
import TextSplit from './TextSplit';

const HeroSection = ({ isImageFirst, textProps, imageProps }) => {
  return (
    <section className={isImageFirst ? 'hero-heading-right' : 'hero-heading-left'}>
      <div className="container">
        <div className="hero-wrapper">
          {isImageFirst ? (
            <>
              <ImageSplit {...imageProps} />
              <TextSplit {...textProps} />
            </>
          ) : (
            <>
              <TextSplit {...textProps} />
              <ImageSplit {...imageProps} />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
