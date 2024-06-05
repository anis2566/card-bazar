import { Contact } from "@/components/contact"
import { Customers } from "@/components/customers"
import { DownloadApp } from "@/components/download"
import { FAQ } from "@/components/faq"
import { Hero } from "@/components/hero"
import { Newsletter } from "@/components/newsletter"
import { Services } from "@/components/services"

const Home = () => {
  return (
    <section className="w-full space-y-20">
      <Hero />
      <DownloadApp />
      <Services />
      <Newsletter />
      <Customers />
      <FAQ />
      <Contact />
    </section>
  )
}

export default Home