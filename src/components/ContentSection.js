import React from 'react';
import VideoEmbed from './VideoEmbed';
import ImageWithCaption from './ImageWithCaption';
import HighlightedText, { RenderContent } from './HighlightedText';

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
                    case 'highlighted-text':
                      return (
                        <p key={index}>
                          <HighlightedText
                            text={item.text}
                            phrases={item.highlight || []}
                          />
                        </p>
                      );
                    case 'heading':
                      return <h2 key={index}>{item.content}</h2>;
                    case 'strong':
                      return <strong key={index}>{item.content}</strong>;
                    case 'secondary':
                      return <div key={index} className="secondary-heading">{item.content}</div>;
                    case 'video':
                      return <VideoEmbed key={index} videoSrc={item.src} title={item.title} />;
                    case 'image':
                      return <ImageWithCaption key={index} src={item.src} caption={item.caption} />;
                    case 'list':
                      return (
                        <ul key={index}>
                          {item.items.map((listItem, idx) => (
                            <li key={idx}>
                              <RenderContent item={listItem} />
                            </li>
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
