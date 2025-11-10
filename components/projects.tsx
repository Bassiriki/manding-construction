"use client"

import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Structure Métallique Industrielle",
    category: "Construction Métallique",
    description: "Hangar industriel avec structure métallique de haute qualité",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.53%20%284%29-HNhHwWCRxfPcpjDXE4tZZP8TGJLoZp.jpeg",
    slug: "structure-metallique",
  },
  {
    title: "Installation Panneaux Solaires",
    category: "Énergie Renouvelable",
    description: "Système solaire photovoltaïque pour bâtiment commercial",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.54-Hhacjb61OnaM0IxSarN7tVZjOhT2m6.jpeg",
    slug: "panneaux-solaires",
  },
  {
    title: "Château d'Eau USAID",
    category: "Infrastructure Hydraulique",
    description: "Construction de château d'eau pour projet USAID",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.53%20%283%29-IqG1Ji2k4GRat6qfBmiZlDILeDFkuf.jpeg",
    slug: "chateau-eau",
  },
  {
    title: "Fondations et Génie Civil",
    category: "Génie Civil",
    description: "Travaux de fondations et infrastructure pour projet majeur",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.51%20%285%29-PSBxuWNShbrGHhf5klDAZc5AAA86B3.jpeg",
    slug: "fondations-batiment",
  },
  {
    title: "Menuiserie Métallique",
    category: "Menuiserie",
    description: "Fabrication sur mesure de portes et fenêtres métalliques",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.52%20%285%29-qM803jNrIF8ktFRd6F10L8l3Qo6O9S.jpeg",
    slug: "menuiserie-metallique",
  },
  {
    title: "Infrastructure d'Aquaculture",
    category: "Agriculture",
    description: "Installation moderne pour l'élevage aquacole",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.52%20%284%29-tRBRTrPnn6leOUGcqtlqXx9r2ZwFyg.jpeg",
    slug: "aquaculture",
  },
]

export function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
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

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScroll)
      return () => container.removeEventListener("scroll", checkScroll)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <section ref={sectionRef} id="projets" className="py-20 md:py-28 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Nos Réalisations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Découvrez quelques-uns de nos projets réalisés avec succès pour nos clients
          </p>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white shadow-lg hover:scale-110 transition-transform"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, index) => (
              <Link key={index} href={`/projets/${project.slug}`} className="flex-shrink-0 w-[85vw] md:w-[400px]">
                <Card
                  className={`h-full overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 snap-center border-2 hover:border-primary transform hover:-translate-y-2 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-sm font-medium text-primary mb-2 uppercase tracking-wide">
                        {project.category}
                      </div>
                      <h3 className="text-2xl font-bold text-balance mb-2">{project.title}</h3>
                      <p className="text-sm text-white/80 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        <span>Voir le projet</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {canScrollRight && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white shadow-lg hover:scale-110 transition-transform"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
