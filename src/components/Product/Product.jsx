import React, { Fragment } from 'react'
import { useContext,  useEffect } from 'react'
import { authcontext } from '../../context/AuthntictionContext'
import * as axios from 'axios';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { Grid } from  'react-loader-spinner'
import {AiTwotoneStar} from 'react-icons/ai'

import { useQuery } from 'react-query';
import HomeSlider from '../HomeSlider/HomeSlider';
import CategorySilder from '../CategorySlider/CategorySilder';
import { Link } from 'react-router-dom';
function Product() {

  const {token}=useContext(authcontext);

 function getallProduct(){


    
  return  axios.get("https://ecommerce.routemisr.com/api/v1/products")  
 
  }
const{isError,isFetched,isLoading,data}=useQuery("allproduct",getallProduct)
  console.log(data?.data.data)


  return (
    <Fragment>


<Container className='p-5'>
<HomeSlider/>
<CategorySilder/>
{data?.data.data?<div className=' row  gy-3'>
{data?.data.data.map(function(product,idx){return <div key={idx} className='col-md-2'> <div className='product'>
<Link to={`/ProductDetails/${product.id}/${product.category.name}`} className='product-link'>
<img src={product.imageCover} className='w-100' alt='product'/>
<h6 className=' text-success pt-2 '>{product.category.name}</h6>
<h5>{product.title.split(' ').slice(0,2).join("-")}</h5>
<div className='row'>
<p className='col'>{product.price +" EGP"}</p>
<p className='col d-flex justify-content-center align-items-center'><AiTwotoneStar className=' text-warning  '/>{product.ratingsAverage}</p>

</div>

</Link>

</div></div>})}





</div>:<div className='d-flex justify-content-center align-content-center vh-100'><Grid
height="80"
width="80"
color="#4fa94d"
ariaLabel="grid-loading"
radius="12.5"
wrapperStyle={{}}
wrapperClass=""
visible={true}
/></div>}







</Container>
</Fragment>
   
  
  )
}

export default Product