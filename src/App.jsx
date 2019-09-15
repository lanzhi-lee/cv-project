import React, { useState, useEffect } from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import './App.scss';

import { Header } from './components/index'
import { Contact, Exp, Home, Self, Skill } from './view'

function App() {
  const [GlobalSwiper, setSwiper] = useState({})
  const [currentSlide, setCurrentSlide] = useState(0)

  const renderPagination = current => {
    setCurrentSlide(current - 1)
    return `
      <span 
          class="swiper-pagination-custom-item 
          swiper-pagination-clickable 
          ${current === 1 && 'swiper-pagination-custom-item-active'}"
          onclick="swiper.slideTo(0)"
        >
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-index"></use>
            </svg>
      </span>

      <span 
          class="swiper-pagination-custom-item 
          swiper-pagination-clickable 
          ${current === 2 && 'swiper-pagination-custom-item-active'}"
          onclick="swiper.slideTo(1)"
        >
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-self"></use>
            </svg>
      </span>

      <span 
          class="swiper-pagination-custom-item 
          swiper-pagination-clickable 
          ${current === 3 && 'swiper-pagination-custom-item-active'}"
          onclick="swiper.slideTo(2)"
        >
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-skill"></use>
            </svg>
      </span>

      <span 
          class="swiper-pagination-custom-item 
          swiper-pagination-clickable 
          ${current === 4 && 'swiper-pagination-custom-item-active'}"
          onclick="swiper.slideTo(3)"
        >
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-exp"></use>
            </svg>
      </span>

      <span 
          class="swiper-pagination-custom-item 
          swiper-pagination-clickable 
          ${current === 5 && 'swiper-pagination-custom-item-active'}"
          onclick="swiper.slideTo(4)"
        >
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-contact"></use>
            </svg>
      </span>
    `
  }

  // 初始化swiper
  useEffect(() => {
    const mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      hashNavigation: true,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: (swiper, current) => renderPagination(current)
      }
    })
    setSwiper(mySwiper)
    window.swiper = mySwiper
  }, [])

  return (
    <div className="App">
      <Header {...{ GlobalSwiper, currentSlide }} />
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide swiper-slide1" data-hash="index"><Home /></div>
          <div className="swiper-slide swiper-slide2" data-hash="self"><Self /></div>
          <div className="swiper-slide swiper-slide1" data-hash="skill"><Skill /></div>
          <div className="swiper-slide swiper-slide2" data-hash="exp"><Exp /></div>
          <div className="swiper-slide swiper-slide3" data-hash="contact"><Contact /></div>
          {/* <div className="swiper-slide swiper-slide3" data-hash="edu"><Edu /></div> */}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default App;
