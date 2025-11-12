"use client"

import { Phone, MessageCircle } from "lucide-react"

export function TopBar() {
  return (
    <div className="relative bg-gradient-to-r from-[#123838] via-[#1a4d4d] to-[#123838] text-white py-2.5 text-xs sm:text-sm md:text-base shadow-md overflow-hidden backdrop-blur-[2px]">
      {/* Effet de brillance douce */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 animate-gradient-move opacity-20" />

      <div className="container mx-auto px-3 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 relative z-10">
        {/* ---- Section gauche : Téléphone + WhatsApp ---- */}
        <div className="flex items-center gap-5 text-center sm:text-left">
          <a
            href="tel:+223 66 85 54 22 "
            className="flex items-center gap-2 hover:text-[#3DB39E] transition-all duration-300"
            aria-label="Téléphone"
          >
            <Phone className="h-4 w-4" />
            <span className="font-medium">+223 66 85 54 22 </span>
          </a>

          <a
            href="https://wa.me/22366855422"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#3DB39E] transition-all duration-300"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="font-medium">WhatsApp</span>
          </a>
        </div>

        {/* ---- Texte défilant élégant ---- */}
        <div className="relative w-full sm:w-96 md:w-[480px] overflow-hidden h-5 sm:h-6">
          <div className="absolute whitespace-nowrap animate-scroll text-transparent bg-clip-text bg-gradient-to-r from-[#3DB39E] via-white to-[#3DB39E] font-semibold tracking-wide">
            <a
              href="#apropos"
              className="hover:text-white transition-all duration-3400"
            >
              Découvrez <span className="text-[#3DB39E]">Manding Construction</span> — votre partenaire de confiance en
              <span className="text-[#3DB39E]"> construction métallique</span>, <span className="text-[#3DB39E]">installations solaires</span> et
              <span className="text-[#3DB39E]"> infrastructures modernes</span> !
            </a>
          </div>
        </div>
      </div>

      {/* 🎬 Animations CSS */}
      <style jsx>{`
        /* Animation du texte défilant */
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
          animation: scroll 22s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Animation du reflet lumineux */
        @keyframes gradient-move {
          0%, 100% {
            transform: translateX(-50%);
          }
          50% {
            transform: translateX(50%);
          }
        }
        .animate-gradient-move {
          animation: gradient-move 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
