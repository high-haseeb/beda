import React from 'react'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import Portfolio from '@/components/Portfolio'
import Section from '@/components/Section'

function page() {
    return (
        <div className="w-screen h-auto overflow-x-hidden text-pretty relative">
            <NavBar />
            <div className="w-[400vw] h-screen fixed left-0 top-0 -z-10 flex animate-moveLeft">
                <Image src={'BG.svg'} width={1024} height={1024} className="w-screen h-screen object-cover -z-10" alt="bg" />
                <Image src={'BG.svg'} width={1024} height={1024} className="w-screen h-screen object-cover -z-10 scale-x-[-1]" alt="bg" />
                <Image src={'BG.svg'} width={1024} height={1024} className="w-screen h-screen object-cover -z-10" alt="bg" />
                <Image src={'BG.svg'} width={1024} height={1024} className="w-screen h-screen object-cover -z-10 scale-x-[-1]" alt="bg" />
            </div>
            <div className="flex flex-col items-center justify-center w-screen h-screen relative">
                <div className="flex items-center justify-center flex-col gap-10  text-center">
                    <Image src={'Logo.svg'} width={600} height={600} className="lg:w-auto lg:h-auto w-60" alt="bg" />
                    {/* <span className='capitalize text-xl px-10 lg:text-4xl absolute top-10 lg:left-10 left-0'>about page</span> */}
                    <span className="capitalize text-lg px-10 lg:text-3xl font-bold">“Beda” means “Different” in Bahasa Indonesia</span>
                </div>
                <span className='capitalize text-sm lg:text-2xl w-4/5 lg:mt-10 mt-5 font-light text-center'>
                    Different is Beda was founded with the vision of providing much-needed support and
                    guidance to individuals who often face unique challenges in navigating mental health due to
                    their neurodivergency, queer identity, and/or being a person of colour.
                    Our founder, Bernadette, herself a neurodivergent, queer person of colour, recognised the
                    lack of resources and understanding available to individuals like herself.
                    With a focus on addressing mental health, neurodivergency, and diversity, Beda strives to
                    support both individuals and organisations in creating a more inclusive and supportive
                    environment</span>
            </div>
            <Portfolio />
            <Coumunity />
        </div>
    )
}

export default page



const Coumunity = () => {
    return (
        <div className="w-screen h-auto lg:h-screen flex flex-col items-center justify-center relative font-semibold p-4 lg:p-40 text-center gap-8 _text-green-900">
            <span className="capitalize text-3xl lg:text-7xl font-bold">Our Commitment</span>
            {/* <span className="text-base lg:text-3xl">Based in Perth, WA, BEDA provides online coaching sessions, training and consultancy services for individuals and organisations across Australia.</span> */}
            <div className="flex lg:flex-row flex-col justify-around">
                <Section imgSrc={'/icons/about/Contact Us.png'} title={"Contact Us"} detail={"During this initial contact, we will gather some basic information to better understand your needs and preferences"} />
                <Section imgSrc={'/icons/about/Schedule.png'} title={"Schedule a Consultation"} detail={"Flexible scheduling options to accommodate your busy lifestyle and needs."} />
                <Section imgSrc={'/icons/about/Journey.png'} title={"Begin Your Journey"} detail={"Embark on the path to growth and well-being with a difference,Beda."} />
            </div>
        </div>
    )
}
