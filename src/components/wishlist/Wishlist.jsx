import React, { useContext } from 'react'
import { Oval } from 'react-loader-spinner'
import { CartContextadd  } from '../../CartContext/CartContext'
import { Fragment } from 'react'

function Wishlist() {
    const{Get_user_wishlist,AddProductTocart,Wishlist}=useContext(CartContextadd)
  if(Wishlist===null)
  {
    return    <div className='d-flex justify-content-center align-items-center mt-5 py-5'>
    <Oval>


    </Oval>
    </div>
  }

  return (
    <div className='mt-5 p-5'>
    <div className=' container' >
 
    {Wishlist?.data.map((product,idx)=>(
      <Fragment key={idx} className=" shadow p-1 gy-1">
      <div className='row mb-3 p-5  shadow '>
      <div className='col-2  '>
      <div className=' figure p-1 d-flex justify-content-center align-items-center'  >
      <img   src={product.imageCover} className='w-100'   />
      
      </div>
      </div>
      <div className='col-7'>
      <div className=' container pt-5 '>
      <h3>{product.title}</h3>
      <p className='text-muted' >{product.description}</p>
      <p className='text-muted' >{product.category.name}</p>
      <p className='text-muted' >{product.brand.name}</p>
      <p className='text-black' >{product.price} EGP</p>

      </div>
      </div>
      <div className='col-2'>
      <div className='row justify-content-center align-items-center  pt-5'>
      <button className='btn btn-danger w-md-75 '>Remove</button>
      <button className='btn btn-success w-md-75 m-2 '>Add to cart</button>
      </div>
      
      </div>
      </div>
      </Fragment>

  ))}

    
   
    
  
  
    
    </div>
    
    
    

    
    
    </div>
  )
}

export default Wishlist