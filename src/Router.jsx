import React from 'react'
//Define routes
import { Routes, Route } from "react-router-dom";
//pages 
import Cs from './compponents/courses/Cs';
import Iot from './compponents/courses/Iot';
import Deveops from './compponents/courses/Deveops';
import Networking from './compponents/courses/Networking';
import Sub1 from './compponents/courses/cs/Sub1';
import Sub2 from './compponents/courses/cs/Sub2';
import Sub3 from './compponents/courses/cs/Sub3';
import Sub4 from './compponents/courses/cs/Sub4';

const Router = () => {
  return (
    
        <div>
        <Routes>
          <Route path="/" element={ <Cs /> } />
          <Route path="deveops" element={ <Deveops /> } />
          <Route path="networking" element={ <Networking /> } />
          <Route path="iot" element={ <Iot /> } />
          <Route path="sub1" element={ <Sub1 /> } />
          <Route path="sub2" element={ <Sub2 /> } />
          <Route path="sub3" element={ <Sub3 /> } />
          <Route path="sub4" element={ <Sub4 /> } />
        </Routes>
        </div>
  )
}

export default Router