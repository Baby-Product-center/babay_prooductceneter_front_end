import { Routes, Route, useNavigate, createSearchParams } from "react-router-dom"

import { NavBar } from "./components/navbar"
import { Products } from "./pages/products"
import { Product } from "./pages/product"
import { Data } from "./pages/product/data"
import { Cart } from "./pages/cart"
import { NotFound } from "./pages/not-found"

import { useCart } from './context/cart'

//import  {LandingPage} from './components/pages/LandingPage'
import {SignInPage} from './components/pages/LoginPage'
import {LandingPage} from "./components/pages/LandingPage";
import {SignUpPage} from './components/pages/RegisterPage'
import {ForgetPasswordPage} from './components/pages/ForgetPasswordPage'
import {HomePage} from './components/pages/HomePage'
import './App.css'
import {OrderPage} from "./components/pages/OrdersPage";
import {DeliveredOrderpage} from "./components/pages/preOrdersPage";
import {EditProductPage} from "./components/pages/ProductDetails";
import AddProductDetails from "./components/pages/AddProduct";

function App() {

  const navigate = useNavigate();
  const { cartItemCount } = useCart()

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }

  return (
      <>
        {/*<NavBar onSearch={onSearch} cartItemCount={cartItemCount()} />*/}
        {/*Icommit this part bcz of it will apper in every page find a solution for that*/}
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/landing" element={ <LandingPage/> } />
          <Route path="/login" element={ <SignInPage/> } />
          <Route path="/register" element={ <SignUpPage/> } />
          <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
          <Route path="/home" element={ <HomePage/> } />
          {/*//not deliverd orders*/}
          <Route path="/order" element={ <OrderPage/> } />
          {/*Deliverd orders*/}
          <Route path="/previous_order" element={ <DeliveredOrderpage/> } />
          {/*To edit product details*/}
          <Route path="/EditProductPage" element={ <EditProductPage/> } />
          <Route path="/AddProductPage" element={ <AddProductDetails/> } />

          <Route path="*" element={<NotFound />} />


        </Routes>
      </>
  );
}

export default App;
