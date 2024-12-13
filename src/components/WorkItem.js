import React from 'react';

const WorkItem = ({ title, date, tags, description, href, hiddenText }) => {
  return (
    <div className="work-item">
      <div className="work-heading">
        <div className="text-size-medium text-weight-bold">{title}</div>
      </div>
      <p className="portfolio-date">{date}</p>
      <div className="tag-list">
        <div className="collection-list">
          {tags.map((tag, index) => (
            <div key={index} className="service-tag">
              <div>{tag}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
