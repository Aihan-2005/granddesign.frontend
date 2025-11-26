import React from 'react';

const AI = () => {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-[99999] flex items-center justify-center">
      <a
        href="https://LINK-TO-YOUR-AI-PROJECT.com" 
        target="_blank" 
        className="relative group cursor-pointer"
      >
        {/* 1. افکت تپش (Pulsing Effect) پشت دکمه */}
        <span className="absolute inset-0 w-full h-full bg-purple-500 rounded-full opacity-75 animate-ping group-hover:opacity-100 duration-1000"></span>
        
        {/* 2. دایره اصلی دکمه */}
        <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)] border-2 border-white/20 backdrop-blur-sm transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]">
          
          {/* 3. متن AI */}
          <span className="text-white font-black text-xl md:text-2xl tracking-tighter drop-shadow-md" style={{ fontFamily: 'sans-serif' }}>
            AI
          </span>

        </div>

        {/* 4. تولتیپ (متن راهنما) که موقع هاور ظاهر می‌شود */}
        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-4 bg-black/80 text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 whitespace-nowrap border border-white/10 backdrop-blur-md shadow-lg">
          دستیار هوشمند
          {/* فلش کوچک سمت چپ تولتیپ */}
          <span className="absolute top-1/2 right-full -mt-1 border-4 border-transparent border-r-black/80"></span>
        </span>
      </a>
    </div>
  );
};

export default AI;
