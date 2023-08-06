import React, { useEffect, useRef } from 'react';
import './Cards.css'
import Swiper from 'swiper';
import $ from 'jquery';



import addiction from '../../assets/addiction.jpg'
import anxiety from '../../assets/anxiety.jpg'
import parenting from '../../assets/parenting.jpg'
// import reading from '../../assets/reading_club.jpg'
// import dance from '../../assets/dance_club.jpg'

const NewsSlider = () => {
  const bgRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;

    const handleMouseOver = (event) => {
      const x = event.target.getBoundingClientRect().left;
      const y = event.target.getBoundingClientRect().top;
      const width = event.target.getBoundingClientRect().width;
      const height = event.target.getBoundingClientRect().height;

      $('.item-bg').addClass('active');
      $('.news__item').removeClass('active');
      event.target.classList.add('active');

      bg.style.width = width + 'px';
      bg.style.height = height + 'px';
      bg.style.transform = `translateX(${x}px) translateY(${y}px)`;
    };

    const handleMouseLeave = () => {
      $('.item-bg').removeClass('active');
      $('.news__item').removeClass('active');
    };

    // Set up event listeners on ".news__item" elements
    $('.news__item').on('mouseover', handleMouseOver);
    $('.news__item').on('mouseleave', handleMouseLeave);

    // Initialize Swiper
    swiperRef.current = new Swiper('.news-slider', {
      effect: 'coverflow',
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      keyboard: true,
      spaceBetween: 0,
      slidesPerView: 'auto',
      speed: 300,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false,
      },
      breakpoints: {
        480: {
          spaceBetween: 0,
          centeredSlides: true,
        },
      },
      simulateTouch: true,
      navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev',
      },
      pagination: {
        el: '.news-slider__pagination',
        clickable: true,
      },     
        slideChange: function () {
          $('.news__item').removeClass('active');
        },
      
      
    });

    // Clean up event listeners and Swiper instance on component unmount
    return () => {
      $('.news__item').off('mouseover', handleMouseOver);
      $('.news__item').off('mouseleave', handleMouseLeave);

      swiperRef.current.destroy(true, true);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <><div  className="wrapper main">
      <div ref={bgRef} className="item-bg"></div>
      {/* Your JSX for the News Slider */}
      
      <div className="news-slider">
      <div  className="news-slider__wrp swiper-wrapper">
      <div  className="news-slider__item swiper-slide">
       <div   className="news__item" >
          <div  className="news-date">
            <span  className="news-date__title">Addiction Support Group</span>
            <span  className="news-date__txt"></span>
          </div>
          <div  className="news__title">
          Sobriety Seekers
          </div>

          <p  className="news__txt">
          Addiction support groups are specifically focused on substance abuse and behavioral addictions and the issues associated with recovery from addictions. Support groups are normally focused on a specific type of addiction that separates one group from another.          </p>

          <div  className="news__img">
            <img src={addiction}/>
          </div>
       </div>
      </div>

      <div  className="news-slider__item swiper-slide">
       <div   className="news__item">
          <div  className="news-date">
            <span  className="news-date__title">Parenting Support Group</span>
            <span  className="news-date__txt"></span>
          </div>
          <div  className="news__title">
          Empathy in Parenting
          </div>

          <p  className="news__txt">
          Parenting support groups assure parents of troubled teens that they are not alone. They can talk to others who understand the challenges and practicalities that they’re dealing with every day. Moreover they can blow off steam in a supportive, nonjudgmental environment.          </p>

          <div  className="news__img">
            <img src={parenting}/>
          </div>
       </div>
      </div>

      {/* <div  className="news-slider__item swiper-slide">
       <div   className="news__item">
          <div  className="news-date">
            <span  className="news-date__title">Poetry</span>
            <span  className="news-date__txt"></span>
          </div>
          <div  className="news__title">
          Soul's whispers, words embrace, poetry.
          </div>

          <p  className="news__txt">
          Poetry clubs offer a safe space for emotional expression, self-reflection, and connection, helping individuals process emotions and find solace through words.
          </p>

          <div  className="news__img">
            <img src={poetry}/>
          </div>
       </div>
      </div>

      <div  className="news-slider__item swiper-slide">
       <div   className="news__item">
          <div  className="news-date">
            <span  className="news-date__title">Reading</span>
            <span  className="news-date__txt"></span>
          </div>
          <div  className="news__title">
          Journey through pages, escape reality..
          </div>

          <p  className="news__txt">
          Book reading clubs provide an immersive escape, mental stimulation, and a sense of community, enabling individuals to find solace and understanding amidst life's challenges.
          </p>

          <div  className="news__img">
            <img src={reading}/>
          </div>
       </div>
      </div> */}

      <div  className="news-slider__item swiper-slide">
       <div   className="news__item">
          <div  className="news-date">
            <span  className="news-date__title">Anxiety Support Group</span>
            <span  className="news-date__txt"></span>
          </div>
          <div  className="news__title">
          Resilience Rendezvous
          </div>

          <p  className="news__txt">           
          The purpose of an anxiety support group is to connect individuals who struggle with anxiety in a community setting that allows them to share experiences, struggles, and coping mechanisms and fosters relationship development between members          </p>

          <div  className="news__img">
            <img src={anxiety}/>
          </div>
       </div>
      </div>

    
    
    
    </div></div></div></>
  );
};

export default NewsSlider;



