import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css'; // create this CSS file
import HeroSection from '../components/HeroSection';

const HomePage = () => {
  return (
    <div >
      <HeroSection/>
    </div>
  );
};

export default HomePage;
