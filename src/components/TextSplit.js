import React from 'react';
import ButtonPrimary from './ButtonPrimary';

const TextSplit = ({ heading, content, button }) => {
  return (
    <div className="hero-split">
      <h1 className="hero-heading">
        <sup>{heading}</sup>
      </h1>
      <p className="hero-margin">{content}</p>
      {button && <ButtonPrimary {...button} />}
    </div>
  );
};

export default TextSplit;
