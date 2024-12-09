"use client";

import React, { useState } from 'react';
import Link from "next/link";
import ServicesHandler from './ServicesHandler';



function NavBar() {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="fixed top-8 right-0 lg:right-10 flex items-center justify-center gap-4 lg:w-auto w-full text-base lg:text-2xl z-50">
      <Link href={'/home'}>Home</Link>
      <Link href={'/about'}>About</Link>
      <Link href={'/services'} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>Services
        {isVisible && (
          <ServicesHandler />
        )
        }
      </Link>
      <Link href={'#footer'}>Contact</Link>
    </div>
  );
}
export default NavBar;






