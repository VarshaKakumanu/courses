import React from 'react'
import { Link } from "react-router-dom";

const Sub4 = () => {
  return (
    <div>
    <div className="flex flex-col p-4 g-3 h-screen items-center justify-center">
      <h1 className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-2 mb-4 font-bold text-2xl rounded">
        Introduction to Computers
      </h1>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
      <Link to="/" class="bg-pink-500 mb-3 hover:bg-purple-700 m-4 text-white font-bold py-2 px-4 rounded">Back</Link>
    </div>
  </div>
  )
}

export default Sub4