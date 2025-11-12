"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const backgroundImages = [
  "/f1.jpeg",
  "/f2.jpeg",
  "/f3.jpeg",
  "/f4.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.53%20%284%29-KnMkvbTIvqdQH6A8TFJx7GVqbQrfH1.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.52%20%284%29-tRBRTrPnn6leOUGcqtlqXx9r2ZwFyg.jpeg",
]

export default function InstallationElectriquePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-24 px-6 bg-[#057040] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Installations Électriques</h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Solutions électriques fiables et sécurisées pour bâtiments industriels, tertiaires et résidentiels
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-10">
            {backgroundImages.map((image, index) => (
              <div key={index} className="relative h-36 md:h-48 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${image}')`, filter: "brightness(0.75)" }} />
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
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Expertise en Installations Électriques</h2>
          <p className="text-lg text-gray-700 mb-6">
            Nous réalisons des installations électriques complètes conformes aux normes de sécurité les plus exigeantes. 
            Nos interventions couvrent l’étude, la pose, le câblage et la maintenance pour tous types de bâtiments.
          </p>

          <ul className="space-y-4">
            {[
              "Installation et distribution électrique complète",
              "Tableaux, armoires et automatismes",
              "Éclairage industriel et de sécurité",
              "Maintenance et mise aux normes",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-gray-800 mt-1" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <Link href="/">
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-900 hover:bg-gray-100 bg-transparent">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
