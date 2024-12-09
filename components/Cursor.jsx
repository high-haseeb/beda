"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            if (cursorRef.current) {
                const cursor = cursorRef.current;
                cursor.style.top = `${e.clientY}px`;
                cursor.style.left = `${e.clientX}px`;
            }
        };

        const handleMouseEnterLink = () => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = "scale(1.5)";
                cursorRef.current.style.filter = "invert(1)";
            }
        };

        const handleMouseLeaveLink = () => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = "scale(1)";
                cursorRef.current.style.filter = "brightness(50%)";
            }
        };

        // Event listeners
        window.addEventListener("mousemove", moveCursor);
        document.querySelectorAll("a").forEach((link) => {
            link.addEventListener("mouseenter", handleMouseEnterLink);
            link.addEventListener("mouseleave", handleMouseLeaveLink);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.querySelectorAll("a").forEach((link) => {
                link.removeEventListener("mouseenter", handleMouseEnterLink);
                link.removeEventListener("mouseleave", handleMouseLeaveLink);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            style={{
                position: "fixed",
                zIndex: 999,
                width: "40px",
                height: "40px",
                pointerEvents: "none",
                transform: "scale(1)",
                transition: "transform 0.2s ease, filter 0.2s ease",
                filter: "brightness(50%)",
            }}
        >
            <Image src="/star.png" className="-translate-x-1/2 -translate-y-1/2 hidden lg:block" alt="Custom Cursor" width={40} height={40} />
        </div>
    );
};

export default CustomCursor;
