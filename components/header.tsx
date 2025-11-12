"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, Search, MapPin } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const mainNavItems = [
    { label: "Accueil", href: "#accueil" },
    { label: "Nos Services", href: "#services" },
    { label: "Les Projets", href: "#projets" },
    { label: "À propos", href: "#apropos" },
    { label: "Contact", href: "#contact" },
  ]

  const secondaryNavItems = [
    { label: "Nos Réalisations", href: "#projets" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ]

  const handleLocateUs = () => {
    const latitude = 12.6392
    const longitude = -8.0029
    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15`
    window.open(googleMapsUrl, "_blank")
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      alert(`Recherche : "${searchQuery}"`)
    }
    setIsSearchOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between relative">
          {/* LOGO */}
          <a href="#accueil" className="flex items-center gap-3 group">
            <div className="relative h-14 w-14 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.21-WmLAOu7klWKkjLUtt0NS0aOyWUGRcd.jpeg"
                alt="Logo Manding Consulting"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xl font-extrabold text-green-800 group-hover:text-green-600 transition-colors duration-300">
              Manding Construction
            </p>
          </a>

          {/* NAVIGATION DESKTOP */}
          <nav className="hidden lg:flex items-center gap-10">
            {mainNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg font-semibold text-gray-700 hover:text-green-700 transition-all relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* BOUTONS DROITE */}
          <div className="hidden lg:flex items-center gap-4 relative">
            <Button
              onClick={handleLocateUs}
              className="bg-green-700 hover:bg-green-600 text-white font-semibold flex items-center gap-2 px-5 py-2"
            >
              <MapPin className="h-4 w-4" />
              Localisez-nous
            </Button>

            <div ref={searchRef} className="relative">
              <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Recherche"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="h-5 w-5 text-gray-700" />
              </button>

              {isSearchOpen && (
                <form
                  onSubmit={handleSearch}
                  className="absolute right-0 top-10 bg-white shadow-md rounded-lg p-2 flex items-center gap-2 w-60 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher..."
                    className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
                  />
                  <Button size="sm" className="bg-green-700 hover:bg-green-600 text-white text-xs px-3 py-1.5">
                    OK
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* MENU MOBILE */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu mobile"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>

        {/* NAV SECONDAIRE */}
        <div className="hidden lg:flex items-center justify-center gap-10 py-3 border-t border-gray-200">
          {secondaryNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-medium text-gray-500 hover:text-green-700 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* MENU MOBILE */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-2">
              {[...mainNavItems, ...secondaryNavItems].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-lg font-semibold text-gray-700 hover:text-green-700 hover:bg-gray-100 transition-all py-3 px-4 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={handleLocateUs}
                className="mt-4 bg-green-700 hover:bg-green-600 text-white flex items-center gap-2"
              >
                <MapPin className="h-4 w-4" />
                Localisez-nous
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
