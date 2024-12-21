import React from 'react';

const VideoEmbed = ({ videoSrc, title }) => {
  return (
    <figure className="w-richtext-align-fullwidth w-richtext-figure-type-video">
      <div>
        <iframe
          allowFullScreen
          frameBorder="0"
          scrolling="no"
          src={videoSrc}
          title={title}
        ></iframe>
      </div>
    </figure>
  );
};

export default VideoEmbed;
