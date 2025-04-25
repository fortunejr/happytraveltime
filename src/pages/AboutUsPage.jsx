import React from 'react';
import '../styles/AboutPage.css'; // link to your CSS

const AboutUsPage = () => {
  return (
    <>
    <div className="about-section">
      <div className="about-text">
        <h2>
          We Are A Full Fledged Travel <span>Company.</span>
        </h2>
        <p>
          We deliver at all times, servicing our clients with their myriad of requests at the shortest response time.
          This is attested to by our numerous clients, getting real value for their money. Ours is to give to you,
          services unequal, to make you always come back.
        </p>
        <p>
          We offer top notch travel and tour experience with the latest values of the industry. This is where our
          experience counts as...
        </p>
        <div className="about-contact">
          <strong>HappyTravelTime</strong>
          <br />
          <a href="mailto:hello@happytraveltimelimited.com">hello@happytraveltimelimited.com</a>
        </div>
      </div>
      <div className="about-image">
        <img src='/images/travel.jpeg' alt="Travel illustration" />
      </div>
    </div>
    
    <section className="company-section">
      <div className="text-content">
        <h4 className="small-heading">OUR COMPANY</h4>
        <h2 className="main-heading">Trusted travel company</h2>
        <p className="description">
          Happy Travel Time is a registered travel company with head office in Lagos, Nigeria. Our broad range of travel services includes hotel bookings, Tourist visa, Study visa, Work permit & Visa, Hotel reservation, Flight bookings & Itinerary planning
        </p>
        <p className="description">
          Our vision is to make travel accessible for our clients through provision of affordable experiences, enabling them to explore as much destinations as possible. We also offer personalized services to our customers through one on one consultancy and through the provision of custom Visa application templates and online courses to enable such individuals handle their Visa application processes themselves when required.
        </p>
      </div>
      <div className="image-content">
        <img src="/images/banner-edit2.png" alt="HappyTravelTime" />
      </div>
    </section>
    </>
  )
}

export default AboutUsPage