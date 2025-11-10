"use client"

import { useEffect, useState } from "react"
import { Button as UiButton } from "@/components/ui/button"

const backgroundImages = [
  "/f1.jpeg",
  "/f2.jpeg",
  "/f3.jpeg",
  "/f4.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.53%20%284%29-KnMkvbTIvqdQH6A8TFJx7GVqbQrfH1.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.52%20%284%29-tRBRTrPnn6leOUGcqtlqXx9r2ZwFyg.jpeg",
]

export function Hero() {
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
      const section = document.getElementById("accueil")
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
    <section
      id="accueil"
      className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden text-white"
    >
      {/* Images de fond */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[1800ms] ease-in-out ${
            currentImageIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}

      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Contenu principal */}
      <div
        className={`relative z-20 w-full max-w-4xl px-6 md:px-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* pb pour laisser de l'espace sous le contenu (évite que les dots collent au bouton) */}
        <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/20 shadow-2xl pb-16">
          {/* TEXTE aligné à gauche */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight text-white text-left">
            Construisons ensemble
            <br />
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              l’avenir de vos projets
            </span>
          </h1>

          <p className="text-sm md:text-base mb-8 text-white/90 leading-relaxed text-left">
            Expert en construction métallique, installations solaires et infrastructures.
            <br className="hidden md:block" />
            Nous transformons vos idées en réalité avec qualité et innovation.
          </p>

          <div className="flex items-center gap-4">
            {/* utilise ton Button si compatible */}
            <UiButton
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent font-semibold px-6 py-3 rounded-lg transition-transform duration-300 hover:scale-105"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Découvrez nos services
            </UiButton>

            {/* Action secondnaire (facultatif) */}
            {/* <button className="text-white/90 underline">En savoir plus</button> */}
          </div>
        </div>
      </div>

      {/* Dots : déplacés plus bas et centrés */}
      <div className="absolute left-1/2 -translate-x-1/2 z-30 bottom-12 md:bottom-16 flex gap-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-3 w-3 md:h-4 md:w-4 rounded-full transition-all duration-300 focus:outline-none ${
              currentImageIndex === index ? "bg-white scale-125 shadow-[0_0_14px_rgba(255,255,255,0.85)]" : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
