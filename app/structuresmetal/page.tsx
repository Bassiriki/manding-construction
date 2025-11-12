"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const backgroundImages = [
  "/m1.jpeg",
  "/m2.jpeg",
  "/m3.jpeg",
  "/m4.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.53%20%284%29-KnMkvbTIvqdQH6A8TFJx7GVqbQrfH1.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.52%20%284%29-tRBRTrPnn6leOUGcqtlqXx9r2ZwFyg.jpeg",
]

export default function StructureMetalPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((p) => (p + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("services")
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) setVisible(true)
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      
     {/* Hero Section with rotating images */}
{/* Hero Section — mosaïque d’images plus douce */}
<section className="relative py-24 px-6 bg-[#057040] text-white">
  <div className="max-w-6xl mx-auto text-center">
    <h1 className="text-3xl md:text-5xl font-bold mb-4">Structures Métalliques</h1>
    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
      Excellence en conception et installation de structures robustes et durables
    </p>

    {/* Mosaïque d’images */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-10">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="relative h-36 md:h-48 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-500"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${image}')`,
              filter: "brightness(0.75)",
            }}
          />
          <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
        </div>
      ))}
    </div>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link href="#services">
        <Button size="lg" className="bg-white text-black hover:bg-white/90 font-semibold">
          Découvrir <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
      <Link href="/">
        <Button
          size="lg"
          variant="outline"
          className="border-white text-white hover:bg-white/10 bg-transparent"
        >
          Retour à l'accueil
        </Button>
      </Link>
    </div>
  </div>
</section>



      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Sur Mesure</h3>
              <p className="text-gray-600 leading-relaxed">
                Structures adaptées à vos besoins spécifiques pour les bâtiments industriels, commerciaux et
                institutionnels
              </p>
            </div>

            <div className="p-8 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Matériaux Premium</h3>
              <p className="text-gray-600 leading-relaxed">
                Matériaux de haute qualité garantissant la durabilité, la sécurité et l'esthétique de vos ouvrages
              </p>
            </div>

            <div className="p-8 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Accompagnement Complet</h3>
              <p className="text-gray-600 leading-relaxed">
                De la conception à la maintenance, nous assurons un suivi expert de votre projet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Conception et Installation</h2>

          <div className="space-y-6 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous réalisons des structures métalliques robustes et sur mesure, adaptées à tous types de bâtiments
              industriels, commerciaux et institutionnels. Grâce à notre expertise et à des matériaux de haute qualité,
              nous garantissons la durabilité, la sécurité et l'esthétique de vos ouvrages.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              De la conception à la pose, notre équipe assure un accompagnement complet : études, fabrication, montage
              et maintenance. Nous respectons les normes les plus strictes en matière de sécurité et de performance.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
            
            <ul className="space-y-4">
              {[
                 
                "Fabrication de structures",
                "Montage et installation",
                "Maintenance et entretien",
                "Respect des normes de sécurité",
              ].map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gray-800 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/">
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-900 hover:bg-gray-100 bg-transparent"
            >
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-20 px-6 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Prêt à démarrer votre projet?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Contactez-nous pour discuter de vos besoins en structures métalliques
          </p>
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
            Nous Contacter
          </Button>
        </div>
      </section>
    </div>
  )
}
