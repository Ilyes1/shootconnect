import React from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import DashboardSection from './components/DashboardSection'
import BenefitsSection from './components/BenefitsSection'
import NewsSection from './components/NewsSection'
import LoginSection from './components/LoginSection'
import AdvertiseSection from './components/AdvertiseSection'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Header />
        <HeroSection />
        <FeaturesSection />
        <DashboardSection />
        <BenefitsSection />
        <NewsSection />
        <LoginSection />
        <AdvertiseSection />
        <Footer />
    </div>
  )
}

export default Home