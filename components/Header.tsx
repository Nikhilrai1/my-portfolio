import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'
import { Social } from '../typings'

type Props = {
    socials: Social[]
}

function Header({ socials }: Props) {
    return (
        <header className="sticky z-50 flex top-0 p-5 justify-between max-w-7xl items-start mx-auto xl:items-center">
            <motion.div className="flex flex-row items-center"
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
            >
                {socials.map(social => (
                    <SocialIcon
                        key={social._id}
                        url={social.url}
                        bgColor='transparent'
                        fgColor='gray'
                    />
                ))}

            </motion.div>

            <motion.div className="flex flex-row items-center cursor-pointer text-gray"
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
            >
                <Link href="#contact">
                    <SocialIcon
                        className='cursor-pointer'
                        network='email'
                        fgColor='gray'
                        bgColor='transparent'
                    />
                </Link>
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
            </motion.div>

        </header>
    )
}

export default Header