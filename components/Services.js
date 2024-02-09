import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Manrope, Raleway } from 'next/font/google';
import Image from 'next/image';


const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});
const manrope = Manrope({
    weight: ['400', '700'],
    subsets: ['latin'],
});

function Services() {
    const [advisory, setAdvisory] = useState(false);
    const [research, setResearch] = useState(false);
    const [paperTrade, setPaperTrade] = useState(false);
    const [unlistedShares, setUnlistedShares] = useState(false);


    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className={`${raleway.className} flex w-screen justify-center items-center my-64`}>

<div className='flex flex-col justify-center items-center'>
                <div className={`${manrope.className}  font-bold flex space-x-5 `}>
                    <h1 className='text-6xl text-center'>What Services We Offer?</h1>
                </div>

                <div className=' flex justify-start items-center space-y-10 space-x-10 xl:space-y-0 my-20'>
                    <div className=' flex justify-end  space-x-10 '>
                        <div
                            class={`${raleway.className}  flex justify-center items-center flex-col space-y-10 bg-white border border-gray-200 rounded-2xl shadow-lg h-[300px] w-[400px]  hover:cursor-pointer transition ease-in-out  hover:shadow-2xl duration-300`}>
                            <Image width={800} height={1200} src="/service1.png" alt="service1" className='w-28 h-28 object-cover rounded-2xl' />
                            <h1 className='text-4xl font-bold '>Advisory</h1>
                        </div>
                        <div
                            class={`${raleway.className}  flex justify-center items-center flex-col space-y-10 bg-white border border-gray-200 rounded-2xl shadow-lg h-[300px] w-[400px]  hover:cursor-pointer transition ease-in-out  hover:shadow-2xl duration-300`}>
                            <Image width={800} height={1200} src="/service2.png" alt="service2" className='w-28 h-28 object-cover rounded-2xl' />
                            <h1 className='text-4xl font-bold '>Unlisted Shares</h1>
                        </div>
                        <div
                            class={`${raleway.className}  flex justify-center items-center flex-col space-y-10 bg-white border border-gray-200 rounded-2xl shadow-lg h-[300px] w-[400px]  hover:cursor-pointer transition ease-in-out  hover:shadow-2xl duration-300`}>
                            <Image width={800} height={1200} src="/service3.png" alt="service3" className='w-28 h-28 object-cover rounded-2xl' />
                            <h1 className='text-4xl font-bold '>Research</h1>
                        </div>
                        <div
                            class={`${raleway.className}  flex justify-center items-center flex-col space-y-10 bg-white border border-gray-200 rounded-2xl shadow-lg h-[300px] w-[400px]  hover:cursor-pointer transition ease-in-out  hover:shadow-2xl duration-300`}>
                            <Image width={800} height={1200} src="/service4.png" alt="service4" className='w-28 h-28 object-cover rounded-2xl' />
                            <h1 className='text-4xl font-bold '>Paper Trade</h1>
                        </div>

                    </div>

                </div>

            </div>
        </motion.div>

    )
}

export default Services