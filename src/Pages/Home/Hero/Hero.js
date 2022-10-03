import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { heroBanner } from '../../../temp/data';
import './Hero.css';

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="hero-container">
            <div className="hero-wrapper">
                <div className="hero-carousel">
                    <Slider {...settings}>
                        {
                            heroBanner.map((item, index) => <div className="hero-carousel-item" key={index}>
                                <img src={item} alt="" />
                            </div>)
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Hero;