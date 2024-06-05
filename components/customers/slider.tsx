"use client"

import { FaStar } from "react-icons/fa"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const Slider = () => {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            plugins={[
                Autoplay({
                    delay: 5000,
                }),
            ]}
            className="w-full relative"
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2">
                        <div className="p-1">
                            <Card>
                                <CardContent className="w-full p-4 space-y-4">
                                    <div className="flex items-center gap-x-1">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <p className="font-bold">I won big and had a great time on playing Card Bazaar!</p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-x-3 border-r border-gray-300 min-h-[60px]">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-bold">John Doe</p>
                                                <p className="text-sm">CEO, XYZ Company</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <img
                                                src="/web.png"
                                                alt="Web"
                                            />
                                            <p className="text-md font-bold">Webflow</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-[110%] left-[calc(100%-70px)]" />
            <CarouselNext className="absolute top-[110%] right-0" />
        </Carousel>
    )
}