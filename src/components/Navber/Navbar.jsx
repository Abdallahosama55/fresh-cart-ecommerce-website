import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiLogoInstagramAlt} from 'react-icons/bi';
import {BsFacebook } from 'react-icons/bs';
import {AiFillTwitterCircle } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from'../../assets/freshcart-logo.svg'
import {BsCart} from 'react-icons/bs';

import {LuLogOut} from 'react-icons/lu';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useContext,useState } from 'react';
import { authcontext } from '../../context/AuthntictionContext';
import {CartContextadd} from '../../CartContext/CartContext'
import { CardText } from 'react-bootstrap';
import OrderDatials from '../cartDatails/cartdatials';

function Navbar_comp() {
  const{  GettProductTocart}= useContext(CartContextadd)
  GettProductTocart()
  const{NumbercartItems}=useContext(CartContextadd)

console.log(NumbercartItems)
  
  const nav=useNavigate()
  const nav2=useNavigate()
 const {token, setToken}= useContext(authcontext)
function cartDetails(){

nav2('/orders')

}
 function logout(){
  localStorage.removeItem('tkn')
  setToken(null)
nav('/signin')
 }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand Link="#home"><Link to='/'><img src={logo}/></Link></Navbar.Brand>
        {!(token==null)? 
          <Nav.Link>
          <button type="button" onClick={cartDetails}  className="btn btn-light position-relative">
          <BsCart size={20}/>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      {NumbercartItems}
      <span className="visually-hidden">unread messages</span>
    </span>
  </button>
          
        </Nav.Link>
          :""}
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        {!(token==null)? 
      
        <Nav className="ms">
        <Nav.Link to="/signin"><Link to="/" className='link-nav'>Home</Link></Nav.Link>
        <Nav.Link to="/signup"><Link to="/brands" className='link-nav'>Brands</Link></Nav.Link>
        <Nav.Link to="/signup"><Link to="/categories" className='link-nav'>Categories</Link></Nav.Link>
  
 
      </Nav>:""}
        
       

          <Nav className="ms-auto">
          {(token==null)?
            <div className='d-flex'>
            <Nav.Link to="/signin"><Link to="/signin" className='link-nav'>Login</Link></Nav.Link>
            <Nav.Link to="/signup"><Link to="/signup" className='link-nav'>Register</Link></Nav.Link>
            </div> :("")}
           
       <div className='d-flex'>
       
       <Nav.Link to="#link"> <BsFacebook size={20} color='blue'/></Nav.Link>
       <Nav.Link to="#link"> <BiLogoInstagramAlt color='red' size={24}/></Nav.Link>
       <Nav.Link to="#link"> <AiFillTwitterCircle  size={24} /></Nav.Link>
      
       </div>
       <div className='d-flex ps-md-5 pe-md-2'>
       
     
        
        </div>
        {!(token==null)?
        <div className='d-flex ms-md-0'>
        <Nav.Link>    <span onClick={logout} className='link-nav'><LuLogOut size={25}/></span></Nav.Link>
        
        </div>:""}
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar_comp;