import React from 'react';

const ImageWithCaption = ({ src, caption }) => {
  return (
    <figure className="w-richtext-align-fullwidth w-richtext-figure-type-image">
      <div style={{ cursor: 'pointer' }}>
        <img src={src} alt={caption || ''} loading="lazy" />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

export default ImageWithCaption;
