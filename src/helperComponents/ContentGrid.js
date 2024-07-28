import React from 'react';
import ContentCard from './ContentCard';
import './HelperComps.css'

const ContentGrid = ({ items }) => {
  return (
    <div className="content-grid">
      {items.map((item, index) => (
        <ContentCard
          key={index}
          title={item.title}
          date={item.date}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default ContentGrid;
