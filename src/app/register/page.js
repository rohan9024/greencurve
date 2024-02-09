"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Raleway } from 'next/font/google';
import Image from 'next/image';
import WaitList from '../../../components/Waitlist';


const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});

function page() {
    return (
        <WaitList />
    )
}

export default page