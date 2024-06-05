"use client"

import { motion } from "framer-motion"

import { Button } from "../ui/button"

export const Hero = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8 py-10 items-center" id="home">
            <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-[30px] md:text-[40px] font-bold md:max-w-[80%] leading-[40px] md:leading-[50px]">Experience the thrill of winning with Card Bazaar</h1>
                <p className="font-semibold">Join our fantasy game and compete for amazing prizes. Download the app now!</p>
                <div className="flex items-center gap-x-4">
                    <Button>Play</Button>
                    <Button variant="outline">Learn More</Button>
                </div>
            </motion.div>
            <motion.div 
                className="aspect-video"
                initial={{opacity:0, x:50}}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src="/hero.png"
                    alt="Banner"
                    className="object-cover ml-auto"
                />
            </motion.div>
        </div>
    )
}