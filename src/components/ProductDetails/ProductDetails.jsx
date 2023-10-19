import * as axios from 'axios';
import React from 'react'
import { useContext ,useState} from 'react'
import { Col, Container, Figure, Row } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import {Oval, ThreeDots}from  'react-loader-spinner';

import { CartContextadd } from '../../CartContext/CartContext'

function ProductDetails() {
  const{AddProductTocart}=useContext(CartContextadd)
  const[isLoadingg,setIsLoadingg]=useState(null)
   const {id}= useParams()
   async function addProduct(idx){
    setIsLoadingg(true)
    try {
      const res =await AddProductTocart(idx)
  toast.success("product add successfully",{duration:2000})
    } catch (error) {
  console.log('not add')
    }
 setIsLoadingg(false)
  
    console.log()
   }
   function GetAllDetails(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
   }
  const{data,isLoading}= useQuery("productdetails",GetAllDetails)
   if(isLoading){
    return<>
    
    <div className='d-flex justify-content-center align-items-center'>
    <Oval>


    </Oval>
    </div>
    </>

   }
  return (
    <Container className='mt-md-5 py-5   rounded  border-light   mb-5 shadow'>
    <Container>
    <div className='row d-flex justify-content-center '>
 
  <div className=' col-md-3'>
  <Figure>
  <img src={data?.data.data.imageCover} alt={data?.data.data.imageCover} style={{height:"400px",width:"100%"}} className='w-100'/>
  
  </Figure>
  
  </div>
    
  <div className='col-md-9 py-md-5 '>
  
<h1>{data?.data.data.title}</h1>
  <p className=' text-muted  text-align-center'>{data?.data.data.description}</p>
  <h5 className='py-1' onClick={()=>{}} > price :{data?.data.data.price} EGP</h5>

  <button onClick={()=>{addProduct(data?.data.data.id)}} className='btn btn-success shadow  rounded w-75 ms-md-5 mt-5'>
  
                 
  {(isLoadingg)?<div className=' justify-content-center d-flex'><ThreeDots 
  height="30" 
  width="35" 
  radius="5"
  color="#4fa94d" 
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
   /></div>:"+ Add to cart"}

  
  
  
  
  </button>
  
  </div>
   
    

    
    
    
    </div>
    
    
    
    </Container>
    
    
    </Container>
  )
}

export default ProductDetails