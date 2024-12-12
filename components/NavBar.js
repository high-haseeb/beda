"use client";

import React, { useState } from 'react';
import Link from "next/link";
import ServicesHandler from './ServicesHandler';
import Image from 'next/image';



function NavBar() {
  const [isVisible, setVisible] = useState(false);
  return (
    <div className="fixed top-8 right-0 lg:right-10 flex items-center justify-center gap-6 lg:w-auto w-full text-base lg:text-2xl z-50">
      <Link href={'/home'}>Home</Link>
      <Link href={'/about'}>About</Link>
      <Link href={'/services'} className='flex gap-1 justify-center items-center' onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>Services
        {isVisible && (
          <ServicesHandler />
        )
        }
      <Image src={'/icons/dropdown.svg'} width={60} height={60} className={`lg:w-6 lg:h-6 w-4 h-4 transition-all duration-200 ${isVisible ? "-rotate-180": ""}`}/>
      </Link>

      <Link href={'#footer'}>Contact</Link>
    </div>
  );
}
export default NavBar;






