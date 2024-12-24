import React from 'react';
import PropTypes from 'prop-types';

const ButtonPrimary = ({ href, label, target = '_self', rel = '', className = '' }) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`button-primary ${className}`}
    >
      {label}
    </a>
  );
};

ButtonPrimary.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
  className: PropTypes.string,
};

export default ButtonPrimary;
