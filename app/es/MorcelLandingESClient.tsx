"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CheckCircle, Star, Users, Plus, Grid3X3, Edit3, TrendingUp, Globe, ChevronDown } from "lucide-react"
import { Dela_Gothic_One, Chivo } from "next/font/google"

const delaGothicOne = Dela_Gothic_One({ weight: "400", subsets: ["latin"] })
const chivo = Chivo({ subsets: ["latin"] })

const translations = {
  home: "Inicio",
  howItWorks: "Cómo Funciona",
  pricing: "Precios",
  contact: "Contacto",
  signIn: "Iniciar Sesión",
  signUp: "Registrarse",
  heroTitle: "Convierte Tu Menú En Un",
  heroTitleHighlight: "Feed de Redes Sociales",
  heroSubtitle:
    "¿Por qué mostrar PDFs aburridos cuando los clientes quieren navegación estilo Instagram y pedidos fáciles, contenido sin esfuerzo que impulsa las ventas?",
  buildYourMenu: "Construye tu menú",
  seeLiveMenu: "Ver Menú en Vivo",
  qrMenusTitle: "Menús QR, Reinventados",
  qrMenusSubtitle:
    "Morcel convierte los menús QR obsoletos en experiencias interactivas y móviles que encantarán a tus huéspedes. Sin PDFs. Sin pellizcar para hacer zoom. Solo menús deslizables y escaneables estilo redes sociales, con 3 plantillas elegantes y soporte multiidioma.",
  mobileFirst: "Móvil Primero",
  mobileFirstDesc: "Diseñado para teléfonos, no PDFs de escritorio",
  templates: "3 Plantillas",
  templatesDesc: "Elige entre diseños elegantes y personalizables",
  multiLanguage: "Multi-Idioma",
  multiLanguageDesc: "Sirve a los huéspedes en su idioma preferido",
  howMorcelWorksTitle: "Cómo Funciona Morcel",
  howMorcelWorksSubtitle: "Tres pasos simples para revolucionar tu experiencia gastronómica",
  createAccount: "Crea Tu Cuenta",
  createAccountDesc: "Configura el perfil de tu restaurante y comienza con nuestra plataforma de pagos sin problemas",
  addMenu: "Agrega Tu Menú",
  addMenuDesc: "Sube los elementos de tu menú con precios para crear una experiencia gastronómica digital completa",
  shareMenu: "Comparte Tu Menú",
  shareMenuDesc: "Genera códigos QR para tus mesas y permite que los clientes accedan a tu menú al instante",
  socialFeedTitle: "Convierte Tu Menú En Un Feed de Redes Sociales",
  socialFeedSubtitle:
    "¿Por qué mostrar PDFs aburridos cuando puedes crear experiencias gastronómicas dignas de Instagram? Transforma cada plato en contenido atractivo.",
  visualDiscoveryTitle: "Descubrimiento Visual de Comida",
  visualDiscoverySubtitle: "Navega como Instagram, ordena como magia",
  visualDiscoveryDesc:
    "Transforma tu menú tradicional en un feed visual impresionante. Los clientes se desplazan por hermosas fotos de comida, como su plataforma social favorita.",
  instagramLayout: "Diseño estilo Instagram",
  highQualityPhotos: "Fotos de comida de alta calidad",
  instantVisualAppeal: "Atractivo visual instantáneo",
  viralMenuTitle: "Experiencia de Menú Viral",
  viralMenuSubtitle: "Hazlo viral, un plato a la vez.",
  viralMenuDesc:
    "Cada plato se convierte en contenido compartible. Cada pedido se convierte en una historia. Tus platos no solo satisfacen el hambre, crean conversaciones e impulsan el marketing orgánico.",
  shareableContent: "Contenido compartible",
  socialSharingBuiltIn: "Compartir social integrado",
  viralPotentialDesign: "Diseño con potencial viral",
  socialMenuFeatures: "Características del Menú Social",
  everythingYouNeedTitle: "Todo lo que necesitas para cenas virales",
  scrollHeartOrder: "Desplaza. Corazón. Ordena.",
  scrollHeartOrderDesc:
    "Sin PDFs, sin tiempos de carga. Solo descubrimiento visual instantáneo de comida que se siente como redes sociales.",
  contentCreator: "Eres el Creador de Contenido.",
  contentCreatorDesc:
    "Cambia tu feed en segundos. Cero impresión. Crea contenido gastronómico digno de volverse viral que se vende solo.",
  builtToGoViral: "Construido Para Volverse Viral.",
  builtToGoViralDesc:
    "Cada plato está listo para Instagram. Convierte cada comida en contenido generado por usuarios que se promociona solo.",
  trustedWorldwideTitle: "Confiado Mundialmente",
  trustedWorldwideSubtitle:
    "Únete a miles de restaurantes y millones de comensales que ya han transformado su experiencia gastronómica.",
  restaurantsTrustUs: "Restaurantes Confían en Nosotros",
  happyDinersMonthly: "Comensales Felices Mensualmente",
  countriesWorldwide: "Países Mundialmente",
  systemUptime: "Tiempo de Actividad del Sistema",
  testimonialQuote:
    "Morcel ha transformado completamente nuestra experiencia del cliente. La gente sabe inmediatamente lo que quiere, ayudándonos a vender más y rotar mesas más rápido.",
  testimonialName: "María Santos",
  testimonialTitle: "Gerente, Restaurante Bella Vista",
  pricingTitle: "Precios Simples y Transparentes",
  pricingSubtitle: "Todo lo que necesitas para transformar la experiencia del menú de tu restaurante",
  launchPrice: "Precio de Lanzamiento",
  perMonth: "por mes",
  unlimitedMenus: "Menús ilimitados",
  swipeableTemplates: "3 plantillas deslizables estilo redes sociales",
  photoTagsDescriptions: "Fotos, etiquetas y descripciones",
  multiLanguageSupport: "Soporte multi-idioma",
  mobileFirstNoApp: "Móvil primero, sin app necesaria",
  instantQRGeneration: "Generación instantánea de códigos QR",
  noSetupFees: "Sin tarifas de configuración • Cancela en cualquier momento",
  finalCtaTitle: "Es hora de hacer que tu menú se vuelva viral",
  finalCtaSubtitle:
    "Deja de mostrar menús aburridos. Comienza a crear contenido gastronómico que los clientes no pueden parar de compartir.",
  freeSetupOnboarding: "Configuración e incorporación gratuitas",
  noSetupFeesHidden: "Sin tarifas de configuración o costos ocultos",
  footerDescription: "Transformando experiencias de restaurantes a través de menús estilo redes sociales.",
  product: "Producto",
  features: "Características",
  resources: "Recursos",
  allRightsReserved: "© 2025 Morcel. Todos los derechos reservados.",
  privacy: "Privacidad",
  terms: "Términos",
  cookies: "Cookies",
}

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
]

export default function MorcelLandingESClient() {
  const [currentLanguage, setCurrentLanguage] = useState("es")
  const t = translations

  const handleLanguageChange = (langCode: string) => {
    if (langCode === "en") {
      window.location.href = "/"
    } else if (langCode === "es") {
      return
    } else {
      window.location.href = `/?lang=${langCode}`
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/images/morcel-logo.svg" alt="Morcel" width={120} height={40} className="h-8 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className={`${chivo.className} text-gray-600 hover:text-gray-900`}>
              {t.home}
            </Link>
            <Link href="#qr-menus" className={`${chivo.className} text-gray-600 hover:text-gray-900`}>
              {t.howItWorks}
            </Link>
            <Link href="#pricing" className={`${chivo.className} text-gray-600 hover:text-gray-900`}>
              {t.pricing}
            </Link>
            <Link href="mailto:hello@morcel.ai" className={`${chivo.className} text-gray-600 hover:text-gray-900`}>
              {t.contact}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`${chivo.className} text-gray-600 hover:text-gray-900 flex items-center gap-2`}
                >
                  <Globe className="w-4 h-4" />
                  {languages.find((lang) => lang.code === currentLanguage)?.flag}
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className={`${chivo.className} cursor-pointer flex items-center gap-3`}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <span>{language.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="https://morcel.ai" className={`${chivo.className} text-gray-600 hover:text-gray-900`}>
              {t.signIn}
            </Link>
            <Link href="https://morcel.ai/signup">
              <Button
                className={`${chivo.className} bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full`}
              >
                {t.buildYourMenu}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            <div className="space-y-8">
              <div className="border-l-4 border-black pl-8">
                <h1 className={`${delaGothicOne.className} text-4xl md:text-6xl text-gray-900 mb-6 text-center`}>
                  {t.heroTitle} <span className="text-orange-500">{t.heroTitleHighlight}</span>
                </h1>
                <p
                  className={`${chivo.className} text-xl text-gray-600 mb-8 leading-relaxed text-center max-w-3xl mx-auto`}
                >
                  {t.heroSubtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="https://morcel.ai/signup">
                    <Button
                      className={`${chivo.className} bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg`}
                    >
                      {t.buildYourMenu}
                    </Button>
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className={`${chivo.className} border-gray-300 text-gray-700 px-8 py-3 rounded-full text-lg flex items-center gap-2`}
                      >
                        {t.seeLiveMenu}
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-48">
                      <DropdownMenuItem asChild>
                        <Link
                          href="https://dev.morcel.ai/menu/easZSZ?theme=instagram"
                          className={`${chivo.className} cursor-pointer`}
                        >
                          Instagram
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href="https://dev.morcel.ai/menu/easZSZ?theme=tiktok"
                          className={`${chivo.className} cursor-pointer`}
                        >
                          TikTok
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href="https://dev.morcel.ai/menu/easZSZ?theme=tinder"
                          className={`${chivo.className} cursor-pointer`}
                        >
                          Tinder
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="qr-menus" className="px-4 py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${delaGothicOne.className} text-3xl md:text-5xl text-gray-900 mb-6`}>{t.qrMenusTitle}</h2>
          <p className={`${chivo.className} text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto`}>
            {t.qrMenusSubtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className={`${delaGothicOne.className} text-purple-600 text-lg`}>📱</span>
              </div>
              <h3 className={`${delaGothicOne.className} text-lg mb-2 text-gray-900`}>{t.mobileFirst}</h3>
              <p className={`${chivo.className} text-gray-600 text-sm`}>{t.mobileFirstDesc}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className={`${delaGothicOne.className} text-orange-600 text-lg`}>🎨</span>
              </div>
              <h3 className={`${delaGothicOne.className} text-lg mb-2 text-gray-900`}>{t.templates}</h3>
              <p className={`${chivo.className} text-gray-600 text-sm`}>{t.templatesDesc}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className={`${delaGothicOne.className} text-green-600 text-lg`}>🌍</span>
              </div>
              <h3 className={`${delaGothicOne.className} text-lg mb-2 text-gray-900`}>{t.multiLanguage}</h3>
              <p className={`${chivo.className} text-gray-600 text-sm`}>{t.multiLanguageDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`${delaGothicOne.className} text-3xl md:text-4xl text-gray-900 mb-4`}>
            {t.howMorcelWorksTitle}
          </h2>
          <p className={`${chivo.className} text-xl text-gray-600 mb-12`}>{t.howMorcelWorksSubtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className={`${delaGothicOne.className} text-white text-xl`}>1</span>
              </div>
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className={`${delaGothicOne.className} text-xl mb-3 text-gray-900`}>{t.createAccount}</h3>
              <p className={`${chivo.className} text-gray-600 leading-relaxed`}>{t.createAccountDesc}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className={`${delaGothicOne.className} text-white text-xl`}>2</span>
              </div>
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
                <Plus className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className={`${delaGothicOne.className} text-xl mb-3 text-gray-900`}>{t.addMenu}</h3>
              <p className={`${chivo.className} text-gray-600 leading-relaxed`}>{t.addMenuDesc}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className={`${delaGothicOne.className} text-white text-xl`}>3</span>
              </div>
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className={`${delaGothicOne.className} text-xl mb-3 text-gray-900`}>{t.shareMenu}</h3>
              <p className={`${chivo.className} text-gray-600 leading-relaxed`}>{t.shareMenuDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className={`${delaGothicOne.className} text-3xl md:text-4xl text-gray-900 mb-4`}>{t.socialFeedTitle}</h2>
          <p className={`${chivo.className} text-xl text-gray-600 max-w-3xl mx-auto`}>{t.socialFeedSubtitle}</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className={`${delaGothicOne.className} text-4xl md:text-5xl text-gray-900 mb-4`}>
              {t.visualDiscoveryTitle}
            </h3>
            <p className={`${delaGothicOne.className} text-xl text-orange-600 mb-6`}>{t.visualDiscoverySubtitle}</p>
            <p className={`${chivo.className} text-gray-600 mb-8 text-lg leading-relaxed`}>{t.visualDiscoveryDesc}</p>

            <ul className="space-y-4">
              <li className={`${chivo.className} flex items-center text-gray-700`}>
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                <span>{t.instagramLayout}</span>
              </li>
              <li className={`${chivo.className} flex items-center text-gray-700`}>
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                <span>{t.highQualityPhotos}</span>
              </li>
              <li className={`${chivo.className} flex items-center text-gray-700`}>
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                <span>{t.instantVisualAppeal}</span>
              </li>
            </ul>
          </div>

          <div className="relative flex justify-center">
            <Image
              src="/images/mobile-food-app-new.png"
              alt="Interfaz de aplicación móvil de comida"
              width={400}
              height={600}
              className="max-w-full h-auto"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-2">
            <h3 className={`${delaGothicOne.className} text-4xl md:text-5xl text-gray-900 mb-4`}>{t.viralMenuTitle}</h3>
            <p className={`${delaGothicOne.className} text-xl text-orange-600 mb-6`}>{t.viralMenuSubtitle}</p>
            <p className={`${chivo.className} text-gray-600 mb-8 text-lg leading-relaxed`}>{t.viralMenuDesc}</p>

            <ul className="space-y-4">
              <li className={`${chivo.className} flex items-center text-gray-700`}>
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                <span>{t.shareableContent}</span>
              </li>
              <li className={`${chivo.className} flex items-center text-gray-700`}>
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                <span>{t.socialSharingBuiltIn}</span>
              </li>
              <li className={`${chivo.className} flex items-center text-gray-700`}>
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                <span>{t.viralPotentialDesign}</span>
              </li>
            </ul>
          </div>

          <div className="relative order-1 lg:order-1 flex justify-center">
            <Image
              src="/images/coffee-menu-app.png"
              alt="Aplicación de menú de café"
              width={300}
              height={600}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className={`${chivo.className} bg-orange-100 text-orange-600 mb-4`}>{t.socialMenuFeatures}</Badge>
          <h2 className={`${delaGothicOne.className} text-3xl md:text-4xl text-gray-900 mb-12`}>
            {t.everythingYouNeedTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-left bg-white border-0 shadow-sm">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Grid3X3 className="w-8 h-8 text-white" />
              </div>
              <h3 className={`${delaGothicOne.className} text-xl mb-4 text-gray-900`}>{t.scrollHeartOrder}</h3>
              <p className={`${chivo.className} text-gray-600 leading-relaxed`}>{t.scrollHeartOrderDesc}</p>
            </Card>

            <Card className="p-8 text-left bg-white border-0 shadow-sm">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Edit3 className="w-8 h-8 text-white" />
              </div>
              <h3 className={`${delaGothicOne.className} text-xl mb-4 text-gray-900`}>{t.contentCreator}</h3>
              <p className={`${chivo.className} text-gray-600 leading-relaxed`}>{t.contentCreatorDesc}</p>
            </Card>

            <Card className="p-8 text-left bg-white border-0 shadow-sm">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className={`${delaGothicOne.className} text-xl mb-4 text-gray-900`}>{t.builtToGoViral}</h3>
              <p className={`${chivo.className} text-gray-600 leading-relaxed`}>{t.builtToGoViralDesc}</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`${delaGothicOne.className} text-3xl md:text-4xl text-gray-900 mb-4`}>
            {t.trustedWorldwideTitle}
          </h2>
          <p className={`${chivo.className} text-xl text-gray-600 mb-12 max-w-3xl mx-auto`}>
            {t.trustedWorldwideSubtitle}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className={`${delaGothicOne.className} text-4xl md:text-5xl text-purple-600 mb-2`}>1,000+</div>
              <div className={`${chivo.className} text-gray-600`}>{t.restaurantsTrustUs}</div>
            </div>
            <div className="text-center">
              <div className={`${delaGothicOne.className} text-4xl md:text-5xl text-purple-600 mb-2`}>50K+</div>
              <div className={`${chivo.className} text-gray-600`}>{t.happyDinersMonthly}</div>
            </div>
            <div className="text-center">
              <div className={`${delaGothicOne.className} text-4xl md:text-5xl text-purple-600 mb-2`}>15</div>
              <div className={`${chivo.className} text-gray-600`}>{t.countriesWorldwide}</div>
            </div>
            <div className="text-center">
              <div className={`${delaGothicOne.className} text-4xl md:text-5xl text-purple-600 mb-2`}>99.9%</div>
              <div className={`${chivo.className} text-gray-600`}>{t.systemUptime}</div>
            </div>
          </div>

          <Card className="max-w-4xl mx-auto p-8">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className={`${chivo.className} text-xl text-gray-700 mb-6`}>"{t.testimonialQuote}"</blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                <span className={`${delaGothicOne.className} text-white`}>MS</span>
              </div>
              <div>
                <div className={`${delaGothicOne.className} text-gray-900`}>{t.testimonialName}</div>
                <div className={`${chivo.className} text-gray-600`}>{t.testimonialTitle}</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="pricing" className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${delaGothicOne.className} text-3xl md:text-4xl text-gray-900 mb-4`}>{t.pricingTitle}</h2>
          <p className={`${chivo.className} text-xl text-gray-600 mb-12`}>{t.pricingSubtitle}</p>

          <Card className="max-w-md mx-auto bg-white border-2 border-purple-200 shadow-lg">
            <div className="p-8 text-center">
              <div className={`${chivo.className} text-lg font-semibold text-purple-600 mb-3`}>
                ¡Comienza con una prueba gratuita de 7 días!
              </div>
              <Badge className={`${chivo.className} bg-orange-100 text-orange-600 mb-4`}>{t.launchPrice}</Badge>

              <div className="mb-6">
                <div className={`${delaGothicOne.className} text-5xl text-gray-900 mb-2`}>$10</div>
                <div className={`${chivo.className} text-gray-600`}>{t.perMonth}</div>
              </div>

              <ul className="space-y-4 mb-8 text-left">
                <li className={`${chivo.className} flex items-center text-gray-700`}>
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>{t.unlimitedMenus}</span>
                </li>
                <li className={`${chivo.className} flex items-center text-gray-700`}>
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>{t.swipeableTemplates}</span>
                </li>
                <li className={`${chivo.className} flex items-center text-gray-700`}>
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>{t.photoTagsDescriptions}</span>
                </li>
                <li className={`${chivo.className} flex items-center text-gray-700`}>
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>{t.multiLanguageSupport}</span>
                </li>
                <li className={`${chivo.className} flex items-center text-gray-700`}>
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>{t.mobileFirstNoApp}</span>
                </li>
                <li className={`${chivo.className} flex items-center text-gray-700`}>
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>{t.instantQRGeneration}</span>
                </li>
              </ul>

              <Link href="https://morcel.ai/signup">
                <Button
                  className={`${chivo.className} w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full text-lg mb-4`}
                >
                  {t.buildYourMenu}
                </Button>
              </Link>

              <p className={`${chivo.className} text-sm text-gray-500`}>{t.noSetupFees}</p>
            </div>
          </Card>
        </div>
      </section>

      <section className="px-4 py-16 bg-gradient-to-r from-purple-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className={`${delaGothicOne.className} text-3xl md:text-4xl mb-4`}>{t.finalCtaTitle}</h2>
          <p className={`${chivo.className} text-xl mb-8 opacity-90`}>{t.finalCtaSubtitle}</p>

          <Link href="https://morcel.ai/signup">
            <Button
              className={`${chivo.className} bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg mb-6`}
            >
              {t.buildYourMenu}
            </Button>
          </Link>

          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-80">
            <span className={`${chivo.className} flex items-center`}>
              <CheckCircle className="w-4 h-4 mr-2" />
              {t.freeSetupOnboarding}
            </span>
            <span className={`${chivo.className} flex items-center`}>
              <CheckCircle className="w-4 h-4 mr-2" />
              {t.noSetupFeesHidden}
            </span>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <Image src="/images/morcel-logo.svg" alt="Morcel" width={120} height={40} className="h-8 w-auto mb-4" />
              <p className={`${chivo.className} text-gray-400 max-w-md`}>{t.footerDescription}</p>
            </div>

            <div>
              <h3 className={`${delaGothicOne.className} text-lg mb-4`}>{t.product}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#qr-menus" className={`${chivo.className} text-gray-400 hover:text-white`}>
                    {t.features}
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className={`${chivo.className} text-gray-400 hover:text-white`}>
                    {t.pricing}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className={`${delaGothicOne.className} text-lg mb-4`}>{t.resources}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="mailto:hello@morcel.ai" className={`${chivo.className} text-gray-400 hover:text-white`}>
                    {t.contact}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className={`${chivo.className} text-gray-400 text-sm`}>{t.allRightsReserved}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className={`${chivo.className} text-gray-400 hover:text-white text-sm`}>
                {t.privacy}
              </Link>
              <Link href="#" className={`${chivo.className} text-gray-400 hover:text-white text-sm`}>
                {t.terms}
              </Link>
              <Link href="#" className={`${chivo.className} text-gray-400 hover:text-white text-sm`}>
                {t.cookies}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
