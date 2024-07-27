import React from 'react'
import Button from '../helperComponents/Button';
import Card from '../helperComponents/Card';
import Feature1 from '../assets/images/features/feature-1.png'
import SectionTitle from '../helperComponents/SectionTitle';
import FiveBoxGrid from '../helperComponents/FiveBoxGrid';
import Reviews from '../components/home/reviews';
import Projects from '../components/home/projects';
import Artzine from '../components/home/artzine';
import Features from '../components/home/features';

export default function Home() {
    return (
        <div className="home-main-container">
            <Artzine />
            <Reviews />
            <Features />
            <Projects />
        </div>
    )
}
