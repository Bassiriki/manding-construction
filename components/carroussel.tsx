"use client"

import { useEffect, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = ["/f1.jpeg", "/f2.jpeg", "/h1.jpg", "/h2.jpeg", "/m1.jpeg", "/m2.jpeg", "/m3.jpeg", "/m4.jpeg", "/h3.jpeg", "/h4.jpeg", "/h5.jpeg", "/h6.jpeg", "/h7.jpeg", "/h8.jpeg", "/h9.jpeg"]

interface CarouselCardProps {
  title?: string
  description?: string
}

export default function CarouselCards({
  title = "Nos réalisations récentes",
  description = "Découvrez nos derniers projets",
}: CarouselCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(3)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState<"next" | "prev">("next")

  const handleNext = useCallback(() => {
    if (!isTransitioning) {
      setDirection("next")
      setIsTransitioning(true)
      setCurrentIndex((prev) => (prev + 1) % images.length)
      setTimeout(() => setIsTransitioning(false), 700)
    }
  }, [isTransitioning])

  const handlePrev = useCallback(() => {
    if (!isTransitioning) {
      setDirection("prev")
      setIsTransitioning(true)
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
      setTimeout(() => setIsTransitioning(false), 700)
    }
  }, [isTransitioning])

  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [isAutoPlay])

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) setVisibleCards(1)
      else if (window.innerWidth < 1024) setVisibleCards(2)
      else if (window.innerWidth < 1280) setVisibleCards(2.5)
      else setVisibleCards(3)
    }
    updateVisibleCards()
    window.addEventListener("resize", updateVisibleCards)
    return () => window.removeEventListener("resize", updateVisibleCards)
  }, [])

  return (
    <section className="relative w-full bg-gradient-to-b from-background to-secondary/10 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="text-center mb-12 md:mb-16 px-4 animate-fade-in-down">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">{title}</h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{description}</p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={handlePrev}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          aria-label="Previous slide"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -ml-4 sm:-ml-6 lg:-ml-8 bg-primary hover:bg-primary/90 p-2.5 sm:p-3 rounded-full text-primary-foreground transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="overflow-hidden w-full rounded-3xl shadow-2xl">
          <div
            className={`flex transition-transform duration-700 ease-out gap-4 ${direction === "next" ? "animate-slide-forward" : "animate-slide-backward"}`}
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
            }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0"
                style={{
                  minWidth: `${100 / visibleCards}%`,
                  paddingRight: "1rem",
                }}
              >
                <div className="group relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <img
                    src={src || "/placeholder.svg"}
                    alt={`Projet ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-fade-in-up">
                    <div className="text-center">
                      <p className="text-white font-semibold text-lg md:text-xl mb-2">Projet {i + 1}</p>
                      <p className="text-white/80 text-sm md:text-base">Découvrez les détails</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          aria-label="Next slide"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 -mr-4 sm:-mr-6 lg:-mr-8 bg-primary hover:bg-primary/90 p-2.5 sm:p-3 rounded-full text-primary-foreground transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl active:scale-95"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      <div className="flex justify-center items-center gap-3 mt-12 md:mt-16 px-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentIndex(i)
              setIsAutoPlay(true)
            }}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === currentIndex
                ? "bg-primary h-3 w-8 scale-100 shadow-lg shadow-primary/50"
                : "bg-muted hover:bg-muted-foreground h-2.5 w-2.5 hover:scale-125"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
