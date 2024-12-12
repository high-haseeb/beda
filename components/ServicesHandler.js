import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


function ServicesHandler() {
  return (
    <div className='lg:w-auto w-auto h-auto bg-white/95 absolute top-8 lg:right-0 right-10 z-50 rounded-xl '>
        <HowCanWeHelp/>
    </div>
  )
}

export default ServicesHandler





const HowCanWeHelp = () => {
    return (
        <div className="flex flex-col relative font-semibold text-center gap-3">
            <div className="flex flex-col">
                <NavSection ID={'one_on_one'} imgSrc={'/icons/1to1 Coaching.png'} title={"One-On-One Sessions"} detail={"Safe, inclusive coaching for neurodivergent, queer, and people of colour—personalised support for better wellbeing."} />
                <NavSection ID={'training'} imgSrc={'/icons/Training.png'} title={"workplace training"} detail={"Bespoke guidance on mental health, neurodiversity, and inclusivity, tailored to the specific needs of each organisation—going beyond a one-size-fits-all approach."} />
                <NavSection ID={'consultancy'} imgSrc={'/icons/Consultancy.png'} title={"Consultancy"} detail={"Unlike training, we partner with organisations to solve complex challenges, create tailored strategies, and implement lasting solutions for deeper, impactful inclusivity."} />
            </div>
        </div>
    )
}

const NavSection=({imgSrc, title, detail,ID})=>{
    return (
        <Link href={`/services#${ID}`} className={`flex items-center justify-center text-center lg:p-8 p-4 gap-4 text-pretty`}>
            {/* <Image src={imgSrc} width={600} height={600} className="lg:w-60 lg:h-auto _w-60 lg:block hidden" alt="bg" /> */}
            <span className="lg:text-xl text-xs font-bold capitalize">{title}</span>

            {/* <span className="text-black text-sm lg:text-base font-light lg:w-4/6">{detail}</span> */}
        </Link>
    )
}