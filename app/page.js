import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="w-screen h-screen overflow-hidden flex items-center justify-center">
            <NavBar />
            <Image src={'BG.svg'} width={1024} height={1024} className="w-screen h-screen absolute top-0 left-0 object-cover -z-10" alt="bg" />
            <div className="flex items-center justify-center flex-col gap-10 text-center">
                <Image src={'Logo.svg'} width={600} height={600} className="lg:w-auto lg:h-auto w-60" alt="bg" />
                <span className="capitalize text-lg lg:text-3xl">honouring every intersection, empowering every journey</span>
            </div>
        </div>
    );
}

const NavBar = () => {
    return (
        <div className="fixed top-10 right-0 lg:right-10 flex items-center justify-center gap-4 lg:w-auto w-full text-base lg:text-2xl">
            <Link href={'/about'} >About</Link>
            <Link href={'/services'} >Services</Link>
            <Link href={'/contact'} >Contact</Link>
        </div>
    )
}
