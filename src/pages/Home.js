import React from 'react'
import Reviews from '../components/home/reviews';
import Projects from '../components/home/projects';
import Artzine from '../components/home/artzine';
import Features from '../components/home/features';
import Carousel from '../helperComponents/Carousel';
import Interviews from '../components/home/interviews';


export default function Home() {
    return (
        <div className="home-main-container">
            <Artzine />
            <Reviews />
            <Features />
            <Interviews />
            <Projects />
        </div>
    )
}
