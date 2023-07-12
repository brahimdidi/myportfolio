import React from 'react'
import './testimonials.css';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = (props) => {
  const { testimonials } = props
  const testimonialItem = (t, index) => {
    return (
      <SwiperSlide key={index} className='testimonial'>
        <div className="client-avatar">
          <img src={t.image} alt={"imageof" + t.name} />
        </div>
        <h5 className='client-name'>{t.name}</h5>
        <small className='client-review'>{t.review}</small>
      </SwiperSlide>
    )
  }
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials-container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((t, index) => testimonialItem(t, index))}
      </Swiper>
    </section>
  )
}

export default Testimonials