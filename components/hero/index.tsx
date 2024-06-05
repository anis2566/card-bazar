import { Button } from "../ui/button"

export const Hero = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8 py-10 items-center">
            <div className="space-y-6">
                <h1 className="text-[30px] md:text-[40px] font-bold md:max-w-[80%] leading-[40px] md:leading-[50px]">Experience the thrill of winning with Card Bazaar</h1>
                <p className="font-semibold">Join our fantasy game and compete for amazing prizes. Download the app now!</p>
                <div className="flex items-center gap-x-4">
                    <Button>Play</Button>
                    <Button variant="outline">Learn More</Button>
                </div>
            </div>
            <div className="aspect-video">
                <img
                    src="/hero.png"
                    alt="Banner"
                    className="object-cover ml-auto"
                />
            </div>
        </div>
    )
}