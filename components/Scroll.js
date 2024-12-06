"use client"
import React, { useState, useEffect } from 'react';

function ScrollToTop() {
  const [Visible, setIsVisible] = useState(false);
  useEffect(() => {
    const scrollY=window.scrollY
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {Visible && (
        <button
          onClick={scrollToTop}
          className="w-14 h-14 bg-black text-white fixed rounded-full bottom-10 lg:right-10 right-4 z-50 flex items-center justify-center shadow-lg"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
