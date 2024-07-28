import React from 'react'
import Slider from "react-slick";
import Card from './Card';

export default function Carousel({cards , buttonText}) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {cards && cards.map((card, index) => <div key={index}><Card {...card} buttonText={buttonText} /></div>)}
    </Slider>
  );
}