import { Button } from "../ui/button"

export const DownloadApp = () => {
    return (
        <div className="space-y-8">
            <div className="md:hidden aspect-video">
                <img
                    src="/download.png"
                    alt="download"
                    className="object-cover mx-auto"
                />
            </div>
            <div className="grid md:grid-cols-2 gap-6 justify-items-between">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Download the app and play</h2>
                    <p className="font-semibold">Experience the thrill of winning with our app</p>
                </div>
                <div className="flex md:justify-end gap-x-4">
                    <Button>Download</Button>
                    <Button variant="outline">Learn More</Button>
                </div>
            </div>
        </div>
    )
}