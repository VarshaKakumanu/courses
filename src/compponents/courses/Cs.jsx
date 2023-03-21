import React from 'react'
import { Link } from "react-router-dom";

function Cs() {
  return (
    <div>
      <div className='flex flex-col p-4 g-3 h-screen items-center justify-center'>
      <h1 className='box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-2 mb-4 font-bold text-2xl rounded'>Computer Science</h1>
        <Link to="sub1" class="bg-pink-500 mb-3 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Introduction to Computers</Link>
        <Link to="sub2" class="bg-pink-500 mb-3 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Programming</Link>
        <Link to="sub3" class="bg-pink-500 mb-3 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Windows,Features and Applications</Link>
        <Link to="sub4" class="bg-pink-500 mb-3 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Computer Organization</Link>
      </div>
    </div>
  )
}

export default Cs