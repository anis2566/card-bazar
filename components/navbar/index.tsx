import { Logo } from "../logo"
import { NavDrawer } from "./drawer"
import { NavMenu } from "./nav-menu"

export const Navbar = () => {
    return (
        <div className="sticky inset-0 border-b border-gray-300 py-2 z-50 bg-background">
            <div className="flex justify-between items-center">
                <Logo />
                <NavMenu />
                <NavDrawer />
            </div>
        </div>
    )
}