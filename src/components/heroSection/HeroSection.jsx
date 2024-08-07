import React from 'react'
import './HeroSection.css'
import heroImage1 from '../../assets/images/hero-img-1.png'
import heroImage2 from '../../assets/images/hero-img-2.png'
import googlePlay from '../../assets/images/google-play.svg'
import appStore from '../../assets/images/app-store.svg'
import bullet from '../../assets/icons/bullet.svg'
import circle from '../../assets/images/right-circle.svg'

const HeroSection = () => {
  return (
    <section className='hero-section'>
        <div className="hero-background"></div>
        <img src={circle} className='hero-circle' alt="circle" />
        <div className="container hero-content">
            <div className="row">
                <div className="col-lg-6">
                    <div className="hero-card">
                        <h1>Welcome to ShootConnect <span>Your Ultimate Clay Pigeon Shooting Companion</span></h1>
                        <div className="hero-card-app">
                            <a href="#" className='hero-card-app-link'>
                                <img src={googlePlay} alt="Google Play" />
                            </a>
                            <a href="#" className='hero-card-app-link'>
                                <img src={appStore} alt="App Store" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="hero-img">
                        <img src={heroImage1} alt="Perview" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="discover-card">
                        <h2 className='discover-mobile-title'>Discover ShootConnect</h2>
                        <img src={heroImage2} alt="Perview" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="discover-card">
                        <h2 className='discover-desktop-title'>Discover ShootConnect</h2>
                        <p>ShootConnect is the go-to app for clay pigeon shooting enthusiasts.</p>
                        <ul>
                            <li>
                                <img src={bullet} alt="bullet" />
                                Track your scores.
                            </li>
                            <li>
                                <img src={bullet} alt="bullet" />
                                Find clubs.
                            </li>
                            <li>
                                <img src={bullet} alt="bullet" />
                                Stay updated with the latest news in the shooting world.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection