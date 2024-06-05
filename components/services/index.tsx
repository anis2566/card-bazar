"use client"

import { motion } from "framer-motion"

export const Services = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8 items-center" id="services">
            <motion.div
                className="hidden md:flex aspect-video"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src="/exciting.png"
                    alt="Banner"
                    className="object-cover"
                />
            </motion.div>
            <motion.div
                className="space-y-5"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="space-y-2 md:space-y-4 border-l border-black py-2 px-4 md:p-y-6 md:px-6">
                    <h1 className="text-xl md:text-2xl font-bold">Instant Withdrawal</h1>
                    <p className="text-sm">Experience hassle-free and quick withdrawals for your winnings.</p>
                </div>
                <div className="space-y-2 md:space-y-4 py-2 px-4 md:p-y-6 md:px-6">
                    <h1 className="text-xl md:text-2xl text-2xl font-bold">Easy GamePlay</h1>
                    <p className="text-sm">Enjoy user-friendly and intutive gameing experience.</p>
                </div>
                <div className="space-y-2 md:space-y-4 py-2 px-4 md:p-y-6 md:px-6">
                    <h1 className="text-xl md:text-2xl text-2xl font-bold">Secure Transactions</h1>
                    <p className="text-sm">Rest assured that your transactions are safe and protected.</p>
                </div>
            </motion.div>
            <motion.div
                className=" md:hidden aspect-video"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src="/exciting.png"
                    alt="Banner"
                    className="object-cover"
                />
            </motion.div>
        </div>
    )
}