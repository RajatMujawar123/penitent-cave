import React from 'react'
import {Route,Routes} from "react-router-dom"
import Newarrivals from './newsrrivals'
import Home from './Home'


const AllRouter = () => {
    
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        

        <Route path="/newarrivals" element={<Newarrivals />} />
                
            
      </Routes>
    </div>
  )
}

export default AllRouter
