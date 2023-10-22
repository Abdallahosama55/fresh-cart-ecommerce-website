import React, { useContext, useState, useEffect } from 'react';
import { CartContextadd } from '../../CartContext/CartContext';
import { Fragment } from 'react';
import { Button, Figure } from 'react-bootstrap';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { Oval } from 'react-loader-spinner';
import toast from 'react-hot-toast';

function OrderDatials() {
  const { GettProductTocart, CartProduct ,DelProduct ,NumbercartItems,AddProductTocart,UpdateProduct ,TotelcartPrice} = useContext(CartContextadd);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading_btn, setIsLoading_btn] = useState([]);
  const [isLoading_btn2, setIsLoading_btn2] = useState([]);

async function incrementProduct(id,count){
  const loadingArray = [...isLoading_btn];
  loadingArray[id] = true;
  setIsLoading_btn(loadingArray);
const res = await UpdateProduct(id,count)
if(res.status==="success"){

  setIsLoading_btn(loadingArray);
  toast.success("product add successfully",{duration:2000})
}
else {
  toast.error("product not add try again",{duration:2000})
}

loadingArray[id] = null;
setIsLoading_btn(loadingArray);

  }
  
async function  DecrementProduct(id,count){
  const loadingArray = [...isLoading_btn2];
  loadingArray[id] = true;
  setIsLoading_btn2(loadingArray);
  const res = await UpdateProduct(id,count)
  if(res.status==="success"){
    toast.success("product decreament successfully",{duration:2000})
  }
  else {
    toast.error("product not deleted, try again",{duration:2000})
  }
  loadingArray[id] = null;
  setIsLoading_btn2(loadingArray);
    }
 
 
 async function DeleteProduct(id){

  
  const res=await DelProduct(id)
  if(res.status==="success"){
    toast.success("product Delted successfully",{duration:2000})
  }
  else {
    toast.error("product Delted Falid",{duration:2000})
  }
  

 }
 

  if (CartProduct===null) {
    return <>
    <div className=" d-flex justify-content-center align-items-center mt-5 py-5 ">
    <Oval
  height={80}
  width={80}
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#4fa94d"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>


    
</div>
    
    
    </>;
  }

  if (!CartProduct || CartProduct.length === 0) {
    return (
      <div className="container mt-5 mb-5 p-3 h-75  bg-light shadow rounded justify-content-center align-items-center p-2 ">
        <div className="row ">
          <div className="col py-5">
          <div className="d-flex justify-content-center ">
          <div>
            <p className="text-muted text-center w-100">Nothing in the cart.</p>
            <button className=" btn btn-success shadow rounded-1 ">Shopping Now </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Fragment>
      <div className="container mt-5 mb-5 p-3 pb-5">
        <div className="row shadow rounded justify-content-center align-items-center p-2 bg-light p-md-5">
          {CartProduct ? (
            CartProduct.map((product, idx) => (
              <Fragment key={idx}>
                <div className="col-md-2">
                  <Figure className="p-1 d-flex justify-content-center align-items-center">
                  {product.product.imageCover ?
                    <img src={product.product.imageCover} className="w-100" alt="Product" />
                 :<div className=" d-flex justify-content-center align-items-center ">
                 <Oval
  height={80}
  width={80}
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#4fa94d"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>

                 
                 
                 </div> }
                  </Figure>
                </div>
                <div className="col-md-7 gy-3">
                <h4>{product.product.title}</h4>
                  <p className=" text-muted">{product.product.category.name}</p>
                  <p className=" text-muted">{product.product.brand.name}</p>
                  <p className="text-muted">{ product.price} EGP</p>

                  <button className="btn btn-outline-success d-flex justify-content-center align-items-center" onClick={()=>{DeleteProduct(product.product.id)}} >
                    <span><RiDeleteBin5Fill size={15} /></span>
                    <span>remove</span>
                  </button>
                </div>
                <div className="col-md-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <button className="btn btn-success p-2"  onClick={()=>{incrementProduct(product.product.id,(product.count)+1)}}>
                    {isLoading_btn[product.product.id]?    <div className=" d-flex justify-content-center align-items-center p-0 ">
                    <Oval
                  height={25}
                  width={25}
                  color="#4fa94d"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel='oval-loading'
                  secondaryColor="#4fa94d"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                
                />
                
                    
                </div>:"+"}
                    </button>
                    <span className="p-3">{product.count}</span>
                    <button className="btn btn-success p-2" onClick={()=>{DecrementProduct(product.product.id,(product.count)-1)}}  >
                    
                    {isLoading_btn2[product.product.id]?    <div className=" d-flex justify-content-center align-items-center p-0 ">
                    <Oval
                  height={25}
                  width={25}
                  color="#4fa94d"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel='oval-loading'
                  secondaryColor="#4fa94d"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                
                />
                
                    
                </div>:"-"}
                    
                    </button>
                  </div>
                </div>

             
              </Fragment>
            ))
          ) : (
            <p>No products in the cart.</p>
          )}
          <div className=" row justify-content-end">
          <hr className="mt-5 mb-5 p-3"></hr>
          <div className="col-12 bg-white w-md-25 w-sm-100  p-5 rounded-2 ">
          <h3 className="text-success " >Total Price </h3>
  <h6>  {TotelcartPrice} EGP</h6>
  <h3 className="text-success " >Total items </h3>
  <h6>   {NumbercartItems} items</h6>



  <Button className="btn btn-success mt-2">Confirm Payment</Button>
         
          </div>
    
          
          </div>
        </div>
    
      </div>
   
     </Fragment>
  );
}

export default OrderDatials;