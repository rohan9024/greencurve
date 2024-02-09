"use client"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Inter } from 'next/font/google';
import { Manrope } from 'next/font/google';
import { Raleway } from 'next/font/google';
import { easeOut, motion, useScroll } from "framer-motion"
import { useState } from 'react';
import Link from 'next/link';
import First from '../../components/First';
import Second from '../../components/Second';
import Testimonials from '../../components/Testimonials';
import Services from '../../components/Services';
import Payment from '../../components/Payment';
import Footer from '../../components/Footer';
import Waitlist from '../../components/Waitlist';
import Timeline from '../../components/Timeline';
import Testimonials2 from '../../components/Testimonials2';
import Navbar from '../../components/Navbar';
import Graph from '../../components/Graph';
import Products from '../../components/Products';


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
export default function Home() {
    const [isExpanded, setIsExpanded] = useState(false);
    const router = useRouter()
    const [scrollProgress, setScrollProgress] = useState(true)
    const [menu, setMenu] = useState(false)

    const [displayReview1, setDisplayReview1] = useState(false);
    const [displayReview2, setDisplayReview2] = useState(false);
    const [displayReview3, setDisplayReview3] = useState(false);


    return (
        <div className='w-screen '>


            {/* First Section */}
            <Navbar />

            <First />

            <Products />
            <Services />

            <Payment />
            <Testimonials2 />






            <Footer />



        </div >
    )
}


