import React from 'react'
import './HelperComps.css'
import Button from './Button';

export default function Card({ image, title, date, description, buttonText, onButtonClick }) {


  return (
    <div className="card-main-container">
    <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <hr className="card-divider" />
        <p className="card-date">{date}</p>
        <p className="card-description">{description}</p>
        {buttonText && <Button text={buttonText} onClick={onButtonClick}  width={"60%"} />}
      </div>
    </div>
  )
}

