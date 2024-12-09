"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Section({ imgSrc, title, detail, scroll, ID }) {
    const [width, setWidth] = useState('w-1/3')
    useEffect(() => {
        if (scroll) {
            setWidth('w-full')
        } else {
            setWidth('w-1/3')
        }
    })
    return (
        <Link href={`/services#${ID}`} className={`flex flex-col items-center justify-center text-center p-10 gap-4 lg:${width} text-pretty`}>
            <Image src={imgSrc} width={600} height={600} className="lg:w-96 lg:h-auto w-60" alt="bg" />
            <span className="text-3xl font-bold capitalize">{title}</span>
            <span className="text-black text-sm lg:text-base font-light lg:w-4/6">{detail}</span>
        </Link>
    )
}

export default Section
