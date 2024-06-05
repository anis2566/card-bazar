"use client"

import { motion } from "framer-motion"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export const FAQ = () => {
    return (
        <div className="space-y-6">
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl font-bold text-center">FAQs</h1>
            </motion.div>
            <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <p className="text-normal text-center">Find answer to common questions about how to play, rules and more.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-3 md:gap-14">
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <span className="font-semibold">How to play?</span>
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aspernatur?
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <span className="font-semibold">What are the rules?</span>
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aspernatur?
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <span className="font-semibold">How can I withdraw my winnings?</span>
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aspernatur?
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                <span className="font-semibold">Is the game fair?</span>
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aspernatur?
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>
                                <span className="font-semibold">Can I play on mobile?</span>
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aspernatur?
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <span className="font-semibold">How can I contact support?</span>
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aspernatur?
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <span className="font-semibold">What are the payment options?</span>
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aspernatur?
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <span className="font-semibold">Is my information secure?</span>
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aspernatur?
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                <span className="font-semibold">Can I play for free?</span>
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aspernatur?
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>
                                <span className="font-semibold">Are there any bonuses?</span>
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aspernatur?
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}