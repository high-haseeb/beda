import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="w-screen h-screen overflow-x-hidden text-pretty">
            <NavBar />
            <Image src={'BG.svg'} width={1024} height={1024} className="w-screen h-screen absolute top-0 left-0 object-cover -z-10" alt="bg" />
            <div className="flex flex-col items-center justify-center w-screen h-screen">
                <div className="flex items-center justify-center flex-col gap-10 text-center">
                    <Image src={'Logo.svg'} width={600} height={600} className="lg:w-auto lg:h-auto w-60" alt="bg" />
                    <span className="capitalize text-lg lg:text-3xl">honouring every intersection, empowering every journey</span>
                </div>
            </div>
            <HowCanWeHelp />
        </div>
    );
}

const NavBar = () => {
    return (
        <div className="fixed top-10 right-0 lg:right-10 flex items-center justify-center gap-4 lg:w-auto w-full text-base lg:text-2xl z-50">
            <Link href={'/about'} >About</Link>
            <Link href={'/services'} >Services</Link>
            <Link href={'/contact'} >Contact</Link>
        </div>
    )
}

const HowCanWeHelp = () => {
    return (
        <div className="w-screen h-auto lg:h-screen flex flex-col items-center justify-center relative font-semibold p-4 lg:p-40 text-center gap-8 _text-green-900">
            <span className="capitalize text-3xl lg:text-7xl font-bold">How can we help?</span>
            <span className="text-base lg:text-3xl">Based in Perth, WA, BEDA provides online coaching sessions, training and consultancy services for individuals and organisations across Australia.</span>
            <div className="flex lg:flex-row flex-col">
                <Section imgSrc={'/icons/1to1 Coaching.png'} title={"One-On-One Sessions"} detail={"Safe, inclusive coaching for neurodivergent, queer, and people of colour—personalised support for better wellbeing."} />
                <Section imgSrc={'/icons/Training.png'} title={"workplace training"} detail={"Bespoke guidance on mental health, neurodiversity, and inclusivity, tailored to the specific needs of each organisation—going beyond a one-size-fits-all approach."} />
                <Section imgSrc={'/icons/Consultancy.png'} title={"Consultancy"} detail={"Unlike training, we partner with organisations to solve complex challenges, create tailored strategies, and implement lasting solutions for deeper, impactful inclusivity."} />
            </div>
        </div>
    )
}
const Section = ({ imgSrc, title, detail }) => (
    <div className="flex flex-col items-center justify-center text-center p-10 gap-4 text-pretty">
        <Image src={imgSrc} width={600} height={600} className="lg:w-96 lg:h-auto w-60" alt="bg" />
        <span className="text-3xl font-bold capitalize">{title}</span>
        <span className="text-black text-sm lg:text-base font-light">{detail}</span>
    </div>
)
