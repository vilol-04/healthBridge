import React from 'react'
import './SimpleImageSlider.css'
import HeroSlider, {Slide} from 'hero-slider'
// /dist/HeroSlider'
// import ml1 from './Mental_health/mental_health1.jpg'
// import ml2 from './Mental_health/mental_health2.jpg'
// import ml3 from './Mental_health/mental_health3.webp'
const img1 = "https://quotefancy.com/media/wallpaper/3840x2160/485880-Ralph-Waldo-Emerson-Quote-The-measure-of-mental-health-is-the.jpg";
const img2 = "https://quotefancy.com/media/wallpaper/800x450/4257635-William-J-Clinton-Quote-Mental-illness-is-nothing-to-be-ashamed-of.jpg";
const img3 = "https://www.yourfates.com/wp-content/uploads/2020/06/Mental-Health-Quotes-6-720x604.jpg";


export default function SimpleImageSlider() {
  return (
    <HeroSlider
    className='image'
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange",previousSlide, nextSlide)}
      onChange = {nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)"
      }}
      settings={{
        slidingDuration: 100,
        slidingDelay: 50,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "100vh",
        width: "80vh"
      }}
    >
      <Slide
        background={{
          backgroundImageSrc: img1,
          backgroundAttachment: "fixed"
          
        }}
        />
        <Slide
        background={{
          backgroundImageSrc: img2,
          backgroundAttachment: "fixed"
        }}
        />
         <Slide
        background={{
          backgroundImageSrc: img3,
          backgroundAttachment: "fixed"
        }}
        />

    </HeroSlider>
 
  )
} 
