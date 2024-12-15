import React from 'react';
import VideoEmbed from './VideoEmbed';
import ImageWithCaption from './ImageWithCaption';

const ContentSection = ({ content }) => {
  return (
    <div className="content-component">
      <div className="text-rich-text w-richtext">
        {content.map((item, index) => {
          if (item.type === 'text') {
            return <p key={index}>{item.content}</p>;
          }
          if (item.type === 'heading') {
            return (
              <h2 key={index}>
                <strong>{item.content}</strong>
              </h2>
            );
          }
          if (item.type === 'video') {
            return (
              <VideoEmbed
                key={index}
                videoSrc={item.src}
                title={item.title}
              />
            );
          }
          if (item.type === 'image') {
            return (
              <ImageWithCaption
                key={index}
                src={item.src}
                caption={item.caption}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default ContentSection;
