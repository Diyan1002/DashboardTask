import React, { useState, useEffect } from "react";
import leftImg from "../assets/Doctor.png";  
import rightImg from "../assets/Doctors.png"; 

function ProgressBar({ progress = 65 }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setAnimatedProgress(progress), 100);
    return () => clearTimeout(id);
  }, [progress]);

  return (
    <div className="w-full bg-gradient-to-r from-blue-200 to-blue-500 p-3 rounded-xl flex items-center justify-between">
      
      {/* LEFT IMAGE */}
      <img
        src={leftImg}
        alt="left"
        className="h-24 object-contain"
      />

      {/* CENTER PROGRESS */}
      <div className="flex-1 mx-6">
        
        {/* XP Labels */}
        <div className="flex justify-between text-sm font-semibold text-white mb-1">
          <span>500 XP</span>
          <span>800 XP</span>
        </div>

        {/* Progress Track */}
        <div className="relative w-full bg-blue-100 rounded-full h-5 overflow-hidden">
          
          {/* Filled Bar */}
          <div
            className="h-5 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-yellow-300 to-orange-400"
            style={{ width: `${animatedProgress}%` }}
          ></div>

          {/* Current XP Bubble */}
          <div
            className="absolute -top-6 transform -translate-x-1/2"
            style={{ left: `${animatedProgress}%` }}
          >
            <div className="bg-white text-blue-600 text-xs px-2 py-1 rounded-full shadow">
              {animatedProgress * 10} XP
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <img
        src={rightImg}
        alt="right"
        className="h-24 object-contain"
      />
    </div>
  );
}

export default ProgressBar;