"use client"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Inter } from 'next/font/google';
import { Manrope } from 'next/font/google';
import { Raleway } from 'next/font/google';
import { easeOut, motion, useScroll } from "framer-motion"

import Link from 'next/link';
import { useState } from 'react';

const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});
const inter = Inter({
    weight: ['400', '700'],
    subsets: ['latin'],
});
const manrope = Manrope({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
});

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

function Navbar() {

    const [menu, setMenu] = useState(false)

    return (
        <section className='lg:w-screen  '>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className=' flex justify-between items-center  mt-10 mx-9 lg:mx-0 lg:ml-20 lg:mr-20'>
                {/* Hidden on mobile screens */}
                <div className={`${raleway.className}  hidden lg:flex cursor-pointer transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-300`} >
                    <Image
                        src="/logo.jpg"
                        width={90}
                        height={90}
                        alt="logo"
                        className='object-contain rounded-full'
                    />
                </div>
                {/* Hidden on large screens  */}

                <div className={`${raleway.className} lg:hidden flex justify-center space-x-4 items-center  cursor-pointer `} >
                    <Image
                        src="/logo.jpg"
                        width={60}
                        height={60}
                        alt="logo"
                        className=' object-contain rounded-full'
                    />
                </div>
                {
                    menu ?
                        (
                            <motion.div
                                whileTap={{ scale: 0.97 }}
                                className='lg:hidden object-contain rounded-full p-4 hover:cursor-pointer' onClick={() => setMenu(false)}>
                                <Image
                                    src="/close.png"
                                    width={20}
                                    height={20}
                                    alt="close icon"
                                    className='object-contain'
                                />
                            </motion.div>
                        )
                        :
                        (
                            <motion.div
                                className='lg:hidden object-contain rounded-full p-4 hover:cursor-pointer' onClick={() => setMenu(true)}>
                                <Image
                                    src="/menu.png"
                                    width={20}
                                    height={20}
                                    alt="menu icon"
                                    className='object-contain '
                                />
                            </motion.div>
                        )
                }
                <div className={`${raleway.className} hidden lg:flex lg:justify-evenly lg:items-center  lg:w-92 space-x-12`}>
                    <Link href="/development" className=' transition ease-in  hover:font-bold hover:scale-125 hover:text-black  text-gray-700  p-2  cursor-pointer'>Home</Link>
                    <Link href="/development" className=' transition ease-in  hover:font-bold hover:scale-125 hover:text-black  text-gray-700  p-2  cursor-pointer'>Services</Link>
                    <Link href="/development" className=' transition ease-in  hover:font-bold hover:scale-125 hover:text-black  text-gray-700  p-2  cursor-pointer'>About</Link>
                    <Link href="/development" className=' transition ease-in  hover:font-bold hover:scale-125 hover:text-black  text-gray-700  p-2  cursor-pointer'>Contact</Link>
                </div>

                <section className='hidden lg:flex'>

                    <Link href="/register">
                        <div className={`${raleway.className}  cursor-pointer transition bg-black text-white font-bold rounded-lg px-5 py-2 ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-300`} >
                            <h1>Sign In</h1>
                        </div>
                    </Link>
                </section>


            </motion.div>



        </section>)
}

export default Navbar