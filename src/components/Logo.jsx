import React from 'react';

export default function Logo({ light = false, size = 'md' }) {
  const sizeClasses = {
    sm: { img: 'w-8 h-8', title: 'text-base sm:text-lg', subtitle: 'text-[8px] sm:text-[9px]' },
    md: { img: 'w-9 h-9 sm:w-11 sm:h-11', title: 'text-lg sm:text-xl md:text-2xl', subtitle: 'text-[8px] sm:text-[10px]' },
    lg: { img: 'w-12 h-12 sm:w-16 sm:h-16', title: 'text-xl sm:text-2xl md:text-3xl', subtitle: 'text-[10px] sm:text-xs' },
  }[size] || { img: 'w-9 h-9 sm:w-11 sm:h-11', title: 'text-lg sm:text-xl md:text-2xl', subtitle: 'text-[8px] sm:text-[10px]' };

  return (
    <div className="flex items-center gap-2 sm:gap-3 group select-none min-w-0">
      <img
        src="/logo.png"
        alt="Tiger Realtors Logo"
        className={`${sizeClasses.img} rounded-full object-cover shrink-0 shadow-md drop-shadow-sm group-hover:scale-105 transition-transform duration-300 border border-amber-400/40`}
      />
      <div className="min-w-0">
        <div className="flex items-center gap-1 sm:gap-1.5 leading-none">
          <span
            className={`font-serif ${sizeClasses.title} font-extrabold tracking-tight whitespace-nowrap transition-colors ${
              light ? 'text-white' : 'text-slate-900'
            }`}
          >
            Tiger <span className="text-amber-500 font-sans font-black">Realtors</span>
          </span>
        </div>
        <span
          className={`${sizeClasses.subtitle} tracking-wider sm:tracking-widest uppercase font-semibold block mt-0.5 sm:mt-1 truncate transition-colors ${
            light ? 'text-slate-300' : 'text-slate-500'
          }`}
        >
          Your Dream Home, Our Priority
        </span>
      </div>
    </div>
  );
}
