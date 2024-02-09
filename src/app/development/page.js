"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Raleway } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';


const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});

function page() {
    return (
        <>
            {/* Hidden on large screens */}

            <div className='md:hidden flex justify-center items-center'>
                <Link
                    href="/"
                    className='object-contain rounded-full cursor-pointer p-4 transition hover:bg-gray-300 hover:duration-150'>
                    <Image
                        src='/back.png'
                        width={25}
                        height={25}
                        alt="back icon"
                    />
                </Link>

                <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-3xl text-center p-10 `} >Back to Home</h1>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className='md:hidden flex flex-col items-center space-y-5'>


                <div className=''>
                    <Image
                        src="/underdevelopment1.gif"
                        width={1700}
                        height={1700}
                        alt="sideimage"
                        className='object-contain'
                    />
                </div>
                <div className={`${raleway.className}  space-y-5 my-6`}>
                    <h1 className='text-3xl font-bold'>Coming Soon...<br /></h1>
                    <h1 className='text-lg font-normal'>The site is under development</h1>
                </div>
            </motion.div>

            {/* Hidden on mobile screens */}
            < div className='hidden md:flex flex-col mt-10 mx-32' >
                <div className='hidden md:flex justify-center items-center'>
                    <Link
                        href="/"
                        className='object-contain rounded-full cursor-pointer p-4 transition hover:bg-gray-300 hover:duration-150'>
                        <Image
                            src='/back.png'
                            width={25}
                            height={25}
                            alt="back icon"
                        />
                    </Link>
                    <h1 className={`${raleway.className} tracking-wide font-semibold md:text-3xl text-center p-10 `} >Back to Home</h1>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className='flex items-center md:space-x-28 space-y-12 mt-32'>
                    <div className='w-1/2'>
                        <Image
                            src="/underdevelopment1.gif"
                            width={1700}
                            height={1700}
                            alt="sideimage"
                            className='object-contain'
                        />
                    </div>
                    <div className={`${raleway.className} w-1/2 space-y-12`}>
                        <h1 className='text-6xl font-bold'>Coming Soon...<br /></h1>
                        <h1 className='text-3xl font-normal'>The site is under development</h1>
                    </div>
                </motion.div>
            </div >
        </>

    )
}

export default page