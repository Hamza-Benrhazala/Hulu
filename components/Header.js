import Router from 'next/router';
import styles from '../styles/Home.module.css';
import requests from '../utils/requests.js';
import SwiperCore, {Controller, Navigation, Pagination, Scrollbar, A11y, Mousewheel, Keyboard} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Controller, Navigation, Pagination, Scrollbar, A11y, Mousewheel, Keyboard]);

export default function Header({key, title, controlledSwiper}) {

  return (
    <div>
      <Swiper
      className= {styles.nav}
      slidesPerView= {8}
      spaceBetween={10}
      setWrapperSize= "true"
      navigation= {
        { 
          nextEl: `.${styles.swiperButtonNext}`, 
          prevEl: `.${styles.swiperButtonPrev}`,
          disabledClass: `${styles.swiperButtonDisabled}`
        }
      }
      scrollbar= {{ draggable: true}}
      mousewheel= {{invert: true, sensitivity: 2}}
      breakpoints={
        {320: {slidesPerView: 2}, 425: {slidesPerView: 3}, 500: {slidesPerView: 4}, 1000: {slidesPerView: 8}}

      }
      >
      <div>
      {Object.entries(requests).map(([key, {title, url}]) =>                            
        <SwiperSlide key= {key}>
          <button
          id = {key}
          key= {key}
          onClick = {() => {Router.push(`?genre=${key}`)}}>
            {title}
          </button>
        </SwiperSlide>
        )}
      </div>
      <div className= {styles.swiperButtonPrev}></div>
      <div className={styles.swiperButtonNext}></div>
      </Swiper>  
    </div>
  )
}