import Image from "next/image";

const Footer = () => {
    return (
        <div className="w-screen flex justify-center items-center h-auto bg-white/50 py-10 mt-40" id="footer">
            <div className="flex lg:flex-row flex-col w-4/5 gap-10">
                <div className=" w-full lg:w-1/3 flex flex-col justify-center items-start lg:p-8 gap-8">
                    {/* Form styling */}
                    <form action="" className="flex flex-col gap-6 mt-4 w-full max-w-sm">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-3 rounded-md border-2 text-black border-black/50 bg-white focus:outline-none focus:ring-2"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-3 rounded-md border-2 text-black border-black/50 bg-white focus:outline-none focus:ring-2"
                        />
                        <input
                            type="tel"
                            placeholder="Your Phone"
                            className="p-3 rounded-md border-2 text-black border-black/50 bg-white focus:outline-none focus:ring-2"

                        />
                        <input
                            type="text"
                            placeholder="Your Message"
                            className="p-3 rounded-md border-2 text-black border-black/50 bg-white focus:outline-none focus:ring-2"

                        />
                    </form>
                    <button className="capitalize rounded-lg bg-[blue] lg:w-1/2 p-3 text-white text-xl font-semibold">
                        Book Appointment
                    </button>
                </div>


                {/* section 2 */}
                <div className="flex w-full lg:w-1/3 justify-start mt-8">
                <div className="w-full flex flex-col gap-5">
                    <Image src={"/flags/flag 1.jpg"} width={200} height={200} className="object-cover w-20"/>
                <span className="text-left font-light lg:text-xl text-sm">Difference in Beda acknowledges Aboriginal and Torres Strait Islander peoples as the traditional
custodians of the land on which we live and work. We value the oldest continuing culture in the
world, paying our respect to indigenous elders, past and present and also recognize their unique
and spiritual connection to country and waters.</span>
                </div>

                </div>



                {/* section 3 */}
                <div className="flex w-full lg:w-1/3 justify-start mt-8">
                    <div className="w-full flex flex-col gap-5">
                        <div className="flex w-full gap-2">
                            <Image src={"/flags/flag 2.jpg"} width={200} height={200} className="object-cover w-20" />
                            <Image src={"/flags/flag 3.jpg"} width={200} height={200} className="object-cover w-20" />

                        </div>
 
                <span className="text-left font-light lg:text-xl text-sm">Difference in Beda acknowledges remain committed to embracing and celebrating diversity and
eliminating all forms of discrimination in the provision of our services. We welcome all people
regardless of age, gender identity, ethnicity, ability, sexuality, faith, religion, and all other identities
represented in our community.</span>
                </div>
=
                </div>


            </div>
        </div>
    );
}

export default Footer;
