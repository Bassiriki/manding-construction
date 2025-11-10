import Image from "next/image"
import { Facebook, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.21-WmLAOu7klWKkjLUtt0NS0aOyWUGRcd.jpeg"
                  alt="Manding Consulting"
                  fill
                  className="object-contain"
                />
                
              </div>
              <div className="font-bold text-lg">Manding Construction</div>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Votre partenaire de confiance pour tous vos projets de construction et d'infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#accueil"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projets"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#apropos"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  À Propos
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Structures Métalliques</li>
              <li>Installations Solaires</li>
              <li>Infrastructures Hydrauliques</li>
              <li>Maintenance Industrielle</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-secondary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+223 XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>contact@mandingconsulting.com</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {currentYear} Manding Consulting. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
