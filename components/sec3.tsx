
import React from 'react';

export function Gradient() {
  return (
    <div className="gradient-section min-h-screen flex justify-center items-center bg-gradient-to-b from-transparent to-white text-center text-black px-4 md:px-8 mt-8 md:mt-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h3 className="text-3xl md:text-5xl font-bold">World's Most Powerful</h3>
          <h3 className="text-3xl md:text-5xl font-bold">Crypto Exchange</h3>
        </div>
        <div className="mb-8">
          <p className="text-xl md:text-3xl">Elevating Crypto Trading: The Global</p>
          <p className="text-xl md:text-3xl">Dominance of Our Exchange</p>
        </div>
        <div className="flex justify-center mb-12">
          <div className="w-6 h-6 bg-indigo-500 rounded-full"></div>
          <div className="w-4 h-4 bg-gray-200 rounded-full ml-2"></div>
          <div className="w-4 h-4 bg-gray-200 rounded-full ml-2"></div>
        </div>
        <div className="w-52 h-12 bg-indigo-500 rounded-full flex justify-center items-center cursor-pointer hover:bg-indigo-600 shadow-lg transition duration-300 ease-in-out mx-auto">
          <div className="text-white font-semibold">Next</div>
        </div>
      </div>
    </div>
  );
}
