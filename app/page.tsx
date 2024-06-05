import { DownloadApp } from "@/components/download"
import { Hero } from "@/components/hero"

const Home = () => {
  return (
    <section className="w-full space-y-10">
      <Hero />
      <DownloadApp />
    </section>
  )
}

export default Home