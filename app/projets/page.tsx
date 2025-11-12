import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Calendar, MapPin } from "lucide-react"
import { notFound } from "next/navigation"

const projectsData = {
  "structure-metallique": {
    title: "Structure Métallique Industrielle",
    category: "Construction Métallique",
    location: "Bamako, Mali",
    date: "2024",
    description:
      "Conception et réalisation d'un hangar industriel de grande envergure avec une structure métallique robuste et durable. Ce projet démontre notre expertise dans la construction de structures métalliques complexes adaptées aux besoins industriels.",
    longDescription:
      "Notre équipe a conçu et construit ce hangar industriel en utilisant des techniques de pointe en construction métallique. La structure en acier galvanisé offre une résistance exceptionnelle aux conditions climatiques tout en garantissant une longue durée de vie. Le toit en tôle ondulée assure une protection optimale contre les intempéries.",
    features: [
      "Structure en acier galvanisé de haute qualité",
      "Toiture en tôle ondulée résistante",
      "Grande portée sans piliers intermédiaires",
      "Résistance aux conditions climatiques extrêmes",
      "Installation rapide et efficace",
      "Maintenance minimale requise",
    ],
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.53%20%284%29-HNhHwWCRxfPcpjDXE4tZZP8TGJLoZp.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.53%20%284%29-KnMkvbTIvqdQH6A8TFJx7GVqbQrfH1.jpeg",
    ],
  },
  "panneaux-solaires": {
    title: "Installation Panneaux Solaires",
    category: "Énergie Renouvelable",
    location: "Bamako, Mali",
    date: "2024",
    description:
      "Installation complète d'un système solaire photovoltaïque sur toiture pour un bâtiment commercial. Ce projet illustre notre engagement envers les solutions énergétiques durables et notre expertise en énergie renouvelable.",
    longDescription:
      "Nous avons réalisé l'installation d'un système solaire photovoltaïque complet comprenant des panneaux de dernière génération, une structure de montage robuste et un système de gestion intelligent. Cette installation permet au client de réduire considérablement ses coûts énergétiques tout en contribuant à la protection de l'environnement.",
    features: [
      "Panneaux solaires haute performance",
      "Structure de montage en aluminium résistant",
      "Système de gestion et monitoring intelligent",
      "Réduction significative des coûts énergétiques",
      "Installation certifiée et garantie",
      "Maintenance et suivi régulier",
    ],
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.54-Hhacjb61OnaM0IxSarN7tVZjOhT2m6.jpeg",
    ],
  },
  "chateau-eau": {
    title: "Château d'Eau USAID",
    category: "Infrastructure Hydraulique",
    location: "Mali",
    date: "2024",
    description:
      "Construction d'un château d'eau dans le cadre d'un projet USAID pour améliorer l'accès à l'eau potable. Ce projet démontre notre capacité à réaliser des infrastructures hydrauliques essentielles pour les communautés.",
    longDescription:
      "En partenariat avec USAID, nous avons construit ce château d'eau moderne qui améliore considérablement l'accès à l'eau potable pour la communauté locale. La structure métallique élevée assure une pression d'eau optimale, tandis que le réservoir de grande capacité garantit un approvisionnement constant. Ce projet illustre notre engagement envers le développement communautaire et notre expertise en infrastructure hydraulique.",
    features: [
      "Réservoir de grande capacité",
      "Structure métallique élevée et sécurisée",
      "Système de distribution optimisé",
      "Conformité aux normes internationales",
      "Accès sécurisé avec échelle et plateforme",
      "Impact social positif pour la communauté",
    ],
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.53%20%283%29-IqG1Ji2k4GRat6qfBmiZlDILeDFkuf.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.53%20%283%29-dURVQa0UduWiOYqtV9O4vFv71NNWjz.jpeg",
    ],
  },
  "fondations-batiment": {
    title: "Fondations et Travaux de Génie Civil",
    category: "Génie Civil",
    location: "Bamako, Mali",
    date: "2024",
    description:
      "Réalisation de fondations solides et travaux de génie civil pour un projet de construction majeur. Notre équipe expérimentée assure des bases durables pour tous types de structures.",
    longDescription:
      "Ce projet de génie civil comprend la préparation du terrain, le coulage de fondations en béton armé et l'installation d'infrastructures essentielles. Notre équipe de professionnels qualifiés utilise des équipements modernes et des techniques éprouvées pour garantir la solidité et la durabilité des fondations. Chaque étape est réalisée selon les normes de construction les plus strictes.",
    features: [
      "Étude de sol approfondie",
      "Fondations en béton armé de qualité",
      "Équipe d'ingénieurs expérimentés",
      "Respect des délais et du budget",
      "Contrôle qualité rigoureux",
      "Garantie sur les travaux réalisés",
    ],
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.51%20%285%29-PSBxuWNShbrGHhf5klDAZc5AAA86B3.jpeg",
    ],
  },
  "menuiserie-metallique": {
    title: "Menuiserie Métallique sur Mesure",
    category: "Menuiserie Métallique",
    location: "Bamako, Mali",
    date: "2024",
    description:
      "Fabrication et installation de menuiseries métalliques personnalisées incluant portes, fenêtres et grilles de sécurité. Des solutions esthétiques et sécurisées pour votre bâtiment.",
    longDescription:
      "Notre atelier de menuiserie métallique produit des éléments sur mesure alliant esthétique et sécurité. Chaque pièce est conçue selon vos spécifications exactes et fabriquée avec des matériaux de première qualité. Nos menuiseries métalliques offrent une excellente résistance tout en apportant une touche moderne à votre bâtiment.",
    features: [
      "Conception sur mesure",
      "Matériaux de haute qualité",
      "Finitions soignées et durables",
      "Installation professionnelle",
      "Sécurité renforcée",
      "Design moderne et élégant",
    ],
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.52%20%285%29-qM803jNrIF8ktFRd6F10L8l3Qo6O9S.jpeg",
    ],
  },
  aquaculture: {
    title: "Infrastructure d'Aquaculture",
    category: "Agriculture & Aquaculture",
    location: "Mali",
    date: "2024",
    description:
      "Construction d'installations modernes pour l'aquaculture avec structures métalliques et systèmes de gestion de l'eau. Un projet innovant soutenant le développement agricole durable.",
    longDescription:
      "Ce projet d'aquaculture moderne comprend la construction de bassins spécialisés avec toiture métallique protectrice et systèmes de circulation d'eau optimisés. Notre approche intégrée garantit des conditions idéales pour l'élevage aquacole tout en maximisant l'efficacité opérationnelle. Cette infrastructure contribue à la sécurité alimentaire et au développement économique local.",
    features: [
      "Bassins d'élevage optimisés",
      "Toiture protectrice en structure métallique",
      "Système de circulation d'eau efficace",
      "Conception respectueuse de l'environnement",
      "Capacité de production élevée",
      "Support technique et formation",
    ],
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.52%20%284%29-tRBRTrPnn6leOUGcqtlqXx9r2ZwFyg.jpeg",
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={project.images[0] || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <Link href="/#projets">
              <Button
                variant="outline"
                className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux projets
              </Button>
            </Link>
            <div className="text-sm font-medium text-primary mb-2 uppercase tracking-wide">{project.category}</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance">{project.title}</h1>
            <div className="flex flex-wrap gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{project.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">À propos du projet</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">{project.description}</p>
              <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
            </div>

            {/* Additional Images */}
            {project.images.length > 1 && (
              <div className="grid md:grid-cols-2 gap-4">
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Image ${index + 2}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Caractéristiques</h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t">
                <h4 className="font-semibold mb-3">Intéressé par un projet similaire ?</h4>
                <Link href="/#contact">
                  <Button className="w-full">Contactez-nous</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
