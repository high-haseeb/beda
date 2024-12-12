import Image from "next/image";
import NavBar from "@/components/NavBar";
import Portfolio from "@/components/Portfolio";
import Section from "@/components/Section";

export default function Home() {
    return (
        <div className="w-screen h-auto overflow-x-hidden text-pretty relative">
            <NavBar />
            <div className="w-[400vw] h-screen fixed left-0 top-0 -z-10 flex animate-moveLeft">
                <Image src={'BG.svg'} width={1024} height={1024} className="w-screen h-screen object-cover -z-10" alt="bg" />
                <Image src={'BG.svg'} width={1024} height={1024} className="w-screen h-screen object-cover -z-10 scale-x-[-1]" alt="bg" />
                <Image src={'BG.svg'} width={1024} height={1024} className="w-screen h-screen object-cover -z-10" alt="bg" />
                <Image src={'BG.svg'} width={1024} height={1024} className="w-screen h-screen object-cover -z-10 scale-x-[-1]" alt="bg" />
            </div>
            <div className="flex flex-col items-center justify-center w-screen h-screen">
                <div className="flex items-center justify-center flex-col gap-10 text-center">
                    <Image src={'Logo.svg'} width={600} height={600} className="lg:w-auto lg:h-auto w-60" alt="bg" />
                    <span className="capitalize text-lg px-10 lg:text-3xl">honouring every intersection, empowering every journey</span>
                </div>
            </div>
            <HowCanWeHelp />
            <Portfolio />
        </div>
    );
}



const HowCanWeHelp = () => {
    return (
        <div className="w-screen h-auto lg:h-screen flex flex-col items-center justify-center relative font-semibold p-4 lg:p-40 text-center gap-8 _text-green-900">
            <span className="capitalize text-3xl lg:text-7xl font-bold">How can we help?</span>
            <span className="text-base lg:text-3xl">Based in Perth, WA, BEDA provides online coaching sessions, training and consultancy services for individuals and organisations across Australia.</span>
            <div className="flex lg:flex-row flex-col">
                <Section ID={'one_on_one'} imgSrc={'/icons/1to1 Coaching.png'} title={"One-On-One Sessions"} detail={"Safe, inclusive coaching for neurodivergent, queer, and people of colour—personalised support for better wellbeing."} />
                <Section ID={'training'} imgSrc={'/icons/Training.png'} title={"workplace training"} detail={"Bespoke guidance on mental health, neurodiversity, and inclusivity, tailored to the specific needs of each organisation—going beyond a one-size-fits-all approach."} />
                <Section ID={'consultancy'} imgSrc={'/icons/Consultancy.png'} title={"Consultancy"} detail={"Unlike training, we partner with organisations to solve complex challenges, create tailored strategies, and implement lasting solutions for deeper, impactful inclusivity."} />
            </div>
        </div>
    )
}
