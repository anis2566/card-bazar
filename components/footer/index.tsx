import { Copyright } from "lucide-react"
import Link from "next/link"
import { RiTwitterXFill } from "react-icons/ri"
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Separator } from "../ui/separator"

import { Logo } from "../logo"

export const Footer = () => {
    return (
        <div className="pb-5 space-y-6 mt-10">
            <div className="grid grid-cols-2 md:grid-cols-6">
                <Logo />
                <div className="flex flex-col justify-start">
                    {
                        ["About Us", "Home", "Contact Us", "FAQ", "Services", "Blog"].map((value, index) => (
                            <Button key={index} variant="ghost" className="justify-start hover:bg-transparent hover:text-muted-foreground first:font-bold">{value}</Button>
                        ))
                    }
                </div>
                <div className="flex flex-col justify-start">
                    {
                        ["Support", "Teams", "Privacy", "Sitemap", "Help", "Account"].map((value, index) => (
                            <Button key={index} variant="ghost" className="justify-start hover:bg-transparent hover:text-muted-foreground first:font-bold">{value}</Button>
                        ))
                    }
                </div>
                <div className="flex flex-col justify-start">
                    {
                        ["Payment", "Shipping", "Returns", "Track Order", "FAQ", "Contact Us"].map((value, index) => (
                            <Button key={index} variant="ghost" className="justify-start hover:bg-transparent hover:text-muted-foreground first:font-bold">{value}</Button>
                        ))
                    }
                </div>
                <div className="md:col-span-2 space-y-4 mt-6 w-full">
                    <p className="font-semibold">Subscribe</p>
                    <p className="text-sm">Join our mailing list for latest update.</p>
                    <div className="flex items-center gap-x-3 w-full">
                        <Input placeholder="Enter your email" className="min-w-[250px]" />
                        <Button variant="outline">Subscribe</Button>
                    </div>
                    <p className="text-[12px]">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
                </div>
            </div>

            <Separator />

            <div className="grid md:grid-cols-3 space-y-6">
                <div className="flex md:hidden items-center gap-x-2">
                    <Link href="www.facebook.com" target="_blank">
                        <FaFacebook />
                    </Link>
                    <Link href="www.instagram.com" target="_blank">
                        <FaInstagram />
                    </Link>
                    <Link href="www.x.com" target="_blank">
                        <RiTwitterXFill />
                    </Link>
                    <Link href="www.linkdin.com" target="_blank">
                        <FaLinkedin />
                    </Link>
                    <Link href="www.youtube.com" target="_blank">
                        <FaYoutube />
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row items-cneter md:col-span-2 gap-y-3">
                    <div className="hidden md:flex items-center gap-x-2">
                        <Copyright className="w-5 h-5" />
                        <p className="text-sm">Card Bazaar. All Right Reserved.</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center">
                        {
                            ["Privacy Policy", "Terms of Services", "Cookie Policy"].map((value, index) => (
                                <Button key={index} variant="ghost" className="hover:bg-transparent hover:text-muted-foreground underline justify-start">{value}</Button>
                            ))
                        }
                    </div>
                    <div className="flex md:hidden items-center gap-x-2">
                        <Copyright className="w-5 h-5" />
                        <p className="text-sm">Card Bazaar. All Right Reserved.</p>
                    </div>
                </div>
                <div className="hidden md:flex items-center justify-end gap-x-2">
                    <Link href="www.facebook.com" target="_blank">
                        <FaFacebook />
                    </Link>
                    <Link href="www.instagram.com" target="_blank">
                        <FaInstagram />
                    </Link>
                    <Link href="www.x.com" target="_blank">
                        <RiTwitterXFill />
                    </Link>
                    <Link href="www.linkdin.com" target="_blank">
                        <FaLinkedin />
                    </Link>
                    <Link href="www.youtube.com" target="_blank">
                        <FaYoutube />
                    </Link>
                </div>
            </div>
        </div>
    )
}