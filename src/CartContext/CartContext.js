import React, { createContext, useContext,useState ,useEffect } from 'react'
import * as axios from 'axios';
import Product from '../components/Product/Product'
import { authcontext } from '../context/AuthntictionContext'
export const CartContextadd=createContext()

export function CartContextProvider({children}) {
    const [CartProduct, setCartProduct] = useState(null)
    const [TotelcartPrice, setTotelcartPrice] = useState(0)        
    const [NumbercartItems, setNumbercartItems] = useState(0)
    const[WishlistCount,SetWishlistCount]=useState(0)

const [ Wishlist, setWishlist] = useState(null)
    const{token}=useContext(authcontext)
    async function AddProductTocart(Productid){
    try {
       
            const{data}=await axios.post('https://ecommerce.routemisr.com/api/v1/cart',{"productId":Productid},{headers:{"token":localStorage.getItem('tkn')}})
            console.log(data.data)
        

    setNumbercartItems(data.numOfCartItems)
    setTotelcartPrice(data.data.totalCartPrice)



          
            return data
        
    } catch (error) {
        console.log("errorr",error)
    }

    }
    async function GettProductTocart(){
        try {
                const{data}=await axios.get('https://ecommerce.routemisr.com/api/v1/cart',{headers:{"token":localStorage.getItem('tkn')}})
                setNumbercartItems(data.numOfCartItems)
                setTotelcartPrice(data.data.totalCartPrice)
                setCartProduct(data.data.products)
               
                return data
              
        } catch (error) {
                
                console.log("errorr2",error)
        }
}
   useEffect(() => {
        GettProductTocart()
   }, [])
   
async function DelProduct(id){
        try {
                const{data}=await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{headers:{"token":localStorage.getItem('tkn')}}) 
                setNumbercartItems(data.numOfCartItems)
                setTotelcartPrice(data.data.totalCartPrice)
                setCartProduct(data.data.products) 
                return data

        } 
        
        catch (error) {
                console.log(error,"error in deleted")
        }
}

async function UpdateProduct(id,count_value){
        try {
                const{data}=await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{"count":count_value},{headers:{"token":localStorage.getItem('tkn')}}) 
                setNumbercartItems(data.numOfCartItems)
                setTotelcartPrice(data.data.totalCartPrice)
                
                setCartProduct(data.data.products) 
                return data
                console.log("hallo price ",data.data.products)

        } 
        
        catch (error) {
                console.log(error,"error in updated")
        }

}


async function addProductTOwishList(id){

        
        try {
        const{data}= await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist',{"productId":id},{headers:{token:localStorage.getItem('tkn')}})  
       return data
        }
        catch(error){
                console.log(error,"error in add product to wishlist") 
        }
        }



        async function removeProductInwishList(id){

                try {
                        const{data}= await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{headers:{"token":localStorage.getItem('tkn')}})  
                        return data
                        
                } catch (error) {
                        
                console.log(error,"error in remove product to wishlist") 
                        
                }
                
             
        }
        async function Get_user_wishlist(){
                try {
                        
                        const{data}=  await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{headers:{"token":localStorage.getItem('tkn')}})  
                        SetWishlistCount(data.count)
                        setWishlist(data)
                        return data
                } catch (error) {
                        console.log(error,"error in get product from wishlist") 
                }
           

        }
        useEffect(() => {

                Get_user_wishlist()
        }, [])
        
  return (
    <CartContextadd.Provider value={{Wishlist,WishlistCount,removeProductInwishList,Get_user_wishlist,addProductTOwishList,AddProductTocart,DelProduct ,UpdateProduct,CartProduct,TotelcartPrice,NumbercartItems,GettProductTocart}}>
   {children}
   </CartContextadd.Provider>)
  
}

