import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import ContactPage from './pages/ContactPage'
import OurServicesPage from './pages/OurServicesPage'
import Footer from './components/Footer'
import { BrowserRouter,Route,Routes, Navigate } from "react-router-dom"
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route
        path='/'
        element={<HomePage/>}
        />

      <Route
        path='/about'
        element={<AboutUsPage/>}
        />

      <Route
        path='/contact'
        element={<ContactPage/>}
        />

      <Route
        path='/services'
        element={<OurServicesPage/>}
        />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
