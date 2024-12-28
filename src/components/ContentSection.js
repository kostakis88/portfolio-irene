import React from 'react';
import VideoEmbed from './VideoEmbed';
import ImageWithCaption from './ImageWithCaption';

const ContentSection = ({ content }) => {
  return (
    <section className="section-portfolio-content">
      <div className="padding-global">
        <div className="container-small">
          <div className="padding-section-large">
            <div className="content-component">
              <div className="text-rich-text w-richtext">
                {content.map((item, index) => {
                  switch (item.type) {
                    case 'text':
                      return <p key={index}>{item.content}</p>;
                    case 'heading':
                      return <h2 key={index}><strong>{item.content}</strong></h2>;
                    case 'video':
                      return <VideoEmbed key={index} videoSrc={item.src} title={item.title} />;
                    case 'image':
                      return <ImageWithCaption key={index} src={item.src} caption={item.caption} />;
                    case 'list':
                      return (
                        <ul key={index}>
                          {item.items.map((listItem, idx) => (
                            <li key={idx}>{listItem}</li>
                          ))}
                        </ul>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
