import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import features1 from '../../../assets/icons/features-1.svg'
import features2 from '../../../assets/icons/features-2.svg'
import features3 from '../../../assets/icons/features-3.svg'
import features4 from '../../../assets/icons/features-4.svg'
import features5 from '../../../assets/icons/features-5.svg'
import features from '../../../assets/images/features.png'
import leftCircle from '../../../assets/images/left-circle.svg'
import middleCircle from '../../../assets/images/middle-circle.svg'

const FeaturesSection = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const sliderImages = [
        features,
        features,
        features,
        features,
        features
    ]

  return (
    <section className="features-section">

        <img src={leftCircle} className='features-left-circle' alt="" />

        <div className="container features-content">
            <h2 className="section-headline-light features-heading">Features</h2>

            <div className="row">
                <div className="col-lg-4 first-features-list">
                    <div className="features-items">
                        <div className="features-item">
                            <div className="features-item-icon">
                                <img src={features1} alt="" />
                            </div>
                            <div className="features-item-text">
                                <h6>Scores Tracking</h6>
                                <p>Easily track your scores and progress over time.</p>
                            </div>
                        </div>
                        <div className="features-item">
                            <div className="features-item-icon">
                                <img src={features2} alt="" />
                            </div>
                            <div className="features-item-text">
                                <h6>Find Clubs</h6>
                                <p>Locate and connect with shooting clubs near you.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 second-features-item">
                    <div className="features-center">
                        <Slider {...settings} className='features-slider'>
                            {
                                sliderImages.map((item, index) => (
                                    <div key={index}>
                                        <div className='features-slider-item'>
                                            <img src={item} alt="" />
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                        <img src={middleCircle} className='features-middle-circle' alt="" />
                    </div>
                </div>

                <div className="col-lg-4 third-features-item">
                    <div className="features-items">
                        <div className="features-item">
                            <div className="features-item-icon">
                                <img src={features3} alt="" />
                            </div>
                            <div className="features-item-text">
                                <h6>Communities and News</h6>
                                <p>Stay updated with the latest news and events in the shooting community.</p>
                            </div>
                        </div>
                        <div className="features-item">
                            <div className="features-item-icon">
                                <img src={features4} alt="" />
                            </div>
                            <div className="features-item-text">
                                <h6>Advetising Space</h6>
                                <p>Reach a targeted audience with our advertising options.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mx-auto fourth-features-item">
                    <div className="features-items">
                        <div className="features-item">
                            <div className="features-item-icon">
                                <img src={features5} alt="" />
                            </div>
                            <div className="features-item-text">
                                <h6>Manage Achievements</h6>
                                <p>Keep a record of your achievements and milestones.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                    
        </div>
    </section>
  )
}

export default FeaturesSection