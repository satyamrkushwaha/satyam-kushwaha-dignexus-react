import React from 'react'
import MainImg1 from '../assets/images/heroSection/hero-sec-1.png'
import MainImg2 from '../assets/images/heroSection/abudant-art.png'
import Slider from "react-slick";

export default function HeroSection({ image, title, description }) {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="hero-section-main-container">
            <div className='flex hero-subsection-main-container'>
                <div className="hero-left-section-main-container">
                    <img src={MainImg2} alt="Hero Section" className="hero-section-image" />
                </div>
                <div className="hero-right-section-main-container" >
                    <div style={{ width: "600px" }}>
                        <Slider {...settings}>
                            <div style={{ width: "200px" }}>
                                <img src={MainImg1} alt="Hero Section" className="hero-section-image1" />
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy...
                                </p>
                                <hr />
                                <p>ON JANUARY 31ST, 2024</p>

                            </div>
                            <div style={{ width: "200px" }}>
                                <img src={MainImg1} alt="Hero Section" className="hero-section-image1" />
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy...
                                </p>
                                <hr />
                                <p>ON JANUARY 31ST, 2024</p>

                            </div>
                            <div style={{ width: "200px" }}>
                                <img src={MainImg1} alt="Hero Section" className="hero-section-image1" />
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy...
                                </p>
                                <hr />
                                <p>ON JANUARY 31ST, 2024</p>

                            </div>
                            <div style={{ width: "200px" }}>
                                <img src={MainImg1} alt="Hero Section" className="hero-section-image1" />
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy...
                                </p>
                                <hr />
                                <p>ON JANUARY 31ST, 2024</p>

                            </div>
                            <div style={{ width: "200px" }}>
                                <img src={MainImg1} alt="Hero Section" className="hero-section-image1" />
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy...
                                </p>
                                <hr />
                                <p>ON JANUARY 31ST, 2024</p>

                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
            {/* <div className="hero-section-content-container">
            <h1 className="hero-section-title">{title}</h1>
            <p className="hero-section-description">{description}</p>
        </div>  */}
        </div>
    )
}
