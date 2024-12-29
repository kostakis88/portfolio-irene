import React from 'react';

const ResumeButton = ({label, className = '' }) => {
  const resumeUrl = '/resume.pdf';
  return (
    <a
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`button-primary ${className}`}
    >
      {label}
    </a>
  );
};

export default ResumeButton;
