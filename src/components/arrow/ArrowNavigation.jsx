import React, { forwardRef } from 'react';
import {LineArrow} from '@/components/icons/LineArrow'; // Adjust this import path as per your project structure

const ArrowNavigation = forwardRef(({ prevRef, nextRef, className = '' }, ref) => {
  return (
    <div
      className={`flex gap-2 justify-start mt-6 md:mt-10 bottom-[-80px] left-0 md:flex ${className}`}
    >
      {/* Previous Button */}
      <button
        ref={prevRef}
        className="prev w-[66px] h-10 md:h-[50px] rounded-8.5 flex items-center justify-center bg-transparent duration-300 ease-out border-2 border-rb-black/60 hover:bg-rb-red hover:border-rb-red group"
      >
        <LineArrow className="text-rb-black max-w-[16px] group-hover:text-white" left />
      </button>

      {/* Next Button */}
      <button
        ref={nextRef}
        className="next w-[66px] h-10 md:h-[50px] rounded-8.5 flex items-center justify-center bg-transparent duration-300 ease-out border-2 border-rb-black/60 hover:bg-rb-red hover:border-rb-red group"
      >
        <LineArrow className="text-rb-black max-w-[16px] group-hover:text-white" />
      </button>
    </div>
  );
});

ArrowNavigation.displayName = 'ArrowNavigation';

export default ArrowNavigation;
