import React from 'react';
import Image from 'next/image';
import NavBar from '@/components/NavBar';

function Page() {
  return (
    <div className="w-screen h-auto overflow-x-hidden text-pretty relative">
      <NavBar />
      {/* Background Animation */}
      <div className="w-[400vw] h-screen fixed left-0 top-0 -z-10 flex animate-moveLeft">
        <Image src={'/BG.svg'} width={1024} height={1024} className="w-screen h-screen object-cover -z-10" alt="bg" />
        <Image src={'/BG.svg'} width={1024} height={1024} className="w-screen h-screen object-cover -z-10 scale-x-[-1]" alt="bg" />
        <Image src={'/BG.svg'} width={1024} height={1024} className="w-screen h-screen object-cover -z-10" alt="bg" />
        <Image src={'/BG.svg'} width={1024} height={1024} className="w-screen h-screen object-cover -z-10 scale-x-[-1]" alt="bg" />
      </div>
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center w-screen h-screen relative">
        <div className="flex items-center justify-center flex-col gap-10 text-center">
          <Image src={'/Logo.svg'} width={600} height={600} className="lg:w-auto lg:h-auto w-60" alt="logo" />
          <span className="capitalize text-lg px-10 lg:text-3xl font-bold">
            “Beda” means “Different” in Bahasa Indonesia
          </span>
        </div>
        <span className="capitalize text-lg px-10 lg:text-2xl w-3/5 mt-10 font-light text-center">
          At BEDA, we offer inclusive coaching, workplace training, and consultancy to support individuals and organizations across Australia. Our services focus on mental health, neurodiversity, and tailored solutions for lasting impact.
        </span>
      </div>
      <HowCanWeHelp />
    </div>
  );
}

export default Page;

const HowCanWeHelp = () => {
  return (
    <div className="w-screen h-auto flex flex-col items-center justify-center relative font-semibold p-4 lg:p-40 text-center gap-8">
      <ProvidedServices />
    </div>
  );
};

const ProvidedServices = () => {
  return (
    <div className="w-screen h-auto flex flex-col">
      {/* Service 1 */}
      <div className="flex w-full min-h-screen justify-center" id='one_on_one'>
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src={'/icons/1to1 Coaching.png'}
            width={600}
            height={600}
            className="object-cover w-[750px]"
            alt="One-on-One Sessions"
          />
        </div>
        <div className="w-1/2 flex gap-6 flex-col justify-center items-start text-left pr-32">
          <span className="text-7xl font-semibold">One-On-One Sessions</span>
          <span className="text-2xl font-light">
            Our One-On-One Sessions offer a dedicated space for personalized and inclusive coaching, tailored to meet
            the unique needs of neurodivergent individuals, queer communities, and people of color. We understand that
            everyone's journey is different, which is why our approach is focused on creating a safe, empathetic, and
            supportive environment where you can truly be yourself. These sessions are designed to help you navigate
            challenges, foster personal growth, and enhance overall wellbeing.
          </span>
        </div>
      </div>

      {/* Service 2 */}
      <div className="flex w-full min-h-screen justify-center" id='consultancy'>
        <div className="w-1/2 flex gap-6 flex-col justify-center items-start text-left pl-32">
          <span className="text-7xl font-semibold">Consultancy</span>
          <span className="text-2xl font-light">
            Unlike traditional training programs that offer generic solutions, our consultancy services are designed to address the unique complexities of your organization. We work hand-in-hand with you to understand your challenges, uncover hidden opportunities, and create tailored strategies that align with your goals. Our focus is not just on immediate fixes but on implementing sustainable, long-term solutions that promote deep and impactful inclusivity.
            Through our consultancy, we aim to empower your organization to embrace diversity, foster a culture of belonging, and ensure that every member of your team feels valued and supported. Whether it's redesigning policies, enhancing workplace practices, or introducing innovative initiatives, we are dedicated to driving meaningful change. With a collaborative approach, we provide the tools, insights, and expertise you need to overcome obstacles, create measurable outcomes, and build a stronger, more inclusive future.
          </span>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src={'/icons/Consultancy.png'}
            width={600}
            height={600}
            className="object-cover w-[950px]"
            alt="Consultancy"
          />
        </div>
      </div>


      {/* Service 3 */}
      <div className="flex w-full min-h-screen justify-center" id='training'>
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src={'/icons/tra.png'}
            width={600}
            height={600}
            className="object-cover w-[750px]"
            alt="One-on-One Sessions"
          />
        </div>
        <div className="w-1/2 flex gap-6 flex-col justify-center items-start text-left pr-32">
          <span className="text-7xl font-semibold">Workplace Training</span>
          <span className="text-2xl font-light">
            We provide bespoke guidance on mental health, neurodiversity, and inclusivity, tailored to meet the unique needs of each organization. Recognizing that every workplace is different, we go beyond a one-size-fits-all approach by offering personalized strategies that address your specific challenges and goals. Our tailored solutions are designed to foster mental well-being, promote neurodiversity, and enhance inclusivity in a way that is practical and sustainable. By working closely with your organization, we create lasting, meaningful change that empowers individuals to thrive in an inclusive environment.
          </span>
        </div>
      </div>



    </div>
  );
};
