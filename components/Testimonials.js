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

function Testimonials() {

    const [displayReview1, setDisplayReview1] = useState(false);
    const [displayReview2, setDisplayReview2] = useState(false);
    const [displayReview3, setDisplayReview3] = useState(false);
    return (

        // hidden on mobile screens
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className={`${manrope.className} hidden md:flex w-screen justify-center items-center my-20 `}>

            <section className=' text-7xl font-bold text-black space-y-4'>
                {/* First testimonial popover */}
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: displayReview1 ? 1 : 0 }}
                        transition={{ duration: 1 }}
                        class={` ${displayReview1 ? 'ml-[580px] -mt-[200px] z-10 absolute bg-gray-900 w-96 p-2 rounded-lg text-white' : 'hidden'} `}>
                        <div class="flex flex-col text-white text-sm font-medium mx-4 my-2">
                            <h1>❝</h1>
                            <p class={`${raleway.className} mb-6 text-left`}>Using this recruitment solution, we were able to streamline our hiring process and find the perfect candidates for our company. It has been a game-changer for our HR department!</p>
                            <div className='flex flex-col text-xs text-left'>
                                <p class={`${raleway.className}  `}>John Smith</p>
                                <p class={`${raleway.className}  text-gray-400`}>HR Manager</p>
                            </div>
                        </div>
                        {/* arrow */}
                        <div class="absolute left-[39px] bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-gray-900"></div>
                    </motion.div>
                </>
                {/* Second testimonial popover */}
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: displayReview2 ? 1 : 0 }}
                        transition={{ duration: 1 }}
                        class={` ${displayReview2 ? 'ml-56  z-20 absolute bg-gray-900 w-96  p-2 rounded-lg text-white' : 'hidden'} `}>
                        <div class="flex flex-col text-white text-sm font-medium mx-4 my-2">
                            <h1>❝</h1>
                            <p class={`${raleway.className} mb-6 text-left`}>We have tried several recruitment platforms, but none compare to this one. The comprehensive toolset, combined with its ease of use, has made our hiring process faster and more effective. We couldn't be happier with the results!</p>
                            <div className='flex flex-col text-xs text-left'>
                                <p class={`${raleway.className}  `}>David Anderson</p>
                                <p class={`${raleway.className}  text-gray-400`}>Hiring Manager</p>
                            </div>
                        </div>
                        {/* arrow */}
                        <div class="absolute left-0 top-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-gray-900"></div>
                    </motion.div>
                </>


                <section className='flex space-x-6'>
                    <h1 className='text-7xl font-bold'>We make it easy</h1>
                    <Image
                        src="/testimonial-1.jpg"
                        width={100}
                        height={100}
                        alt="testimonial"
                        onMouseEnter={() => setDisplayReview1(true)}
                        onMouseLeave={() => setDisplayReview1(false)}
                        className=' object-cover w-20 h-20 rounded-full '
                    />
                </section>

                <section className='flex space-x-6'>
                    <h1 className='text-7xl font-bold'>for</h1>
                    <Image
                        src="/testimonial2.avif"
                        width={100}
                        height={100}
                        alt="testimonial"
                        onMouseEnter={() => setDisplayReview2(true)}
                        onMouseLeave={() => setDisplayReview2(false)}
                        className='w-20 h-20 object-cover  rounded-full'
                    />
                    <h1 className='text-7xl font-bold'>recruiters and employees</h1>
                </section>
                <section className='flex space-x-6'>
                    <h1 className='text-7xl font-bold'>meet their needs</h1>
                    <Image
                        src="/testimonial3.avif"
                        width={100}
                        height={100}
                        alt="testimonial"
                        onMouseEnter={() => setDisplayReview3(true)}
                        onMouseLeave={() => setDisplayReview3(false)}
                        className='w-20 h-20 object-cover  rounded-full'
                    />
                    <h1 className='text-7xl font-bold'>within</h1>

                </section>
                <h1 className='text-7xl font-bold'>few clicks.</h1>
            </section>

            {/* Third testimonial popover */}
            <>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: displayReview3 ? 1 : 0 }}
                    transition={{ duration: 1 }}
                    class={` ${displayReview3 ? 'ml-[720px] mt-[120px]  z-10 absolute bg-gray-900 w-96 p-2 rounded-lg text-white' : 'hidden'} `}>
                    <div class="flex flex-col text-white text-sm font-medium mx-4 my-2">
                        <h1>❝</h1>
                        <p class={`${raleway.className} mb-6 text-left`}>As a recruiter, I highly recommend this online recruitment solution. It offers a user-friendly interface and advanced features that have significantly improved our efficiency in finding top talent. It has made our job so much easier!</p>
                        <div className='flex flex-col text-xs text-left'>
                            <p class={`${raleway.className}  `}>Emily Johnson</p>
                            <p class={`${raleway.className}  text-gray-400`}>HR Manager</p>
                        </div>
                    </div>
                    {/* arrow */}
                    <div class="absolute left-0 top-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-gray-900"></div>
                </motion.div>
            </>

        </motion.div>

    )
}

export default Testimonials