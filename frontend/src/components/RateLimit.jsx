import React, { useState } from "react";
import { SlEnergy } from "react-icons/sl";
const RateLimit = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto h-40 ">
        <div className="flex items-center justify-start space-x-6  p-6    bg-green-900/40 max-w-6xl mx-auto">
          <div className="relative flex items-center justify-center">
            <SlEnergy size={60} className="relative z-20  text-green-400" />
            <span className="absolute -top-1 -left-1 w-18 h-18 rounded-full bg-green-200"></span>
          </div>

          <div className="text-white">
            <h2 className="font-bold text-2xl ">Rate Limit Reached</h2>
            <p className="font-semibold ">
              You've made too many requests in a short period. Please wait a
              moment
            </p>
            <p className="text-gray-300">
              Try again in a few seconds for the best experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimit;
