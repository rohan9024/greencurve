import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Manrope, Raleway } from 'next/font/google';
import Image from 'next/image';
import Graph from './Graph';
import Graph2 from './Graph2';


const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});
const manrope = Manrope({
    weight: ['400', '700'],
    subsets: ['latin'],
});
function First() {

    const [indexOption, setIndexOption] = useState(false)
    const [PMS, setPMS] = useState(false)
    const [pivotPoint, setPivotPoint] = useState(false)

    const data = {

        chartData: {
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                3000, 2000,
                1000, 0
            ],
        },
    };
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className='lg:flex-row flex-col flex justify-center space-x-20 lg:justify-normal items-center mx-20 '>

                {/* <div className='lg:hidden flex'>
                    <Image
                        src="/first.gif"
                        width={700}
                        height={800}
                        alt="sideimage"
                        className=' object-contain'
                    />
                </div> */}



                {/* <div className={`${manrope.className} lg:w-1/2 `}>
                    <h1 className=' text-2xl md:text-5xl lg:text-6xl font-medium leading-relaxed xl:hidden'>Unlocking Financial Success Together</h1>
                    <h1 className=' hidden xl:flex xl:text-7xl font-bold mt-10'>Unlocking Financial</h1>
                    <h1 className=' hidden xl:flex xl:text-7xl font-bold mt-5'>Success Together</h1>
                    <h1 className='text-lg md:text-2xl lg:text-2xl font-medium  mt-16'>Navigate Your Path to Wealth with Confidence</h1>
                </div> */}

                <div className='my-10'>
                    {/* <Graph info={data} className="w-screen h-screen" /> */}
                    <Graph2 className="w-screen h-screen" />
                </div>
                {/* <Graph info={data} className="w-screen h-screen" /> */}
                <div className={`${manrope.className} my-10 space-y-10`}>
                    <h1 className='text-3xl  text-center font-bold'>Select Option</h1>
                    <div className={`${indexOption ? 'bg-green-400 text-white font-medium ' : 'border border-gray-100 bg-gray-200'}  cursor-pointer text-lg px-5 py-4 w-44 text-center rounded-xl  shadow-sm `} onClick={() => {
                        setIndexOption(true)
                        setPMS(false)
                        setPivotPoint(false)
                    }}>
                        <h1>Index Option</h1>
                    </div>
                    <div className={`${PMS ? 'bg-green-400 text-white font-medium ' : 'border border-gray-100 bg-gray-200'}  cursor-pointer text-lg px-5 py-4 w-44 text-center rounded-xl  shadow-sm `} onClick={() => {
                        setIndexOption(false)
                        setPMS(true)
                        setPivotPoint(false)
                    }}>                                    <h1>PMS</h1>
                    </div>
                    <div className={`${pivotPoint ? 'bg-green-400 text-white font-medium ' : 'border border-gray-100 bg-gray-200'}  cursor-pointer text-lg px-5 py-4 w-44 text-center rounded-xl  shadow-sm `} onClick={() => {
                        setIndexOption(false)
                        setPMS(false)
                        setPivotPoint(true)
                    }}>                                    <h1>Pivot Point</h1>
                    </div>
                </div>



            </motion.div>

        </>
    )
}

export default First