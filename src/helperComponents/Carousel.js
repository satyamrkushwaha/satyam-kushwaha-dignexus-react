import React from 'react'
import Slider from "react-slick";
import Card from './Card';

export default function Carousel({cards}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {cards && cards.map((card, index) => <div key={index}><Card {...card} /></div>)}
    </Slider>
  );
}