import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import  Carroussel  from "@/components/carroussel"
 


export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Carroussel />
      <About />
      <Contact />
      <Footer />
       
    </main>
  )
}
