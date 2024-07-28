import React from 'react'
import MainImg1 from '../assets/images/heroSection/hero-sec-1.png'
import MainImg2 from '../assets/images/heroSection/abudant-art.png'

export default function HeroSection({ image, title, description }) {
    return (
        <div className="hero-section-main-container">
            <div className='flex hero-subsection-main-container'>
                <div className="hero-left-section-main-container">
                    <img src={MainImg2} alt="Hero Section" className="hero-section-image" />
                </div>
                <div className="hero-right-section-main-container">
                    <img src={MainImg1} alt="Hero Section" className="hero-section-image1" />
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy... 
                    </p>
                    <hr />
                    <p>ON JANUARY 31ST, 2024</p>
                </div>
            </div>
            {/* <div className="hero-section-content-container">
            <h1 className="hero-section-title">{title}</h1>
            <p className="hero-section-description">{description}</p>
        </div>  */}
        </div>
    )
}
