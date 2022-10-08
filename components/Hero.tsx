import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { motion } from "framer-motion"
import Link from 'next/link'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'
type Props = {
    pageInfo: PageInfo
}

function Hero({ pageInfo }: Props) {
    const [text ] = useTypewriter({
        words: [
            `Hi, The Names's ${pageInfo?.name}`,
            "I'm a developer.",
            "I'm a programmer.",
            "I'm a coder.",
        ],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <motion.div
            initial={{
                opacity: 0
            }}

            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"]
            }}
            transition={{
                duration: 1.5
            }}
            className='relative h-screen flex space-y-8 items-center justify-center text-center overflow-hidden'>
                <BackgroundCircles />
                <div className="flex flex-col justify-center absolute mx-auto">
                <img
                    src={urlFor(pageInfo?.heroImage.asset._ref).url()}
                    className='h-32 w-32 rounded-full mx-auto relative'
                    alt="profile" />
                    <h2 className="text-sm uppercase text-gray-500 ob-2 tracking-[15px]">{pageInfo?.role}</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span>{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
                <div className="pt-5">
                    <Link href="#about"><button className="heroButton">About</button></Link>
                    <Link href="#experience"><button className="heroButton">Experience</button></Link>
                    <Link href="#skills"><button className="heroButton">Skills</button></Link>
                    <Link href="#projects"><button className="heroButton">Projects</button></Link>
                </div>
                </div>
        </motion.div>
    )
}

export default Hero