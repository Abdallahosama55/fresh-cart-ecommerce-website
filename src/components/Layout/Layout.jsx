import React, { Fragment } from 'react'
import Navbar from '../Navber/Navbar'
import Footer from '../Footer/Footer'
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <Fragment>
   <Navbar/>
   <Outlet />
   <Footer/>
   </Fragment>
  )
}

export default Layout