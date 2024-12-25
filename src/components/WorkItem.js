import React from 'react';
import { Link } from 'react-router-dom';

const WorkItem = ({ id, title, description, tags }) => {
  return (
    <Link to={`/work/${id}`} className="work-item-link">
      <div className="work-item">
        <div className="work-heading">
          <div className="text-size-medium text-weight-bold">{title}</div>
        </div>
        <p className="portfolio-description">{description}</p>
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
    </Link >
  );
};

export default WorkItem;
