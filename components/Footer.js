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
function Footer() {
    return (
        <div className='flex flex-col bg-black text-gray-300 font-dmsans shadow-t-lg'>
            <div className='flex justify-center items-center bg-gray-200 shadow-b-2xl'>
                <div className={`${raleway.className} p-10 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-300`} >
                    <Image
                        src="/logo.jpg"
                        width={90}
                        height={90}
                        alt="logo"
                        className='object-contain rounded-full'
                    />
                </div>
            </div>
            <div className='w-4/5 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-10 text-center'>
                <h1 className='my-4 hover:cursor-pointer transition ease-in-out hover:font-bold hover:text-lg hover:scale-105 '>Disclosure</h1>
                <h1 className='my-4 hover:cursor-pointer transition ease-in-out hover:font-bold hover:text-lg hover:scale-105 '>Privacy Policy</h1>
                <h1 className='my-4 hover:cursor-pointer transition ease-in-out hover:font-bold hover:text-lg hover:scale-105 '>Terms & Conditions</h1>
                <h1 className='my-4 hover:cursor-pointer transition ease-in-out hover:font-bold hover:text-lg hover:scale-105 '>Refund Policy</h1>
                <h1 className='my-4 hover:cursor-pointer transition ease-in-out hover:font-bold hover:text-lg hover:scale-105 '>Disclaimer</h1>
            </div>
        </div>
    )
}

export default Footer