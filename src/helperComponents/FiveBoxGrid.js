import React from 'react'
import './HelperComps.css'
import Card from './Card'


export default function FiveBoxGrid({ cardsData }) {
    
    return (
        <div className="five-box-grid-main-container">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                    date={card.date}
                    description={card.description}
                    buttonText={card.buttonText}
                />
            ))}
        </div>
    )
}
