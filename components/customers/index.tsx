"use client"

import { motion } from "framer-motion"

import { Slider } from "./slider"

export const Customers = () => {
    return (
        <div className="space-y-8">
            <motion.div
                className="space-y-4"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl font-bold">Happy Customers</h1>
            </motion.div>
            <p>Read what our customers have to say about their experience with us.</p>
            <Slider />
        </div>
    )
}