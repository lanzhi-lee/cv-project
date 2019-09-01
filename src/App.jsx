import React, { useState, useEffect } from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import './App.scss';

import { Header } from './components/index'
import { Contact, Edu, Exp, Home, Self, Skill } from './view'

function App() {
  const [GlobalSwiper, setSwiper] = useState({})

  // 初始化swiper
  useEffect(() => {
    const mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      hashNavigation: true,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      }
    })
    setSwiper(mySwiper)
  }, [])

  return (
    <div className="App">
      <Header {...{ GlobalSwiper }} />
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide swiper-slide1" data-hash="index"><Home /></div>
          <div className="swiper-slide swiper-slide2" data-hash="self"><Self /></div>
          <div className="swiper-slide swiper-slide3" data-hash="edu"><Edu /></div>
          <div className="swiper-slide swiper-slide1" data-hash="skill"><Skill /></div>
          <div className="swiper-slide swiper-slide2" data-hash="exp"><Exp /></div>
          <div className="swiper-slide swiper-slide3" data-hash="contact"><Contact /></div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default App;
