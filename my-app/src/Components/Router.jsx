import React from 'react'
import {Route,Routes} from "react-router-dom"
import Newarrivals from './newsrrivals'
import Home from './Home'
import ShopByCategory from './ShopByCategory'
import Cart from './cart'
import BigBrands from './BigBrands'
import Login from './Login'

const AllRouter = () => {
    
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ShopByCategory" element={<ShopByCategory />} />

        <Route path="/newarrivals" element={<Newarrivals />} />
        <Route path="/Cart" element={<Cart/>}/>   
        <Route path="/BigBrands" element={<BigBrands />}/>
        <Route path="/Login" element={<Login />}/> 
       
      </Routes>
    </div>
  )
}

export default AllRouter
