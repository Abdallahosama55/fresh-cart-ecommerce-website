import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ThreeDots}from  'react-loader-spinner';
import { authcontext } from '../../context/AuthntictionContext';

function Signin() {
  const {setToken}= useContext(authcontext)
const[errmsg,setErrormsg]=useState(null)
  const[sucessmsg,setSuccessmsg]=useState(null)
  const[isLoading,setIsLoading]=useState(null)
  
  const navigate =useNavigate();
  async function userlogin(values){
    setIsLoading(true)
try {
  console.log('sending to backend')
 const {data}=await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",values)

 if (data.message==="success"){
  console.log(data.token)
  setSuccessmsg("Account login sucessfully")
setToken(data.token)
localStorage.setItem("tkn", data.token);
 }

 setTimeout(() => {
  navigate('/')
 }, 1000);


} catch (error) {
  console.log('errorrrrr insending to backend')
  
  setErrormsg(error.response.data.message)
  
}
setTimeout(() => {
  setIsLoading(false)    
},1000 );

  }

  const formik = useFormik({

    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '',
      check:false
     
    },
    onSubmit: userlogin,
    validate:function(values){
      setErrormsg(null)
      const errors={};
  
      if(values.password.length<4 ||values.name>12){
        errors.password="password is not correct"
      }
      
      if(values.email.includes("@") === false ||values.email.includes(".")===false){
        errors.email="email not valid "
      }
   
      if (!values.check) {
        errors.check = 'You must check the box.';
      }
 
      
 
      
      
      return errors
          },

  });

  return (
    <div className='container shadow mb-4 mt-3'>
    <div className='row'>
    
    
 <div className='col-md-6 col-sm-12 justify-content-center align-content-md-center'>
 
 <img src={require('./../../assets/Shopping-rafiki.png')}/>
 
 
 
 
 
 </div>

 <div className='col-md-6 col-sm-12  d-flex justify-content-center  mt-5  '>
 <div className='d-block'>
<h1 className=' text-center  mt-5'>Welcome,Back </h1>
<p className='pb-2 text-center  text-gray'>Login to your account</p>
{errmsg?<div className='alert alert-danger'>{errmsg}</div>:""}
              
{sucessmsg?<div className='alert  alert-success '>{sucessmsg}</div>:""}

 <form  onSubmit={formik.handleSubmit} >
 <div className='d-flex'>

 <div >

  <div className="form-group">
  <input
  type="email"
  className="form-control border border-success border-1"
  id="email"
  aria-describedby="emailHelp"
  placeholder="Enter email"
  value={formik.values.email}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
/>
{formik.errors.email && formik.touched.email?<div className='text-danger mt-1 '>{"*"+formik.errors.email}</div>:""} 
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group mt-2">
  <input
  type="password"
  className="form-control border border-success border-1"
  id="password"
  placeholder="Password"
  value={formik.values.password}
  onBlur={formik.handleBlur}
  onChange={formik.handleChange}
/>
{formik.errors.password && formik.touched.password?<div className='text-danger mt-1 '>{"*"+formik.errors.password}</div>:""} 
   </div>
   <div className="form-check">
   <input
   type="checkbox"
   className="form-check-input mt-2"
   id="check"
   checked={formik.values.check}
   onChange={formik.handleChange}
   onBlur={formik.handleBlur}
 />
 
   <label className="form-check-label" htmlFor="exampleCheck1">
     Check me out
   </label>
 
   {formik.errors.check && formik.touched.check ? <div className="text-danger mt-1">{formik.errors.check}</div>:""}
   
     
   </div>


   <button type="submit" disabled={formik.isValid==false || formik.dirty ==false} className="btn btn-success  w-100 mt-3">
                  
                  
   {isLoading?<div className=' justify-content-center d-flex'><ThreeDots 
     height="30" 
     width="35" 
     radius="5"
     color="#4fa94d" 
     ariaLabel="three-dots-loading"
     wrapperStyle={{}}
     wrapperClassName=""
     visible={true}
      /></div>:"login"}
   
  </button>
  </div>
  </div>
  
</form>
 
 
 
 
</div>
 </div>
    </div>
    
    </div>
    
    
    
    
    
    
    
    
  )
}

export default Signin