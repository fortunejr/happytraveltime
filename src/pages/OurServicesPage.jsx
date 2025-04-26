import React from 'react';
import '../styles/OurServicesPage.css';

const services = [
  {
    title: "Tourist Visa",
    description: "Explore the world with ease. We assist in processing tourist visas to numerous countries, ensuring a smooth and stress-free experience.",
    image: "/images/tourist-visa.jpg",
  },
  {
    title: "Study Visa",
    description: "Pursue your dreams abroad! We help students secure study visas, offering guidance on documentation and interview preparations.",
    image: "/images/study-visa.jpg",
  },
  {
    title: "Work Permit & Visa",
    description: "Unlock global career opportunities with our work permit and visa services. We streamline your application to meet employment abroad requirements.",
    image: "/images/work-permit.png",
  },
  {
    title: "Hotel Reservation",
    description: "Stay comfortably wherever you go. We offer top-notch hotel booking services tailored to your budget and preferences.",
    image: "/images/hotel-reservation.png",
  },
  {
    title: "Flight Bookings & Itinerary Planning",
    description: "Travel smart and conveniently! Our team manages your flight bookings and designs perfect travel itineraries for a memorable trip.",
    image: "/images/flight.jpeg",
  },
];

const OurServicesPage = () => {
  return (
    <section className="our-services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-text">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="book-btn" onClick={() => alert(`Booking for: ${service.title}`)}>BOOK NOW</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurServicesPage;
