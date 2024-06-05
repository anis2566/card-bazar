import Link from "next/link"

import { Button } from "../ui/button"
import { NAV_ITEMS } from "@/constant"

import { ModeToggle } from "../mode-toggle"

export const NavMenu = () => {
    return (
        <div className="hidden md:flex items-center">
            {
                NAV_ITEMS.map((item) => (
                    <Button asChild variant="ghost" key={item.label} className="hover:bg-transparent hover:text-muted-foreground font-semibold">
                        <Link href={item.href}>{item.label}</Link>
                    </Button>
                ))
            }
            <div className="mr-3">
                <ModeToggle />
            </div>
            <Button>Sign Up</Button>
        </div>
    )
}