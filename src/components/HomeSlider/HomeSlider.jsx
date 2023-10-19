import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import img1 from '../../assets/1696837476a0380d7c0073866e341cd64cfed71e94_thumbnail_2000x.jpg'
import img2 from '../../assets/1696837506ff3ce61f9bbb74c85813133d14feca7a_thumbnail_2000x.webp'
import img3 from '../../assets/Ana_Araby_collection-Mobile-AR.webp'
import img4 from '../../assets/1152x252_AR-(1).jpg'
import img5 from '../../assets/gucci-valigeria-2023-ad-campaign-the-impression-003.jpg'
import img6 from '../../assets/DdQKxPZN1F4wH5FvvMlyRNI17MOO4GMcY8uzEk4s.webp'

import "slick-carousel/slick/slick-theme.css";
function HomeSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
      
      };
  return (
    <div className=''>
    

        <Slider {...settings}>
          <div>
           <img src={img1}  style={{height:"420px"}} className=' w-100  ' ></img>
          </div>
          <div>
          <img src={img2} style={{height:"420px"}} className=' w-100  height:300px'></img>
          </div>
          <div>
          <img src={img3}   style={{height:"420px"}} className=' w-100  height:300px'></img>
          </div>
          <div>
          <img src={img4}  style={{height:"420px"}} className=' w-100  height:300px'></img>
          </div>
          <div>
          <img src={img5}  style={{height:"420px"}} className=' w-100  height:300px'></img>
          </div>
          <div>
          <img src={img6}  style={{height:"420px"}} className=' w-100  height:300px'></img>
          </div>
        </Slider>
    
    </div>
  )
}

export default HomeSlider