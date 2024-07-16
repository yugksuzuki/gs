import React from 'react';

export function Gradient3() {
  return (
    <div 
      className="absolute flex justify-center items-center text-center text-black mt-8 px-4 mb-0"
      style={{ 
        position: 'absolute', 
        top: '60%', 
        width: '100%', 
        zIndex: 10, 
        backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 20%)' 
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h3 className="text-3xl md:text-5xl font-bold">Your Journey into the</h3>
          <h3 className="text-3xl md:text-5xl font-bold">Digital Economy</h3>
        </div>
        <div className="mb-8">
          <p className="text-xl md:text-3xl">Welcome to CryptoConnect: Your </p>
          <p className="text-xl md:text-3xl">Journey into the Economy</p>
        </div>
        <div className="flex justify-center mb-20 mt-20">
          <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
          <div className="w-5 h-5 bg-gray-200 rounded-full ml-2"></div>
          <div className="mb-1 w-12 h-5 bg-indigo-500 rounded-full ml-2"></div>
        </div>
        <div className="w-52 h-12 bg-indigo-500 rounded-full flex justify-center items-center cursor-pointer hover:bg-indigo-600 shadow-lg transition duration-300 ease-in-out mx-auto mb-6">
          <div className="text-white font-semibold">Next</div>
        </div>
        <div className="flex justify-center items-center mb-12">
          <p className="text-xl md:text-3xl">Don't have an account?</p>
          <p className="text-xl md:text-3xl text-indigo-500 ml-1 "> Register</p>
        </div>
      </div>
    </div>
  );
}
