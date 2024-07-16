// Gradient.tsx
import React from 'react';

export function Gradient() {
  return (
    <div className="relative gradient-section flex justify-center items-center bg-gradient-to-b from-transparent to-white text-center text-black mt-8 px-4 mb-20" style={{ position: 'absolute', top: 900 , width: '100%', zIndex: 10 }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h3 className="text-3xl md:text-5xl font-bold">World&apos;s Most Powerful</h3>
          <h3 className="text-3xl md:text-5xl font-bold">Crypto Exchange</h3>
        </div>
        <div className="mb-8">
          <p className="text-xl md:text-3xl">Elevating Crypto Trading: The Global</p>
          <p className="text-xl md:text-3xl">Dominance of Our Exchange</p>
        </div>
        <div className="flex justify-center mb-20 mt-20">
          <div className="w-5 h-5 bg-indigo-500  rounded-full"></div>
          <div className="w-5 h-5 bg-gray-200 rounded-full ml-2"></div>
          <div className=" mb-1  w-12 h-5 bg-gray-200 rounded-full ml-2"></div>
        </div>
        <div className="w-52 h-12 bg-indigo-500 rounded-full flex justify-center items-center cursor-pointer hover:bg-indigo-600 shadow-lg transition duration-300 ease-in-out mx-auto mb-12">
          <div className="text-white font-semibold">Next</div>
        </div>
      </div>
    </div>
  );
}
