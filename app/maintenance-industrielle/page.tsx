"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const backgroundImages = [
 
  "/i2.jpg",
  "/i3.jpg",
  "/i4.jpg",
  "/i5.jpg",
  "/i6.jpg",
  "/i7.jpg",
  ]

export default function MaintenanceIndustriellePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section — mosaïque d’images */}
      <section className="relative py-24 px-6 bg-[#057040] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Maintenance Industrielle</h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Services complets pour assurer la performance, la sécurité et la longévité de vos installations industrielles
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

      {/* Section Services */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Nos Services de Maintenance</h2>

          <p className="text-lg text-gray-700 mb-6">
            Nous proposons des services de maintenance industrielle adaptés à tous types d’équipements, 
            pour garantir la continuité de votre production et prolonger la durée de vie de vos installations.  
            Notre équipe intervient avec rigueur et réactivité, dans le respect des normes de sécurité.
          </p>

          <ul className="space-y-4">
            {[
              "Maintenance préventive et corrective",
              "Dépannage électromécanique et automatisme",
              "Suivi des équipements et diagnostic technique",
              "Optimisation des performances industrielles",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-gray-800 mt-1" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12">
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
        </div>
      </section>

      {/* CTA finale */}
      <section className="py-20 px-6 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Assurez la fiabilité de vos équipements
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contactez notre équipe pour un accompagnement sur mesure en maintenance industrielle
          </p>
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
            Nous Contacter
          </Button>
        </div>
      </section>
    </div>
  )
}
