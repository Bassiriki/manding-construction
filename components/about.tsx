"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const values = [
  "Plus de 10 ans d'expérience dans le secteur",
  "Équipe qualifiée et certifiée",
  "Respect des délais et du budget",
  "Matériaux de qualité supérieure",
  "Suivi personnalisé de chaque projet",
  "Engagement pour la satisfaction client",
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="apropos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Votre Partenaire de Confiance en Construction
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Manding Consulting est une entreprise spécialisée dans le conseil et la réalisation de projets de
              construction. Nous mettons notre expertise au service de vos ambitions pour créer des infrastructures
              durables et innovantes.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Notre équipe de professionnels qualifiés vous accompagne à chaque étape de votre projet, de la conception
              à la réalisation, en passant par la gestion et le suivi.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.54%20%281%29-bYo8Zq6gvzjctZvly4TzWLO4WTlXiN.jpeg"
                alt="Équipe Manding Consulting"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-lg shadow-xl max-w-xs hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm">Projets réalisés avec succès</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
