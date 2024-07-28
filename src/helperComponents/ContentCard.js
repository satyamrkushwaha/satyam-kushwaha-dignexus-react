import React from 'react';
import './HelperComps.css'

const ContentCard = ({ title, date, description, image }) => {
  return (
    <div className="content-card">
      <img src={image} alt={title} className="content-image" />
      <div className="content-details">
        <h2 className="content-title">{title}</h2>
        <p className="content-date">{date}</p>
        <p className="content-description">{description}</p>
      </div>
    </div>
  );
};

export default ContentCard;

