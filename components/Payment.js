import React from 'react'
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

function Payment() {
    return (
        <div className='flex justify-center items-center mt-20 '>
            <div className='flex flex-col md:justify-center md:items-center'>
                <div className={`${raleway.className} space-y-6  `}>
                    <h1 className='text-2xl md:text-6xl font-bold  text-center'>Choose your plan</h1>
                    <h1 className='hidden md:flex text-lg md:text-2xl font-medium text-center'>14 days unlimited free plan. No contract or credit card required.</h1>
                    <h1 className='md:hidden text-lg md:text-2xl font-medium text-center'>14 days unlimited free plan. <br /> No contract or credit card required.</h1>
                </div>

                <div className='flex md:flex-row flex-col justify-center items-center my-20 md:mx-32 md:space-x-12 space-y-12 md:space-y-0'>

                    {/* Free Plan */}
                    <div>
                        {/* Overlay on the image */}
                        <div className={`${manrope.className} z-10 absolute flex flex-col text-white  ml-8 mt-5`}>
                            <h1 className='text-4xl font-thin'>#1</h1>
                            <h1 className='text-5xl font-semibold '>Entry</h1>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className='flex flex-col items-center w-[350px] h-[560px]  md:max-w-[400px] md:min-w-[400px] md:h-[710px] border border-gray-300 bg-gray-200  shadow-lg rounded-lg'>
                            <div className=' mx-2 my-2'>
                                <Image
                                    src="/cards-1.webp"
                                    width={390}
                                    height={100}
                                    alt="cards"
                                    className='h-44 object-cover rounded-lg'
                                />
                            </div>
                            <div className={`${raleway.className} space-y-10`}>
                                <h1 className='text-5xl md:text-6xl font-bold text-center md:my-10 my-5'>FREE <br /></h1>
                                <section className='flex flex-col space-y-5 mx-10 text-md md:text-lg font-normal '>
                                    <section className='flex space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className=' object-contain rounded-lg'
                                        />
                                        <h1>Benefits</h1>
                                    </section>
                                    {/* <section className='flex space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Access to a restricted resume database</h1>
                                    </section>
                                    <section className='flex space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Basic applicant tracking system functionality</h1>
                                    </section>
                                    <section className='flex space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Standard customer support</h1>
                                    </section> */}
                                </section>
                            </div>
                        </motion.div>
                    </div>

                    {/* Standard Plan */}
                    <div>
                        {/* Overlay on the image */}
                        <div className={`${manrope.className} z-10 absolute flex flex-col text-white  ml-10 mt-20`}>
                            <h1 className=' text-4xl font-thin'>#2</h1>
                            <h1 className='text-5xl font-semibold '>Standard</h1>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className='flex flex-col items-center  md:max-w-[400px] md:min-w-[400px] md:h-[710px] border border-gray-300 bg-gray-200  shadow-lgtext-black rounded-lg'>
                            <div className=' mx-2 my-2'>
                                <Image
                                    src="/cards-2.webp"
                                    width={390}
                                    height={100}
                                    alt="cards"
                                    className='h-44 object-cover rounded-lg'
                                />
                            </div>
                            <div className={`${raleway.className}  `}>
                                <div className='flex justify-center items-center md:my-10 my-5 space-x-4'>
                                    <h1 className={`${manrope.className} text-5xl md:text-6xl font-bold `}>Rs. 1000<br /></h1>
                                    <h1 className='font-normal text-gray-200'>/mo<br /></h1>
                                </div>
                                <section className='flex flex-col space-y-5 mx-10'>
                                    <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg'
                                        />
                                        <h1>Benefits</h1>
                                    </section>
                                    {/* <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Enhanced candidate screening options</h1>
                                    </section>
                                    <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Advanced applicant tracking system capabilities</h1>
                                    </section>
                                    <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Access to a larger resume database</h1>
                                    </section>
                                    <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Increased job posting limits</h1>
                                    </section> */}
                                </section>
                            </div>
                        </motion.div>
                    </div>

                    {/* Premium Plan */}
                    <div>
                        {/* Overlay on the image */}
                        <div className={`${manrope.className} z-10 absolute flex flex-col text-white  ml-10 mt-5`}>
                            <h1 className=' text-4xl font-thin'>#3</h1>
                            <h1 className='text-5xl font-semibold '>Premium</h1>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className='flex flex-col items-center  md:max-w-[400px] md:min-w-[400px] md:h-[710px] border border-gray-300 bg-gray-200  shadow-lgtext-black rounded-lg'>
                            <div className=' mx-2 my-2'>
                                <Image
                                    src="/cards-3.webp"
                                    width={390}
                                    height={100}
                                    alt="cards"
                                    className='h-44 object-cover rounded-lg'
                                />
                            </div>
                            <div className={`${raleway.className}`}>
                                <div className='flex justify-center items-center md:my-10 my-5 space-x-4'>
                                    <h1 className={`${manrope.className} text-5xl md:text-6xl font-bold `}>Rs. 2500<br /></h1>
                                    <h1 className='font-normal text-gray-200'>/mo<br /></h1>
                                </div>

                                <section className='flex flex-col space-y-5 mx-10'>
                                    <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Benefits</h1>
                                    </section>
                                    {/* <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Custom branding options</h1>
                                    </section>
                                    <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Integration with third-party HR tools</h1>
                                    </section>
                                    <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Advanced analytics and reporting</h1>
                                    </section>
                                    <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Access to a comprehensive resume database</h1>
                                    </section>
                                    <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Unlimited job postings</h1>
                                    </section> */}
                                </section>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Payment