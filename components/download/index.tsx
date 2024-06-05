"use client"

import { motion } from "framer-motion"

import { Button } from "../ui/button"

export const DownloadApp = () => {
    return (
        <div className="space-y-8" id="about">
            <motion.div
                className="md:hidden aspect-video"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src="/download.png"
                    alt="download"
                    className="object-cover mx-auto"
                />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 justify-items-between">
                <motion.div
                    className="space-y-4"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold">Download the app and play</h2>
                    <p className="font-semibold">Experience the thrill of winning with our app</p>
                </motion.div>
                <motion.div
                    className="flex md:justify-end gap-x-4"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Button>Download</Button>
                    <Button variant="outline">Learn More</Button>
                </motion.div>
            </div>
        </div>
    )
}