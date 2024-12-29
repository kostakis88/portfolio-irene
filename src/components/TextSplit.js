import React from 'react';
import ResumeButton from './ResumeButton';

const TextSplit = ({ heading, content, button }) => {
  return (
    <div className="hero-split">
      <h1 className="hero-heading">
        <sup>{heading}</sup>
      </h1>
      <p className="hero-margin">{content}</p>
      {button && <ResumeButton {...button} />}
    </div>
  );
};

export default TextSplit;
