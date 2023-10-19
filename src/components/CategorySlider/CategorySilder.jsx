import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import { Grid } from  'react-loader-spinner'
import img1 from '../../assets/1696837476a0380d7c0073866e341cd64cfed71e94_thumbnail_2000x.jpg'
import img2 from '../../assets/1696837506ff3ce61f9bbb74c85813133d14feca7a_thumbnail_2000x.webp'
import img3 from '../../assets/1472682759-adidas-athletics.jpg'
import img4 from '../../assets/1152x252_AR-(1).jpg'
import img5 from '../../assets/gucci-valigeria-2023-ad-campaign-the-impression-003.jpg'
import img6 from '../../assets/DdQKxPZN1F4wH5FvvMlyRNI17MOO4GMcY8uzEk4s.webp'
import { useQuery } from 'react-query';
import * as axios from 'axios';

function CategorySilder() {
    function getsubcategory(){
        return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
      
      }

      const{data,isLoading}=useQuery("subcatgory",getsubcategory)
      console.log(data?.data.data)

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
      
      };
      if(isLoading){
        return <div className='d-flex justify-content-center align-content-center vh-100'><Grid
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        /></div>}
        
               
        

      
     
  return (
    <div className='home-slider p-2'>
    <h3>Categories </h3>
<Slider {...settings}>

{data?.data.data.map(function(category,idx){return <div>
    <img src={category.image}  style={{height:"300px"}} className=' w-100  ' ></img>
    <h6 className=' text-center mt-3'>{category.name}</h6>
   </div>})}
   
 
 </Slider>


       
    </div>
  )
}

export default CategorySilder