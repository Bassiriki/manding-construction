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
      className="relative h-[90vh] min-h-[600px] flex items-center justify-start text-white px-6 md:px-16 overflow-hidden"
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

      {/* Overlay clair et dégradé */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      {/* Bloc texte */}
      <div
        className={`relative z-20 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-3xl shadow-2xl 
                        p-6 sm:p-8 md:p-10 
                        w-[90vw] max-w-[380px] md:max-w-[450px] 
                        flex flex-col justify-center space-y-4 md:space-y-6">
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-white drop-shadow-lg">
            Construisons ensemble <br />
            <span className="text-white/95">l’avenir de vos projets</span>
          </h1>

          <p className="text-sm md:text-base text-white/90 leading-relaxed">
            Experts en structures métalliques, installations solaires et infrastructures modernes.
            Nous allions innovation, durabilité et performance.
          </p>

          <UiButton
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black bg-transparent font-semibold px-5 py-2 rounded-lg transition-transform duration-300 hover:scale-105 w-fit"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            Découvrez nos services
          </UiButton>
        </div>
      </div>

      {/* Points indicateurs */}
      <div className="absolute left-1/2 -translate-x-1/2 z-30 bottom-10 flex gap-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentImageIndex === index
                ? "bg-white scale-125 shadow-[0_0_14px_rgba(255,255,255,0.85)]"
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
