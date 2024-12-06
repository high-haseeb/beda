"use client";

import React from 'react';
import Link from "next/link";

function NavBar() {

    return (
        <div className="fixed top-8 right-0 lg:right-10 flex items-center justify-center gap-4 lg:w-auto w-full text-base lg:text-2xl z-50">
            <Link href={'/about'}>About</Link>
            <Link href={'/services'}>Services</Link>
            <Link href={'#footer'}>Contact</Link>
        </div>
    );

}

export default NavBar;
