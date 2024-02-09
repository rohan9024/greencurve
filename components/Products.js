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


function BackOfCard() {
    return (
        <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 card-back">
            BACK OF CARD
        </div>
    );
}
function FrontOfCard() {
    return (
        <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0">
            FRONT OF CARD
        </div>
    );
}
function Products() {
    const [advisory, setAdvisory] = useState(false);
    const [research, setResearch] = useState(false);
    const [paperTrade, setPaperTrade] = useState(false);
    const [unlistedShares, setUnlistedShares] = useState(false);


    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className={`${raleway.className} flex w-screen justify-center items-center my-44`}>

            <div className='flex flex-col justify-center items-center'>
                <div className={`${manrope.className}  font-bold flex space-x-5 `}>
                    <h1 className='text-6xl text-center'>Our Products</h1>
                </div>

                <div className={`${manrope.className} flex justify-start items-start space-y-10 space-x-10 xl:space-y-0 my-20`}>
                    <div className=' flex justify-end  space-x-10 '>


                        {/* index options */}
                        <div className="relative  h-[700px] w-[400px] rounded-2xl  overflow-hidden cursor-pointer transition-all duration-700 card">
                            {/* Front card */}
                            {/* <div class={`${manrope.className} transition-all duration-100 delay-200 z-20 hover:opacity-0 absolute inset-0  p-10 flex  flex-col space-y-10 bg-white border border-gray-200 rounded-2xl shadow-lg h-[700px] w-[400px]  cursor-pointer `}> */}
                            <div className=" p-10 flex  flex-col space-y-10 bg-white border border-gray-200 rounded-2xl shadow-lg h-[700px] w-[400px] absolute inset-0  justify-center items-center  transition-all duration-100 delay-200 z-20 hover:opacity-0">
                                <Image width={500} height={1200} src="/product1.png" alt="product1" className='w-full h-[250px] object-contain rounded-2xl' />
                                <h1 className='text-4xl font-bold  '>Index Options</h1>
                                <h1 className='text-lg font-bold text-gray-700 '>Lorem ipsum, dolor sit   maiores numquam itaque consectetur vero ecessitatibus distinctio ut accusantium! Omnis eaque tenetur, architecto beatae molestias facere vero autem culpa corporis quod quis asperiores soluta pariatur iste animi non.</h1>
                            </div>
                            {/* Back card */}
                            {/* <div class={`${manrope.className} absolute transition-all inset-0 z-10 card-back p-10 flex  flex-col space-y-10 bg-white border border-gray-200 rounded-2xl shadow-lg h-[700px] w-[400px]  hover:cursor-pointer`}> */}
                            <div className=" p-10 flex  flex-col  space-y-10 bg-white border border-gray-200 rounded-2xl shadow-lg h-[700px] w-[400px]  absolute inset-0    transition-all z-10 card-back">
                                <h1 className='text-4xl font-bold  '>Pricing</h1>
                                <h1 className='text-lg font-normal text-gray-700 '>Lorem ipsum, dolor sit   maiores numquam itaque consectetur vero ecessitatibus distinctio ut accusantium! Omnis eaque tenetur, architecto beatae molestias facere vero autem culpa corporis quod quis asperiores soluta pariatur iste animi non.</h1>
                                <h1 className='text-2xl font-bold text-gray-700 '>Rs. 1200</h1>
                                <h1 className='absolute left-0 right-0 text-2xl font-normal text-white bg-black w-full px-6 py-4 text-center bottom-0 rounded-2xl p-10'>Buy Now</h1>
                            </div>
                        </div>

                        {/* PMS */}
                        <div className="relative  h-[700px] w-[400px] rounded-2xl  overflow-hidden cursor-pointer transition-all duration-700 card">
                            {/* Front card */}
                            {/* <div class={`${manrope.className} transition-all duration-100 delay-200 z-20 hover:opacity-0 absolute inset-0  p-10 flex  flex-col space-y-10 bg-white border border-gray-200 rounded-2xl shadow-lg h-[700px] w-[400px]  cursor-pointer `}> */}
                            <div className=" p-10 flex  flex-col space-y-10 bg-white border border-gray-200 rounded-2xl shadow-lg h-[700px] w-[400px] absolute inset-0  justify-center items-center  transition-all duration-100 delay-200 z-20 hover:opacity-0">
                                <Image width={500} height={1200} src="/product2.png" alt="product2" className='w-full h-[250px] object-cover rounded-2xl' />
                                <h1 className='text-4xl font-bold  '>PMS</h1>
                                <h1 className='text-lg font-bold text-gray-700 '>Lorem ipsum, dolor sit   maiores numquam itaque consectetur vero ecessitatibus distinctio ut accusantium! Omnis eaque tenetur, architecto beatae molestias facere vero autem culpa corporis quod quis asperiores soluta pariatur iste animi non.</h1>
                            </div>
                            {/* Back card */}
                            {/* <div class={`${manrope.className} absolute transition-all inset-0 z-10 card-back p-10 flex  flex-col space-y-10 bg-white border border-gray-200 rounded-2xl shadow-lg h-[700px] w-[400px]  hover:cursor-pointer`}> */}
                            <div className=" p-10 flex  flex-col  space-y-10 bg-white border border-gray-200 rounded-2xl shadow-lg h-[700px] w-[400px]  absolute inset-0    transition-all z-10 card-back">
                                <h1 className='text-4xl font-bold  '>Pricing</h1>
                                <h1 className='text-lg font-normal text-gray-700 '>Lorem ipsum, dolor sit   maiores numquam itaque consectetur vero ecessitatibus distinctio ut accusantium! Omnis eaque tenetur, architecto beatae molestias facere vero autem culpa corporis quod quis asperiores soluta pariatur iste animi non.</h1>
                                <h1 className='text-2xl font-bold text-gray-700 '>Rs. 1200</h1>
                                <h1 className='absolute left-0 right-0 text-2xl font-normal text-white bg-black w-full px-6 py-4 text-center bottom-0 rounded-2xl p-10'>Buy Now</h1>
                            </div>
                        </div>

                        {/* Pivot Point */}
                        <div className="relative  h-[700px] w-[400px] rounded-2xl  overflow-hidden cursor-pointer transition-all duration-700 card">
                            {/* Front card */}
                            {/* <div class={`${manrope.className} transition-all duration-100 delay-200 z-20 hover:opacity-0 absolute inset-0  p-10 flex  flex-col space-y-10 bg-white border border-gray-200 rounded-2xl shadow-lg h-[700px] w-[400px]  cursor-pointer `}> */}
                            <div className=" p-10 flex  flex-col space-y-10 bg-white border border-gray-200 rounded-2xl shadow-lg h-[700px] w-[400px] absolute inset-0  justify-center items-center  transition-all duration-100 delay-200 z-20 hover:opacity-0">
                                <Image width={500} height={1200} src="/product3.jpg" alt="product3" className='w-full h-[250px] object-cover rounded-2xl' />
                                <h1 className='text-4xl font-bold  '>Pivot Point</h1>
                                <h1 className='text-lg font-bold text-gray-700 '>Lorem ipsum, dolor sit   maiores numquam itaque consectetur vero ecessitatibus distinctio ut accusantium! Omnis eaque tenetur, architecto beatae molestias facere vero autem culpa corporis quod quis asperiores soluta pariatur iste animi non.</h1>
                            </div>
                            {/* Back card */}
                            {/* <div class={`${manrope.className} absolute transition-all inset-0 z-10 card-back p-10 flex  flex-col space-y-10 bg-white border border-gray-200 rounded-2xl shadow-lg h-[700px] w-[400px]  hover:cursor-pointer`}> */}
                            <div className=" p-10 flex  flex-col  space-y-10 bg-white border border-gray-200 rounded-2xl shadow-lg h-[700px] w-[400px]  absolute inset-0    transition-all z-10 card-back">
                                <h1 className='text-4xl font-bold  '>Pricing</h1>
                                <h1 className='text-lg font-normal text-gray-700 '>Lorem ipsum, dolor sit   maiores numquam itaque consectetur vero ecessitatibus distinctio ut accusantium! Omnis eaque tenetur, architecto beatae molestias facere vero autem culpa corporis quod quis asperiores soluta pariatur iste animi non.</h1>
                                <h1 className='text-2xl font-bold text-gray-700 '>Rs. 1200</h1>
                                <h1 className='absolute left-0 right-0 text-2xl font-normal text-white bg-black w-full px-6 py-4 text-center bottom-0 rounded-2xl p-10'>Buy Now</h1>
                            </div>
                        </div>


                    </div>



                </div>

            </div>
        </motion.div>

    )
}

export default Products