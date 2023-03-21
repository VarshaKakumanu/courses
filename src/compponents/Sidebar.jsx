import React, { useState } from 'react';
//Define routes
import { Routes, Route } from "react-router-dom";
import Cs from './courses/Cs';
import Iot from './courses/Iot';
import Deveops from './courses/Deveops';
import Networking from './courses/Networking';
//Use Link to navigate to routes
import { Link } from "react-router-dom";

function Sidebar() {
    const[showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed left-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer left-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      {/* define routes */}
      <div>
      <Routes>
        <Route path="/" element={ <Cs /> } />
        <Route path="deveops" element={ <Deveops /> } />
        <Route path="networking" element={ <Networking /> } />
        <Route path="iot" element={ <Iot /> } />
      </Routes>
      </div>

      <div
        className={`top-0 left-0 w-[35vw] bg-blue-600  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-y-0 " : "translate-y-full"
        }`}
      >
        <h3 className="mt-20 text-4xl  font-semibold text-white">
         Courses
        </h3>
        <div className='flex flex-col p-4 g-3'>
        <Link to="/" class="bg-pink-500 mb-3 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Computer science</Link>
        <Link to="iot" class="bg-pink-500 mb-3 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Internet Of Things</Link>
        <Link to="networking" class="bg-pink-500 mb-3 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Networking</Link>
        <Link to="deveops" class="bg-pink-500 mb-3 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Deveops</Link>
      </div>
      </div>
    </>
  );
};

export default Sidebar;