"use client"

import { Phone, MessageCircle } from "lucide-react"

export function TopBar() {
  return (
    <div className="relative bg-[#1a4d4d] text-white py-2 text-xs sm:text-sm md:text-base overflow-hidden shadow-md transition-all duration-700">
      {/* Effet de lumière doux */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 animate-gradient-x" />

      <div className="container mx-auto px-3 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 relative z-10">
        {/* ---- Section gauche : Téléphone + WhatsApp ---- */}
        <div className="flex items-center gap-4 text-center sm:text-left">
          <a
            href="tel:+22300000000"
            className="flex items-center gap-1 hover:text-[#3DB39E] transition-all duration-300"
            aria-label="Téléphone"
          >
            <Phone className="h-4 w-4" />
            <span>+223 00 00 00 00</span>
          </a>

          <a
            href="https://wa.me/22300000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#3DB39E] transition-all duration-300"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* ---- Texte défilant stylé ---- */}
        <div className="relative w-full sm:w-80 md:w-[420px] overflow-hidden h-5 sm:h-6">
          <div className="absolute whitespace-nowrap animate-scroll text-transparent bg-clip-text bg-gradient-to-r from-[#3DB39E] via-white to-[#3DB39E] font-semibold tracking-wide">
            <a
              href="#apropos"
              className="hover:text-white transition-all"
            >
              Découvrez Manding Consulting — votre partenaire de confiance en construction métallique,
              installations solaires et infrastructures !
            </a>
          </div>
        </div>
      </div>

      {/* 🎬 Animations CSS */}
      <style jsx>{`
        /* Texte défilant horizontalement */
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          display: inline-block;
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Effet lumière douce en fond */
        @keyframes gradient-x {
          0%, 100% {
            transform: translateX(-50%);
          }
          50% {
            transform: translateX(50%);
          }
        }
        .animate-gradient-x {
          animation: gradient-x 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
