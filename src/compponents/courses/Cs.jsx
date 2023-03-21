import React from 'react'
import { Link } from "react-router-dom";

function Cs() {
  return (
    <div>
      <div className='flex flex-col h-screen items-center justify-center p-4 g-3'>
        <Link to="" class="bg-pink-500 mb-3 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Introduction to Computers</Link>
        <Link to="" class="bg-pink-500 mb-3 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Programming</Link>
        <Link to="" class="bg-pink-500 mb-3 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Windows,Features and Applications</Link>
        <Link to="" class="bg-pink-500 mb-3 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Computer Organization</Link>
      </div>
    </div>
  )
}

export default Cs