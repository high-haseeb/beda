import React from 'react'
import Image from 'next/image'

function Portfolio() {
    return (
        <div className="w-screen h-screen lg:h-screen flex lg:flex-row flex-col items-center justify-center relative font-semibold p-4 lg:p-40 text-center gap-8 _text-green-900">
            <div className="w-full lg:w-1/2 capitalize flex flex-col text-center lg:text-left gap-4 lg:gap-8 items-center lg:items-start">
                <span className="text-4xl lg:text-7xl">Meet Bernadette</span>
                <Image src={"/DP.png"} width={600} height={600} className="lg:w-[500px] lg:h-auto w-60 rounded-full lg:hidden block" alt="bg" />
                <div className="text-sm lg:text-lg">
                    <span>A seasoned mental health professional with a formal ADHD diagnosis, Bernadette brings a unique perspective shaped by her Filipino heritage and upbringing in Jakarta, Indonesia. Now based in Australia, she understands the complexities of navigating diverse identities.</span>
                    <span>Believing in the power of meaningful conversations and comprehensive training, Bernadette excels at turning challenging topics into relatable, actionable insights. She emphasizes that information must be accessible to be truly impactful.</span>
                    <span>As the Engagement and Recovery Lead in mental health, Bernadette supports clients while providing supervision and training for support workers. Her expertise spans mental health and inclusive practices.</span>
                </div>
            </div>
            <Image src={"/DP.png"} width={600} height={600} className="lg:w-[500px] lg:h-auto w-60 rounded-full hidden lg:block" alt="bg" />
        </div>
    )
}

export default Portfolio
