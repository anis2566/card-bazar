import { Menu } from "lucide-react"
import Link from "next/link"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"

import { Logo } from "../logo"
import { NAV_ITEMS } from "@/constant"
import { ModeToggle } from "../mode-toggle"

export const NavDrawer = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                </Button>
            </SheetTrigger>
            <SheetContent className="w-[250px]">
                <SheetHeader>
                    <div className="flex justify-between items-center pr-6 pl-3 -mt-4">
                        <Logo />
                        <Button size="sm">Sign Up</Button>
                    </div>
                    <div className="flex flex-col items-start">
                        {
                            NAV_ITEMS.map((item) => (
                                <Button asChild variant="ghost" key={item.label} className="hover:bg-transparent hover:text-muted-foreground font-semibold">
                                    <Link href={item.href}>{item.label}</Link>
                                </Button>
                            ))
                        }
                    </div>
                    <div className="flex items-center gap-x-4">
                        <h1 className="font-semibold pl-4">Theme</h1>
                        <ModeToggle />
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}