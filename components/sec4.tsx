// Gradient.tsx
import React from 'react';

export function Gradient2() {
  return (
    <div className="relative gradient-section flex justify-center items-center bg-gradient-to-b from-transparent to-white text-center text-black mt-8 px-4 mb-20" style={{ position: 'absolute', top: 900 , width: '100%', zIndex: 10 }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h3 className="text-3xl md:text-5xl font-bold">Simplify Savings: Invest</h3>
          <h3 className="text-3xl md:text-5xl font-bold">in Crypto Easily</h3>
        </div>
        <div className="mb-8">
          <p className="text-xl md:text-3xl">Seamlessly Manage Your Savings:</p>
          <p className="text-xl md:text-3xl">Crypto Investments Await</p>
        </div>
        <div className="flex justify-center mb-20 mt-20">
          <div className="w-5 h-5 bg-gray-200  rounded-full"></div>
          <div className="w-5 h-5 bg-indigo-500 rounded-full ml-2"></div>
          <div className=" mb-1  w-12 h-5 bg-gray-200 rounded-full ml-2"></div>
        </div>
        <div className="w-52 h-12 bg-indigo-500 rounded-full flex justify-center items-center cursor-pointer hover:bg-indigo-600 shadow-lg transition duration-300 ease-in-out mx-auto mb-12">
          <div className="text-white font-semibold">Next</div>
        </div>
      </div>
    </div>
  );
}
