import React from 'react';

const HeaderTitle = ({ title, subtitle, tags }) => {
  return (
    <div className="portfolio-header-content-left">
      <div className="margin-bottom margin-small">
        <h1>{title}</h1>
      </div>
      <div className="text-size-medium">{subtitle}</div>
      <div className="portfolio-header-tag-list">
        {tags.map((tag, index) => (
          <a
            key={index}
            href={tag.href}
            className="portfolio-header-tag-item w-inline-block"
          >
            <div className="tag-text">{tag.label}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeaderTitle;
