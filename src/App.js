import './App.css';

import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Categories from './components/Categories/Categories';
import Signin from './components/Signin/Signin';
import toast, { Toaster } from 'react-hot-toast';
import Signup from './components/Signup/Signup';
import NoPages from './components/Nopages/Nopages';
import { AuthnProvider } from './context/AuthntictionContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Brands from './components/Brands/Brands';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { CartContextProvider } from './CartContext/CartContext';
import OrderDatials from './components/cartDatails/cartdatials';
import Wishlist from './components/wishlist/Wishlist';

function App() {
  
   let query_client=new QueryClient()

  return (
   
        <div className="">
          <BrowserRouter>
          <QueryClientProvider client={query_client}>
          <AuthnProvider>
          <CartContextProvider>
           <Toaster></Toaster>
            
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Product />} />
                  <Route path="Cart" element={<ProtectedRoute> <Cart /></ProtectedRoute>} />
                  <Route path="Categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
                  <Route path="Wishlist" element={<ProtectedRoute><Wishlist/></ProtectedRoute>} />
                  <Route path="Signin" element={<Signin />} />
                  <Route path="Signup" element={<Signup />} />
                  <Route path="ProductDetails/:id/:category" element={ <ProductDetails/>} />
                  <Route path="*" element={<NoPages />} />
                  <Route path="Brands" element={<ProtectedRoute><Brands /></ProtectedRoute>} />
                  <Route path="orders" element={<ProtectedRoute><OrderDatials/></ProtectedRoute>} />
                </Route>
              </Routes>
         
            </CartContextProvider>
                
            </AuthnProvider>
            </QueryClientProvider>
          </BrowserRouter>
        </div>
    
    
    
  
  );
}

export default App;
