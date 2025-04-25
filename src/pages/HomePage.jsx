import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css'; // create this CSS file
import HeroSection from '../components/HeroSection';
import PackagesSection from '../components/PackagesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import OurServicesSection from '../components/OurServicesSection';

const HomePage = () => {
  return (
    <div >
      <HeroSection/>
      <PackagesSection/>
      <WhyChooseUsSection/>
      <OurServicesSection/>
    </div>
  );
};

export default HomePage;
