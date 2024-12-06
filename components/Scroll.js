"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function ScrollToTop() {
    const [Visible, setIsVisible] = useState(false);
    useEffect(() => {
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
                    className="lg:w-14 lg:h-14 w-10 h-10 bg-black/45 text-white fixed rounded-full bottom-10 lg:right-10 right-4 z-50 flex items-center justify-center shadow-lg"
                >
                    ↑
                </button>
            )}
            <Link href={'/home'} className={`fixed lg:top-8 lg:left-10 top-4 left-4 ${Visible ? "opacity-100" : "opacity-0"} transition-opacity hidden lg:block`} >
                <Image src={"/LogoMark.svg"} alt='back to home' width={50} height={60} className='' />
            </Link>
        </div>
    );

}

export default ScrollToTop;
