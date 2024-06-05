"use client"

import { motion } from "framer-motion"

export const Newsletter = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
                <motion.div
                    className="space-y-8"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl font-bold leading-[45px]">Discover the Excitement of Card Bazaar and Win Big Rewards.</h1>
                </motion.div>
                <motion.div
                    className="space-y-8"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <p>Experience the high rewards, 24/7 support and a user-friendly interface that makes playing card bazaar a breeze.</p>
                </motion.div>
                <motion.div
                    className="grid md:grid-cols-2 gap-4"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">High Rewards</h3>
                        <p className="text-sm">Unlock exciting prizes and cash in on your gaming skill with Card Bazzar.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">24/7 Support</h3>
                        <p className="text-sm">Our dedicated team is available round the clock to assist you with any queries.</p>
                    </div>
                </motion.div>
            </div>
            <motion.div
                className="aspect-video"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src="/newsletter.png"
                    alt="Banner"
                    className="object-cover ml-auto"
                />
            </motion.div>
        </div>
    )
}