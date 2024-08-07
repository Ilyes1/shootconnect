import React from 'react'
import Header from '../components/header/Header'
import HeroSection from '../components/heroSection/HeroSection'
import FeaturesSection from '../components/featuresSection/FeaturesSection'
import DashboardSection from '../components/dashboardSection/DashboardSection'
import BenefitsSection from '../components/benefitsSection/BenefitsSection'
import NewsSection from '../components/newsSection/NewsSection'
import LoginSection from '../components/loginSection/LoginSection'
import AdvertiseSection from '../components/advertiseSection/AdvertiseSection'
import Footer from '../components/footer/Footer'

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