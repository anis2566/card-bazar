"use client"

import { motion } from "framer-motion"
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "../ui/button"

export const Contact = () => {
    return (
        <div className="space-y-10" id="contact">
            <div className="space-y-3 text-center">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="font-bold text-3xl">Still have questions?</h1>
                </motion.div>
                <p>Contact our support team for further assistance.</p>
                <Button variant="outline">Contact</Button>
            </div>

            <div className="space-y-10">
                <div className="space-y-3">
                    <h1 className="font-bold text-3xl">Contact Information</h1>
                    <p>Welcome to Card Bazaar! Play and win!</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-8">
                        <motion.div
                            className="space-y-2"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Mail />
                            <p className="font-bold">Email</p>
                            <p className="text-sm">Send us a messae today</p>
                            <p className="text-sm underline">hello@cardbazaar.com</p>
                        </motion.div>
                        <motion.div
                            className="space-y-2"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Phone />
                            <p className="font-bold">Phone</p>
                            <p className="text-sm">Call us for assistance</p>
                            <p className="text-sm underline">+1 (555) 123-4567</p>
                        </motion.div>
                        <motion.div
                            className="space-y-2"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <MapPin />
                            <p className="font-bold">Office</p>
                            <p className="text-sm">123 Main St, Anytown, USA</p>
                        </motion.div>
                        <div className="flex items-center gap-x-2">

                            <p className="font-semibold">Get Direction</p>
                            <ChevronRight className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <img
                            src="/location.png"
                            alt="video"
                            className="object-contain w-full h-full md:h-[80%]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}