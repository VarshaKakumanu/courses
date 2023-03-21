import React from 'react'
//Define routes
import { Routes, Route } from "react-router-dom";
//pages 
import Cs from './compponents/courses/Cs';
import Iot from './compponents/courses/Iot';
import Deveops from './compponents/courses/Deveops';
import Networking from './compponents/courses/Networking';

const Router = () => {
  return (
    
        <div>
        <Routes>
          <Route path="/" element={ <Cs /> } />
          <Route path="deveops" element={ <Deveops /> } />
          <Route path="networking" element={ <Networking /> } />
          <Route path="iot" element={ <Iot /> } />
        </Routes>
        </div>
  )
}

export default Router