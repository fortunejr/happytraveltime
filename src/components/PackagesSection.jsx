import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles/PackagesSection.css'; // custom CSS for responsive styling

const PackagesSection = () => {
  return (
    <div className="packages-wrapper">
        <h2 className="section-heading">Our Packages</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ type: 'progressbar' }}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        className="packages-swiper"
      >
        <SwiperSlide>
          <div className="package-slide">
            <img src="/images/poland.png" alt="Poland Package" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="package-slide">
            <img src="/images/romania.png" alt="Romania Package" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="package-slide">
            <img src="/images/serbia.png" alt="Serbia Package" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="package-slide">
            <img src="/images/uk-worker.jpg" alt="Serbia Package" />
          </div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default PackagesSection;
