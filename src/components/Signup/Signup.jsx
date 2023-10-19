import * as axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ThreeDots}from  'react-loader-spinner'

function Signup() {
  const[errmsg,setErrormsg]=useState(null)
  const[sucessmsg,setSuccessmsg]=useState(null)
  const[isLoading,setIsLoading]=useState(null)
  
  const navigate =useNavigate('/login');
  async function newuser(values){
    setIsLoading(true)
try {
  console.log('sending to backend')
 const {data}=await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values)
 setSuccessmsg("Account created sucessfully")
 console.log(data)
 setTimeout(() => {
  navigate('/signin')
 }, 3000);


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
    onSubmit: newuser,
    validate:function(values){
      setErrormsg(null)
      const errors={};
      if(values.name.length<4 ||values.name.length>12){
        errors.name="name is not correct"
      }
      if(values.password.length<4 ||values.name>12){
        errors.password="password is not correct"
      }
      if(!(values.rePassword===values.password)){
        errors.rePassword="password is not match"
      }
      if(values.email.includes("@") === false ||values.email.includes(".")===false){
        errors.email="email not valid "
      }
      if(!values.phone.match(/^(02)?01[0125][0-9]{8}$/)){
        errors.phone="phone is not correct"
      }
      if (!values.check) {
        errors.check = 'You must check the box.';
      }
 
      
 
      
      
      return errors
          },

  });

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-sm-12 justify-content-center align-content-md-center'>
            <img src={require('./../../assets/Shopping bag-amico.png')} alt="shopping bag" />
          </div>
          <div className='col-md-6 col-sm-12 signin2 justify-content-center mt-5'>
            <div className='d-block'>
              <h1 className='text-center mt-5'>Register Now</h1>
              <p className='pb-2 text-center text-muted'>Shopping in an easy way</p>
              {errmsg?<div className='alert alert-danger'>This account is exists</div>:""}
              
              {sucessmsg?<div className='alert  alert-success '>{sucessmsg}</div>:""}
              
              <div className='container'>

                <form className='p-2' onSubmit={formik.handleSubmit}>
                  <div className="form-group pb-3">
                    <input
                      type="text"
                      className="form-control border border-success border-1"
                      id="name"
                      aria-describedby="emailHelp"
                      placeholder="Enter name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                   {formik.errors.name && formik.touched.name?<div className='text-danger mt-1 '>{"*"+formik.errors.name}</div>:""} 
                  </div>
                  <div className="form-group pb-3 w-100">
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
                    <small id="emailHelp" className=""></small>
                  </div>
                  <div className="form-group pb-3">
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
                  <div className="form-group pb-3">
                    <input
                      type="password"
                      className="form-control border border-success border-1"
                      id="rePassword"
                      placeholder="rePassword"
                      value={formik.values.rePassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.rePassword && formik.touched.rePassword?<div className='text-danger mt-1 '>{"*"+formik.errors.rePassword}</div>:""} 
                  </div>
                  <div className="form-group pb-3">
                    <input
                      type="tel"
                      className="form-control border border-success border-1"
                      id="phone"
                      placeholder="Phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.phone && formik.touched.phone?<div className='text-danger mt-1 '>{"*"+formik.errors.phone}</div>:""} 
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
                     /></div>:"Signup"}
                  
                 </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;