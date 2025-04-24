import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css'; // create this CSS file
import HeroSection from '../components/HeroSection';
import PackagesSection from '../components/PackagesSection';

const HomePage = () => {
  return (
    <div >
      <HeroSection/>
      <PackagesSection/>
    </div>
  );
};

export default HomePage;
