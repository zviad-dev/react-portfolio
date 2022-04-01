import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client__name">Saimon Petrikov</h5>
          <small  className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus deserunt pariatur libero ad illo culpa quasi, atque nulla architecto! Adipisci a vel rem sequi debitis, natus cupiditate similique ad doloremque.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client__name">Saimon Petrikov</h5>
          <small  className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus deserunt pariatur libero ad illo culpa quasi, atque nulla architecto! Adipisci a vel rem sequi debitis, natus cupiditate similique ad doloremque.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client__name">Saimon Petrikov</h5>
          <small  className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus deserunt pariatur libero ad illo culpa quasi, atque nulla architecto! Adipisci a vel rem sequi debitis, natus cupiditate similique ad doloremque.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials