"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Sun, Droplets, Wrench, HardHat, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Building2,
    title: "Structures Métalliques",
    description:
      "Conception et installation de structures métalliques robustes pour tous types de bâtiments industriels et commerciaux.",
  },
  {
    icon: Sun,
    title: "Installations Solaires",
    description:
      "Solutions d'énergie renouvelable avec installation de panneaux solaires et systèmes photovoltaïques performants.",
  },
  {
    icon: Droplets,
    title: "Infrastructures Hydrauliques",
    description: "Construction de châteaux d'eau, systèmes de distribution et infrastructures de gestion des eaux.",
  },
  {
    icon: Wrench,
    title: "Maintenance Industrielle",
    description: "Services de maintenance préventive et corrective pour garantir la longévité de vos installations.",
  },
  {
    icon: HardHat,
    title: "Gestion de Projets",
    description: "Accompagnement complet de vos projets, de la conception à la livraison, avec suivi rigoureux.",
  },
  {
    icon: Zap,
    title: "Installations Électriques",
    description:
      "Mise en place de systèmes électriques conformes aux normes pour bâtiments industriels et résidentiels.",
  },
]

export function Services() {
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
    <section ref={sectionRef} id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Nos Services d'Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Une gamme complète de services pour répondre à tous vos besoins en construction et infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`border-2 hover:border-primary transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => {
                  // Animation de clic
                  const card = document.getElementById(`service-${index}`)
                  if (card) {
                    card.style.transform = "scale(0.95)"
                    setTimeout(() => {
                      card.style.transform = ""
                    }, 150)
                  }
                }}
                id={`service-${index}`}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
