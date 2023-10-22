import React from 'react'
import * as axios from 'axios';
import { useQuery } from 'react-query';
import Product from '../Product/Product';
import { Oval } from 'react-loader-spinner';
function Brands() {

function getAllBrands(){
  return axios.get('https://ecommerce.routemisr.com/api/v1/brands')
}

const{isError,isLoading,data}=useQuery("brands",getAllBrands)



if(isLoading){
  return <div className='d-flex justify-content-center align-items-center mt-5 p-5'>
  <Oval></Oval>
  </div>
}


  return (
    <div className=' shadow-lg p-3 border-4   bg-light  pb-5 rounded-5'>
    <div className='container '>

    <div className='row mt-5 mb-3'>
    {data?.data.data.map(function(brand,idx){return <div className='col-md-3 p-2 btn btn-light rounded '>
    <div className="card-body">
    <img src={brand.image} className='card-img-top'/>
    <h5 className='card-title w-100  text-sm-center text-success p-3'>{brand.name}</h5>
    
      </div>
      </div> })}
 
    
    </div>
    </div>
    
    </div>
  )
}

export default Brands