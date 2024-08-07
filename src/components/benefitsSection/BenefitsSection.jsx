import React from 'react'
import './BenefitsSection.css'
import background from '../../assets/images/benefits-background.jpg'
import thumbnail from '../../assets/images/benefits-thumbnail.jpg'
import videoPlay from '../../assets/images/video-play.svg'
import circle from '../../assets/images/benefits-circle.svg'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-parallax'

const BenefitsSection = () => {
  return (
    <section className="benefits-section">

        <Parallax
            bgImage={background}
            strength={200}
        >
            <div className="benefits-content">

                <img src={circle} alt="circle" className='benefits-circle' />

                <div className="container benefits-container">
                    <h1 className='section-headline-light'>For Shooting Grounds and Clubs</h1>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="benefits-video">
                                <img src={thumbnail} alt="Thumbnail" className='benefits-thumbnail' />
                                <img src={videoPlay} alt="Play" className='benefits-play-btn' />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="benefits-card">
                                <h5>Enhance Your Club's Profile with ShootConnect Premium</h5>
                                <p>
                                    Sign up for a premium profile to showcase your shooting ground. Add videos of your grounds and clay lines, provide detailed information about your facilities, and attract more shooters.
                                </p>
                                <Link to={'#'} className="default-btn">Sign Up for Premium</Link>
                            </div>
                        </div>
                    </div>

                    <div className="benefits-items">
                        <h2 className="benefits-items-headline">Benefits</h2>
                        <div className="benefits-item">
                            <div className="benefit-bullet"></div>
                            <span>Add Videos of Your Grounds</span>
                        </div>
                        <div className="benefits-item">
                            <div className="benefit-bullet"></div>
                            <span>Showcase Clay Lines and Facilities</span>
                        </div>
                        <div className="benefits-item">
                            <div className="benefit-bullet"></div>
                            <span>Attract More Shooters</span>
                        </div>
                        <div className="benefits-item">
                            <div className="benefit-bullet"></div>
                            <span>Provide Detailed Information</span>
                        </div>
                        <div className="benefits-item">
                            <div className="benefit-bullet"></div>
                            <span>Offer Exclusive Deals and Memberships</span>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    </section>
  )
}

export default BenefitsSection