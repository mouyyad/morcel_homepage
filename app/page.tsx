"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, CheckCircle, Users, Plus, Grid3X3, Edit3, ChevronDown, Globe } from "lucide-react"
import { Dela_Gothic_One, Chivo } from "next/font/google"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

const delaGothicOne = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
})

const chivo = Chivo({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
})

const translations = {
  en: {
    home: "Home",
    howItWorks: "How it Works",
    pricing: "Pricing",
    contact: "Contact",
    signIn: "Sign In",
    signUp: "Sign Up",
    heroTitle: "Turn Your Menu Into a",
    heroTitleHighlight: "Social Media Feed",
    heroSubtitle:
      "Why show boring PDFs when customers want Instagram-style browsing and easy ordering, effortless content that drives orders.",
    buildYourMenu: "Build your menu",
    seeLiveMenu: "See Live Menu",
    seeLiveDemo: "See Live Demo",
    qrMenusTitle: "QR Menus, Reinvented",
    qrMenusSubtitle:
      "Morcel turns outdated QR code menus into interactive, mobile-first experiences your guests will love. No PDFs. No pinching to zoom. Just swipeable, scannable, social-style menus—with 3 stylish templates and multi-language support.",
    mobileFirst: "Mobile-First",
    mobileFirstDesc: "Designed for phones, not desktop PDFs",
    templates: "3 Templates",
    templatesDesc: "Choose from stylish, customizable designs",
    multiLanguage: "Multi-Language",
    multiLanguageDesc: "Serve guests in their preferred language",
    howMorcelWorksTitle: "How Morcel Works",
    howMorcelWorksSubtitle: "Three simple steps to revolutionize your dining experience",
    createAccount: "Create Your Account",
    createAccountDesc: "Set up your restaurant profile and get started with our seamless payment platform",
    addMenu: "Add Your Menu",
    addMenuDesc: "Upload your menu items with prices to create a complete digital dining experience",
    shareMenu: "Share Your Menu",
    shareMenuDesc: "Generate QR codes for your tables and let customers access your menu instantly",
    socialFeedTitle: "Turn Your Menu Into a Social Media Feed",
    socialFeedSubtitle:
      "Why show boring PDFs when you can create Instagram-worthy food experiences? Transform every dish into engaging content.",
    visualDiscoveryTitle: "Visual Food Discovery",
    visualDiscoverySubtitle: "Browse like Instagram, order like magic",
    visualDiscoveryDesc:
      "Transform your traditional menu into a stunning visual feed. Customers scroll through beautiful food photos, just like their favorite social platform.",
    instagramLayout: "Instagram-style layout",
    highQualityPhotos: "High-quality food photos",
    instantVisualAppeal: "Instant visual appeal",
    viralMenuTitle: "Viral Menu Experience",
    viralMenuSubtitle: "Let it go viral, one dish at a time.",
    viralMenuDesc:
      "Each dish becomes shareable content. Every order becomes a story. Your dishes don't just satisfy hunger - they create conversations and drive organic marketing.",
    shareableContent: "Shareable content",
    socialSharingBuiltIn: "Social sharing built-in",
    viralPotentialDesign: "Viral potential design",
    socialMenuFeatures: "Social Menu Features",
    everythingYouNeedTitle: "Everything you need for viral dining",
    scrollHeartOrder: "Scroll. Heart. Order.",
    scrollHeartOrderDesc: "No PDFs, no load times. Just instant visual food discovery that feels like social media.",
    contentCreator: "You're the Content Creator.",
    contentCreatorDesc:
      "Change your feed in seconds. Zero printing. Create viral-worthy food content that sells itself.",
    builtToGoViral: "Built to Go Viral.",
    builtToGoViralDesc:
      "Every dish is Instagram-ready. Turn every meal into user-generated content that markets itself.",
    trustedWorldwideTitle: "Trusted Worldwide",
    trustedWorldwideSubtitle:
      "Join thousands of restaurants and millions of diners who have already transformed their dining experience.",
    restaurantsTrustUs: "Restaurants Trust Us",
    happyDinersMonthly: "Happy Diners Monthly",
    countriesWorldwide: "Countries Worldwide",
    systemUptime: "System Uptime",
    testimonialQuote:
      "Morcel has completely transformed our customer experience. People immediately know what they want helping us sell more and turn tables over faster.",
    testimonialName: "Maria Santos",
    testimonialTitle: "Manager, Bella Vista Restaurant",
    pricingTitle: "Simple, Transparent Pricing",
    pricingSubtitle: "Everything you need to transform your restaurant's menu experience",
    launchPrice: "Launch Price",
    perMonth: "per month",
    unlimitedMenus: "Unlimited menus",
    swipeableTemplates: "3 swipeable, social-style templates",
    photoTagsDescriptions: "Photo, tags & descriptions",
    multiLanguageSupport: "Multi-language support",
    mobileFirstNoApp: "Mobile-first, no app needed",
    instantQRGeneration: "Instant QR code generation",
    noSetupFees: "No setup fees • Cancel anytime",
    finalCtaTitle: "Time to make your menu go viral",
    finalCtaSubtitle: "Stop showing boring menus. Start creating food content that customers can't stop sharing.",
    freeSetupOnboarding: "Free setup & onboarding",
    noSetupFeesHidden: "No setup fees or hidden costs",
    footerDescription: "Transforming restaurant experiences through social media-style menus.",
    product: "Product",
    features: "Features",
    resources: "Resources",
    allRightsReserved: "© 2024 Morcel. All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
    cookies: "Cookies",
  },
  es: {
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
    seeLiveDemo: "Ver Demo en Vivo",
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
    allRightsReserved: "© 2024 Morcel. Todos los derechos reservados.",
    privacy: "Privacidad",
    terms: "Términos",
    cookies: "Cookies",
  },
  fr: {
    home: "Accueil",
    howItWorks: "Comment Ça Marche",
    pricing: "Tarifs",
    contact: "Contact",
    signIn: "Se Connecter",
    signUp: "S'inscrire",
    heroTitle: "Transformez Votre Menu En Un",
    heroTitleHighlight: "Feed de Réseaux Sociaux",
    heroSubtitle:
      "Pourquoi montrer des PDFs ennuyeux quand les clients veulent une navigation style Instagram et des commandes faciles, du contenu sans effort qui génère des ventes ?",
    buildYourMenu: "Construisez votre menu",
    seeLiveMenu: "Voir Menu en Direct",
    seeLiveDemo: "Voir Démo en Direct",
    qrMenusTitle: "Menus QR, Réinventés",
    qrMenusSubtitle:
      "Morcel transforme les menus QR obsolètes en expériences interactives et mobiles que vos invités adoreront. Pas de PDFs. Pas de pincement pour zoomer. Juste des menus glissables et scannables style réseaux sociaux, avec 3 modèles élégants et support multilingue.",
    mobileFirst: "Mobile d'Abord",
    mobileFirstDesc: "Conçu pour les téléphones, pas les PDFs de bureau",
    templates: "3 Modèles",
    templatesDesc: "Choisissez parmi des designs élégants et personnalisables",
    multiLanguage: "Multi-Langue",
    multiLanguageDesc: "Servez les invités dans leur langue préférée",
    howMorcelWorksTitle: "Comment Morcel Fonctionne",
    howMorcelWorksSubtitle: "Trois étapes simples pour révolutionner votre expérience culinaire",
    createAccount: "Créez Votre Compte",
    createAccountDesc:
      "Configurez le profil de votre restaurant et commencez avec notre plateforme de paiement sans faille",
    addMenu: "Ajoutez Votre Menu",
    addMenuDesc:
      "Téléchargez vos éléments de menu avec les prix pour créer une expérience culinaire numérique complète",
    shareMenu: "Partagez Votre Menu",
    shareMenuDesc:
      "Générez des codes QR pour vos tables et permettez aux clients d'accéder instantanément à votre menu",
    socialFeedTitle: "Transformez Votre Menu En Un Feed de Réseaux Sociaux",
    socialFeedSubtitle:
      "Pourquoi montrer des PDFs ennuyeux quand vous pouvez créer des expériences culinaires dignes d'Instagram ? Transformez chaque plat en contenu engageant.",
    visualDiscoveryTitle: "Découverte Visuelle de Nourriture",
    visualDiscoverySubtitle: "Naviguez comme Instagram, commandez comme par magie",
    visualDiscoveryDesc:
      "Transformez votre menu traditionnel en un feed visuel époustouflant. Les clients font défiler de belles photos de nourriture, comme leur plateforme sociale préférée.",
    instagramLayout: "Mise en page style Instagram",
    highQualityPhotos: "Photos de nourriture haute qualité",
    instantVisualAppeal: "Attrait visuel instantané",
    viralMenuTitle: "Expérience de Menu Viral",
    viralMenuSubtitle: "Rendez-le viral, un plat à la fois.",
    viralMenuDesc:
      "Chaque plat devient du contenu partageable. Chaque commande devient une histoire. Vos plats ne satisfont pas seulement la faim - ils créent des conversations et stimulent le marketing organique.",
    shareableContent: "Contenu partageable",
    socialSharingBuiltIn: "Partage social intégré",
    viralPotentialDesign: "Design à potentiel viral",
    socialMenuFeatures: "Fonctionnalités du Menu Social",
    everythingYouNeedTitle: "Tout ce dont vous avez besoin pour des repas viraux",
    scrollHeartOrder: "Faites Défiler. Cœur. Commandez.",
    scrollHeartOrderDesc:
      "Pas de PDFs, pas de temps de chargement. Juste une découverte visuelle instantanée de nourriture qui ressemble aux réseaux sociaux.",
    contentCreator: "Vous Êtes le Créateur de Contenu.",
    contentCreatorDesc:
      "Changez votre feed en secondes. Zéro impression. Créez du contenu culinaire digne de devenir viral qui se vend tout seul.",
    builtToGoViral: "Conçu Pour Devenir Viral.",
    builtToGoViralDesc:
      "Chaque plat est prêt pour Instagram. Transformez chaque repas en contenu généré par les utilisateurs qui se promeut tout seul.",
    trustedWorldwideTitle: "Approuvé Mondialement",
    trustedWorldwideSubtitle:
      "Rejoignez des milliers de restaurants et des millions de convives qui ont déjà transformé leur expérience culinaire.",
    restaurantsTrustUs: "Restaurants Nous Font Confiance",
    happyDinersMonthly: "Convives Heureux Mensuellement",
    countriesWorldwide: "Pays Mondialement",
    systemUptime: "Temps de Fonctionnement du Système",
    testimonialQuote:
      "Morcel a complètement transformé notre expérience client. Les gens savent immédiatement ce qu'ils veulent, nous aidant à vendre plus et à faire tourner les tables plus rapidement.",
    testimonialName: "Maria Santos",
    testimonialTitle: "Gestionnaire, Restaurant Bella Vista",
    pricingTitle: "Tarifs Simples et Transparents",
    pricingSubtitle: "Tout ce dont vous avez besoin pour transformer l'expérience du menu de votre restaurant",
    launchPrice: "Prix de Lancement",
    perMonth: "par mois",
    unlimitedMenus: "Menus illimités",
    swipeableTemplates: "3 modèles glissables style réseaux sociaux",
    photoTagsDescriptions: "Photos, tags et descriptions",
    multiLanguageSupport: "Support multilingue",
    mobileFirstNoApp: "Mobile d'abord, aucune app nécessaire",
    instantQRGeneration: "Génération instantanée de codes QR",
    noSetupFees: "Pas de frais de configuration • Annulez à tout moment",
    finalCtaTitle: "Il est temps de rendre votre menu viral",
    finalCtaSubtitle:
      "Arrêtez de montrer des menus ennuyeux. Commencez à créer du contenu culinaire que les clients ne peuvent pas arrêter de partager.",
    freeSetupOnboarding: "Configuration et intégration gratuites",
    noSetupFeesHidden: "Pas de frais de configuration ou de coûts cachés",
    footerDescription: "Transformer les expériences de restaurant grâce à des menus style réseaux sociaux.",
    product: "Produit",
    features: "Fonctionnalités",
    resources: "Ressources",
    allRightsReserved: "© 2024 Morcel. Tous droits réservés.",
    privacy: "Confidentialité",
    terms: "Conditions",
    cookies: "Cookies",
  },
  ar: {
    home: "الرئيسية",
    howItWorks: "كيف يعمل",
    pricing: "الأسعار",
    contact: "اتصل بنا",
    signIn: "تسجيل الدخول",
    signUp: "إنشاء حساب",
    heroTitle: "حول قائمة طعامك إلى",
    heroTitleHighlight: "خلاصة وسائل التواصل الاجتماعي",
    heroSubtitle:
      "لماذا تعرض ملفات PDF مملة عندما يريد العملاء تصفحاً بأسلوب إنستغرام وطلبات سهلة، محتوى بلا جهد يحفز الطلبات؟",
    buildYourMenu: "ابني قائمتك",
    seeLiveMenu: "شاهد القائمة المباشرة",
    seeLiveDemo: "شاهد العرض التوضيحي المباشر",
    qrMenusTitle: "قوائم QR، معاد اختراعها",
    qrMenusSubtitle:
      "يحول مورسيل قوائم QR القديمة إلى تجارب تفاعلية ومحمولة سيحبها ضيوفك. لا ملفات PDF. لا قرص للتكبير. فقط قوائم قابلة للتمرير والمسح بأسلوب وسائل التواصل الاجتماعي، مع 3 قوالب أنيقة ودعم متعدد اللغات.",
    mobileFirst: "الهاتف المحمول أولاً",
    mobileFirstDesc: "مصمم للهواتف، وليس ملفات PDF للسطح المكتبي",
    templates: "3 قوالب",
    templatesDesc: "اختر من بين التصاميم الأنيقة والقابلة للتخصيص",
    multiLanguage: "متعدد اللغات",
    multiLanguageDesc: "قدم الخدمة للضيوف بلغتهم المفضلة",
    howMorcelWorksTitle: "كيف يعمل مورسيل",
    howMorcelWorksSubtitle: "ثلاث خطوات بسيطة لثورة تجربة تناول الطعام الخاصة بك",
    createAccount: "أنشئ حسابك",
    createAccountDesc: "قم بإعداد ملف تعريف مطعمك وابدأ مع منصة الدفع السلسة لدينا",
    addMenu: "أضف قائمتك",
    addMenuDesc: "ارفع عناصر قائمتك مع الأسعار لإنشاء تجربة طعام رقمية كاملة",
    shareMenu: "شارك قائمتك",
    shareMenuDesc: "أنشئ رموز QR لطاولاتك واسمح للعملاء بالوصول إلى قائمتك فوراً",
    socialFeedTitle: "حول قائمة طعامك إلى خلاصة وسائل التواصل الاجتماعي",
    socialFeedSubtitle:
      "لماذا تعرض ملفات PDF مملة عندما يمكنك إنشاء تجارب طعام تستحق إنستغرام؟ حول كل طبق إلى محتوى جذاب.",
    visualDiscoveryTitle: "اكتشاف الطعام البصري",
    visualDiscoverySubtitle: "تصفح مثل إنستغرام، اطلب مثل السحر",
    visualDiscoveryDesc:
      "حول قائمتك التقليدية إلى خلاصة بصرية مذهلة. يتصفح العملاء صور طعام جميلة، تماماً مثل منصة التواصل الاجتماعي المفضلة لديهم.",
    instagramLayout: "تخطيط بأسلوب إنستغرام",
    highQualityPhotos: "صور طعام عالية الجودة",
    instantVisualAppeal: "جاذبية بصرية فورية",
    viralMenuTitle: "تجربة قائمة فيروسية",
    viralMenuSubtitle: "اجعلها فيروسية، طبق واحد في كل مرة.",
    viralMenuDesc:
      "كل طبق يصبح محتوى قابل للمشاركة. كل طلب يصبح قصة. أطباقك لا تشبع الجوع فقط - تخلق محادثات وتحفز التسويق العضوي.",
    shareableContent: "محتوى قابل للمشاركة",
    socialSharingBuiltIn: "مشاركة اجتماعية مدمجة",
    viralPotentialDesign: "تصميم بإمكانية فيروسية",
    socialMenuFeatures: "ميزات القائمة الاجتماعية",
    everythingYouNeedTitle: "كل ما تحتاجه لتناول طعام فيروسي",
    scrollHeartOrder: "مرر. قلب. اطلب.",
    scrollHeartOrderDesc: "لا ملفات PDF، لا أوقات تحميل. فقط اكتشاف طعام بصري فوري يشعر مثل وسائل التواصل الاجتماعي.",
    contentCreator: "أنت منشئ المحتوى.",
    contentCreatorDesc: "غير خلاصتك في ثوانٍ. صفر طباعة. أنشئ محتوى طعام يستحق أن يصبح فيروسياً ويبيع نفسه.",
    builtToGoViral: "مبني ليصبح فيروسياً.",
    builtToGoViralDesc: "كل طبق جاهز لإنستغرام. حول كل وجبة إلى محتوى ينشئه المستخدمون ويسوق نفسه.",
    trustedWorldwideTitle: "موثوق به عالمياً",
    trustedWorldwideSubtitle:
      "انضم إلى آلاف المطاعم وملايين رواد المطاعم الذين حولوا بالفعل تجربة تناول الطعام الخاصة بهم.",
    restaurantsTrustUs: "مطاعم تثق بنا",
    happyDinersMonthly: "رواد مطاعم سعداء شهرياً",
    countriesWorldwide: "دول عالمياً",
    systemUptime: "وقت تشغيل النظام",
    testimonialQuote:
      "لقد حول مورسيل تجربة عملائنا بالكامل. الناس يعرفون فوراً ما يريدون مما يساعدنا على البيع أكثر وتدوير الطاولات بشكل أسرع.",
    testimonialName: "ماريا سانتوس",
    testimonialTitle: "مديرة، مطعم بيلا فيستا",
    pricingTitle: "أسعار بسيطة وشفافة",
    pricingSubtitle: "كل ما تحتاجه لتحويل تجربة قائمة مطعمك",
    launchPrice: "سعر الإطلاق",
    perMonth: "في الشهر",
    unlimitedMenus: "قوائم غير محدودة",
    swipeableTemplates: "3 قوالب قابلة للتمرير بأسلوب اجتماعي",
    photoTagsDescriptions: "صور وعلامات ووصف",
    multiLanguageSupport: "دعم متعدد اللغات",
    mobileFirstNoApp: "الهاتف المحمول أولاً، لا حاجة لتطبيق",
    instantQRGeneration: "إنشاء رمز QR فوري",
    noSetupFees: "لا رسوم إعداد • إلغاء في أي وقت",
    finalCtaTitle: "حان الوقت لجعل قائمتك فيروسية",
    finalCtaSubtitle: "توقف عن عرض قوائم مملة. ابدأ في إنشاء محتوى طعام لا يستطيع العملاء التوقف عن مشاركته.",
    freeSetupOnboarding: "إعداد وتأهيل مجاني",
    noSetupFeesHidden: "لا رسوم إعداد أو تكاليف مخفية",
    footerDescription: "تحويل تجارب المطاعم من خلال قوائم بأسلوب وسائل التواصل الاجتماعي.",
    product: "المنتج",
    features: "الميزات",
    resources: "الموارد",
    allRightsReserved: "© 2024 مورسيل. جميع الحقوق محفوظة.",
    privacy: "الخصوصية",
    terms: "الشروط",
    cookies: "ملفات تعريف الارتباط",
  },
  pt: {
    home: "Início",
    howItWorks: "Como Funciona",
    pricing: "Preços",
    contact: "Contato",
    signIn: "Entrar",
    signUp: "Cadastrar",
    heroTitle: "Transforme Seu Cardápio Em Um",
    heroTitleHighlight: "Feed de Redes Sociais",
    heroSubtitle:
      "Por que mostrar PDFs chatos quando os clientes querem navegação estilo Instagram e pedidos fáceis, conteúdo sem esforço que impulsiona vendas?",
    buildYourMenu: "Construa seu cardápio",
    seeLiveMenu: "Ver Cardápio ao Vivo",
    seeLiveDemo: "Ver Demo ao Vivo",
    qrMenusTitle: "Cardápios QR, Reinventados",
    qrMenusSubtitle:
      "O Morcel transforma cardápios QR obsoletos em experiências interativas e móveis que seus convidados vão adorar. Sem PDFs. Sem beliscar para ampliar. Apenas cardápios deslizáveis e escaneáveis estilo redes sociais, com 3 modelos elegantes e suporte multilíngue.",
    mobileFirst: "Mobile Primeiro",
    mobileFirstDesc: "Projetado para telefones, não PDFs de desktop",
    templates: "3 Modelos",
    templatesDesc: "Escolha entre designs elegantes e personalizáveis",
    multiLanguage: "Multi-Idioma",
    multiLanguageDesc: "Sirva convidados em seu idioma preferido",
    howMorcelWorksTitle: "Como o Morcel Funciona",
    howMorcelWorksSubtitle: "Três passos simples para revolucionar sua experiência gastronômica",
    createAccount: "Crie Sua Conta",
    createAccountDesc: "Configure o perfil do seu restaurante e comece com nossa plataforma de pagamentos perfeita",
    addMenu: "Adicione Seu Cardápio",
    addMenuDesc:
      "Carregue os itens do seu cardápio com preços para criar uma experiência gastronômica digital completa",
    shareMenu: "Compartilhe Seu Cardápio",
    shareMenuDesc: "Gere códigos QR para suas mesas e permita que os clientes acessem seu cardápio instantaneamente",
    socialFeedTitle: "Transforme Seu Cardápio Em Um Feed de Redes Sociais",
    socialFeedSubtitle:
      "Por que mostrar PDFs chatos quando você pode criar experiências gastronômicas dignas do Instagram? Transforme cada prato em conteúdo envolvente.",
    visualDiscoveryTitle: "Descoberta Visual de Comida",
    visualDiscoverySubtitle: "Navegue como Instagram, peça como mágica",
    visualDiscoveryDesc:
      "Transforme seu cardápio tradicional em um feed visual impressionante. Os clientes rolam por belas fotos de comida, como sua plataforma social favorita.",
    instagramLayout: "Layout estilo Instagram",
    highQualityPhotos: "Fotos de comida de alta qualidade",
    instantVisualAppeal: "Apelo visual instantâneo",
    viralMenuTitle: "Experiência de Cardápio Viral",
    viralMenuSubtitle: "Deixe viralizar, um prato de cada vez.",
    viralMenuDesc:
      "Cada prato se torna conteúdo compartilhável. Cada pedido se torna uma história. Seus pratos não apenas satisfazem a fome - criam conversas e impulsionam marketing orgânico.",
    shareableContent: "Conteúdo compartilhável",
    socialSharingBuiltIn: "Compartilhamento social integrado",
    viralPotentialDesign: "Design com potencial viral",
    socialMenuFeatures: "Recursos do Cardápio Social",
    everythingYouNeedTitle: "Tudo que você precisa para jantar viral",
    scrollHeartOrder: "Role. Coração. Peça.",
    scrollHeartOrderDesc:
      "Sem PDFs, sem tempos de carregamento. Apenas descoberta visual instantânea de comida que parece redes sociais.",
    contentCreator: "Você é o Criador de Conteúdo.",
    contentCreatorDesc:
      "Mude seu feed em segundos. Zero impressão. Crie conteúdo gastronômico digno de viralizar que se vende sozinho.",
    builtToGoViral: "Construído Para Viralizar.",
    builtToGoViralDesc:
      "Cada prato está pronto para o Instagram. Transforme cada refeição em conteúdo gerado pelo usuário que se promove sozinho.",
    trustedWorldwideTitle: "Confiado Mundialmente",
    trustedWorldwideSubtitle:
      "Junte-se a milhares de restaurantes e milhões de comensais que já transformaram sua experiência gastronômica.",
    restaurantsTrustUs: "Restaurantes Confiam em Nós",
    happyDinersMonthly: "Comensais Felizes Mensalmente",
    countriesWorldwide: "Países Mundialmente",
    systemUptime: "Tempo de Atividade do Sistema",
    testimonialQuote:
      "O Morcel transformou completamente nossa experiência do cliente. As pessoas sabem imediatamente o que querem, nos ajudando a vender mais e girar mesas mais rapidamente.",
    testimonialName: "Maria Santos",
    testimonialTitle: "Gerente, Restaurante Bella Vista",
    pricingTitle: "Preços Simples e Transparentes",
    pricingSubtitle: "Tudo que você precisa para transformar a experiência do cardápio do seu restaurante",
    launchPrice: "Preço de Lançamento",
    perMonth: "por mês",
    unlimitedMenus: "Cardápios ilimitados",
    swipeableTemplates: "3 modelos deslizáveis estilo redes sociais",
    photoTagsDescriptions: "Fotos, tags e descrições",
    multiLanguageSupport: "Suporte multilíngue",
    mobileFirstNoApp: "Mobile primeiro, sem app necessário",
    instantQRGeneration: "Geração instantânea de código QR",
    noSetupFees: "Sem taxas de configuração • Cancele a qualquer momento",
    finalCtaTitle: "Hora de fazer seu cardápio viralizar",
    finalCtaSubtitle:
      "Pare de mostrar cardápios chatos. Comece a criar conteúdo gastronômico que os clientes não conseguem parar de compartilhar.",
    freeSetupOnboarding: "Configuração e integração gratuitas",
    noSetupFeesHidden: "Sem taxas de configuração ou custos ocultos",
    footerDescription: "Transformando experiências de restaurantes através de cardápios estilo redes sociais.",
    product: "Produto",
    features: "Recursos",
    resources: "Recursos",
    allRightsReserved: "© 2024 Morcel. Todos os direitos reservados.",
    privacy: "Privacidade",
    terms: "Termos",
    cookies: "Cookies",
  },
  de: {
    home: "Startseite",
    howItWorks: "Wie es Funktioniert",
    pricing: "Preise",
    contact: "Kontakt",
    signIn: "Anmelden",
    signUp: "Registrieren",
    heroTitle: "Verwandeln Sie Ihre Speisekarte In Einen",
    heroTitleHighlight: "Social Media Feed",
    heroSubtitle:
      "Warum langweilige PDFs zeigen, wenn Kunden Instagram-ähnliches Browsen und einfache Bestellungen wollen, müheloser Inhalt, der Bestellungen antreibt?",
    buildYourMenu: "Erstellen Sie Ihr Menü",
    seeLiveMenu: "Live-Menü Ansehen",
    seeLiveDemo: "Live-Demo Ansehen",
    qrMenusTitle: "QR-Menüs, Neu Erfunden",
    qrMenusSubtitle:
      "Morcel verwandelt veraltete QR-Code-Menüs in interaktive, mobile-first Erlebnisse, die Ihre Gäste lieben werden. Keine PDFs. Kein Kneifen zum Zoomen. Nur wischbare, scannbare Social-Media-Style-Menüs mit 3 stilvollen Vorlagen und mehrsprachiger Unterstützung.",
    mobileFirst: "Mobile Zuerst",
    mobileFirstDesc: "Für Telefone entwickelt, nicht für Desktop-PDFs",
    templates: "3 Vorlagen",
    templatesDesc: "Wählen Sie aus stilvollen, anpassbaren Designs",
    multiLanguage: "Mehrsprachig",
    multiLanguageDesc: "Bedienen Sie Gäste in ihrer bevorzugten Sprache",
    howMorcelWorksTitle: "Wie Morcel Funktioniert",
    howMorcelWorksSubtitle: "Drei einfache Schritte, um Ihr Gastronomie-Erlebnis zu revolutionieren",
    createAccount: "Erstellen Sie Ihr Konto",
    createAccountDesc: "Richten Sie Ihr Restaurant-Profil ein und starten Sie mit unserer nahtlosen Zahlungsplattform",
    addMenu: "Fügen Sie Ihr Menü Hinzu",
    addMenuDesc:
      "Laden Sie Ihre Menüpunkte mit Preisen hoch, um ein vollständiges digitales Gastronomie-Erlebnis zu schaffen",
    shareMenu: "Teilen Sie Ihr Menü",
    shareMenuDesc:
      "Generieren Sie QR-Codes für Ihre Tische und ermöglichen Sie Kunden den sofortigen Zugriff auf Ihr Menü",
    socialFeedTitle: "Verwandeln Sie Ihre Speisekarte In Einen Social Media Feed",
    socialFeedSubtitle:
      "Warum langweilige PDFs zeigen, wenn Sie Instagram-würdige Gastronomie-Erlebnisse schaffen können? Verwandeln Sie jedes Gericht in ansprechenden Inhalt.",
    visualDiscoveryTitle: "Visuelle Lebensmittel-Entdeckung",
    visualDiscoverySubtitle: "Browsen wie Instagram, bestellen wie Magie",
    visualDiscoveryDesc:
      "Verwandeln Sie Ihr traditionelles Menü in einen atemberaubenden visuellen Feed. Kunden scrollen durch schöne Essensfotos, genau wie ihre liebste Social-Media-Plattform.",
    instagramLayout: "Instagram-ähnliches Layout",
    highQualityPhotos: "Hochwertige Essensfotos",
    instantVisualAppeal: "Sofortige visuelle Anziehungskraft",
    viralMenuTitle: "Virales Menü-Erlebnis",
    viralMenuSubtitle: "Lassen Sie es viral gehen, ein Gericht nach dem anderen.",
    viralMenuDesc:
      "Jedes Gericht wird zu teilbarem Inhalt. Jede Bestellung wird zu einer Geschichte. Ihre Gerichte stillen nicht nur den Hunger - sie schaffen Gespräche und treiben organisches Marketing an.",
    shareableContent: "Teilbarer Inhalt",
    socialSharingBuiltIn: "Social Sharing eingebaut",
    viralPotentialDesign: "Design mit viralem Potenzial",
    socialMenuFeatures: "Social Menu Funktionen",
    everythingYouNeedTitle: "Alles was Sie für virales Essen brauchen",
    scrollHeartOrder: "Scrollen. Herz. Bestellen.",
    scrollHeartOrderDesc:
      "Keine PDFs, keine Ladezeiten. Nur sofortige visuelle Lebensmittel-Entdeckung, die sich wie Social Media anfühlt.",
    contentCreator: "Sie Sind der Content Creator.",
    contentCreatorDesc:
      "Ändern Sie Ihren Feed in Sekunden. Null Druck. Erstellen Sie viral-würdigen Gastronomie-Inhalt, der sich selbst verkauft.",
    builtToGoViral: "Gebaut Um Viral Zu Werden.",
    builtToGoViralDesc:
      "Jedes Gericht ist Instagram-bereit. Verwandeln Sie jede Mahlzeit in nutzergenerierte Inhalte, die sich selbst vermarkten.",
    trustedWorldwideTitle: "Weltweit Vertraut",
    trustedWorldwideSubtitle:
      "Schließen Sie sich Tausenden von Restaurants und Millionen von Gästen an, die bereits ihr Gastronomie-Erlebnis transformiert haben.",
    restaurantsTrustUs: "Restaurants Vertrauen Uns",
    happyDinersMonthly: "Glückliche Gäste Monatlich",
    countriesWorldwide: "Länder Weltweit",
    systemUptime: "System-Betriebszeit",
    testimonialQuote:
      "Morcel hat unser Kundenerlebnis komplett transformiert. Die Leute wissen sofort, was sie wollen, was uns hilft, mehr zu verkaufen und Tische schneller zu drehen.",
    testimonialName: "Maria Santos",
    testimonialTitle: "Managerin, Restaurant Bella Vista",
    pricingTitle: "Einfache, Transparente Preise",
    pricingSubtitle: "Alles was Sie brauchen, um das Menü-Erlebnis Ihres Restaurants zu transformieren",
    launchPrice: "Launch-Preis",
    perMonth: "pro Monat",
    unlimitedMenus: "Unbegrenzte Menüs",
    swipeableTemplates: "3 wischbare Social-Media-Style-Vorlagen",
    photoTagsDescriptions: "Fotos, Tags und Beschreibungen",
    multiLanguageSupport: "Mehrsprachige Unterstützung",
    mobileFirstNoApp: "Mobile-first, keine App erforderlich",
    instantQRGeneration: "Sofortige QR-Code-Generierung",
    noSetupFees: "Keine Einrichtungsgebühren • Jederzeit kündbar",
    finalCtaTitle: "Zeit, Ihr Menü viral zu machen",
    finalCtaSubtitle:
      "Hören Sie auf, langweilige Menüs zu zeigen. Beginnen Sie mit der Erstellung von Gastronomie-Inhalten, die Kunden nicht aufhören können zu teilen.",
    freeSetupOnboarding: "Kostenlose Einrichtung und Onboarding",
    noSetupFeesHidden: "Keine Einrichtungsgebühren oder versteckte Kosten",
    footerDescription: "Restaurant-Erlebnisse durch Social-Media-Style-Menüs transformieren.",
    product: "Produkt",
    features: "Funktionen",
    resources: "Ressourcen",
    allRightsReserved: "© 2024 Morcel. Alle Rechte vorbehalten.",
    privacy: "Datenschutz",
    terms: "Bedingungen",
    cookies: "Cookies",
  },
}

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
]

export default function MorcelLanding() {
  const [currentLanguage, setCurrentLanguage] = useState("en")
  const t = translations[currentLanguage as keyof typeof translations]

  return (
    <div className="min-h-screen bg-white" dir={currentLanguage === "ar" ? "rtl" : "ltr"}>
      {/* Header */}
      <header className="border-b border-gray-100 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/images/morcel-logo.svg" alt="Morcel" width={120} height={40} className="h-8 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className={`${chivo.className} text-gray-600 hover:text-gray-900`}>
              {t.home}
            </Link>
            <Link href="#" className={`${chivo.className} text-gray-600 hover:text-gray-900`}>
              {t.howItWorks}
            </Link>
            <Link href="#pricing" className={`${chivo.className} text-gray-600 hover:text-gray-900`}>
              {t.pricing}
            </Link>
            <Link href="#" className={`${chivo.className} text-gray-600 hover:text-gray-900`}>
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
                    onClick={() => setCurrentLanguage(language.code)}
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
                {t.signUp}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className={`${delaGothicOne.className} text-4xl md:text-6xl text-gray-900 mb-6`}>
            {t.heroTitle} <span className="text-purple-600">{t.heroTitleHighlight}</span>
          </h1>
          <p className={`${chivo.className} text-xl text-gray-600 mb-8 max-w-2xl mx-auto`}>{t.heroSubtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
                  <Link href="https://dev.morcel.ai/menu/49/instagram" className={`${chivo.className} cursor-pointer`}>
                    Instagram
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="https://dev.morcel.ai/menu/49/tiktok" className={`${chivo.className} cursor-pointer`}>
                    TikTok
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="https://dev.morcel.ai/menu/49/tinder" className={`${chivo.className} cursor-pointer`}>
                    Tinder
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </section>

      {/* QR Menus, Reinvented */}
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

      {/* How Morcel Works */}
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

      {/* Turn Your Menu Into a Social Media Feed */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className={`${delaGothicOne.className} text-3xl md:text-4xl text-gray-900 mb-4`}>{t.socialFeedTitle}</h2>
          <p className={`${chivo.className} text-xl text-gray-600 max-w-3xl mx-auto`}>{t.socialFeedSubtitle}</p>
        </div>

        {/* Visual Food Discovery */}
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
              alt="Mobile food app interface showing Instagram-style food discovery with Classic Bakery featuring Almond Croissant"
              width={400}
              height={600}
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Viral Menu Experience */}
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
              alt="Coffee menu app showing cappuccino with heart latte art and social sharing features"
              width={300}
              height={600}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Everything you need for viral dining */}
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

      {/* Trusted Worldwide */}
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

          {/* Testimonial */}
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

      {/* Pricing Section */}
      <section id="pricing" className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${delaGothicOne.className} text-3xl md:text-4xl text-gray-900 mb-4`}>{t.pricingTitle}</h2>
          <p className={`${chivo.className} text-xl text-gray-600 mb-12`}>{t.pricingSubtitle}</p>

          <Card className="max-w-md mx-auto bg-white border-2 border-purple-200 shadow-lg">
            <div className="p-8 text-center">
              <div className={`${chivo.className} text-lg font-semibold text-purple-600 mb-3`}>
                Start with a 7 day free trial!
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

              <Link href="https://morcel.ai">
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

      {/* Final CTA */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${delaGothicOne.className} text-3xl md:text-4xl text-gray-900 mb-4`}>{t.finalCtaTitle}</h2>
          <p className={`${chivo.className} text-xl text-gray-600 mb-8`}>{t.finalCtaSubtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="https://morcel.ai">
              <Button
                className={`${chivo.className} bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg`}
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
                  {t.seeLiveDemo}
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="https://dev.morcel.ai/menu/49/instagram" className={`${chivo.className} cursor-pointer`}>
                    Instagram
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="https://dev.morcel.ai/menu/49/tiktok" className={`${chivo.className} cursor-pointer`}>
                    TikTok
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="https://dev.morcel.ai/menu/49/tinder" className={`${chivo.className} cursor-pointer`}>
                    Tinder
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-600">
            <div className={`${chivo.className} flex items-center`}>
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              {t.freeSetupOnboarding}
            </div>

            <div className={`${chivo.className} flex items-center`}>
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              {t.noSetupFeesHidden}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Image src="/images/morcel-logo.svg" alt="Morcel" width={120} height={40} className="h-8 w-auto" />
              </div>
              <p className={`${chivo.className} text-gray-400 text-sm`}>{t.footerDescription}</p>
            </div>

            <div>
              <h4 className={`${delaGothicOne.className} mb-4`}>{t.product}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#qr-menus" className={`${chivo.className} hover:text-white`}>
                    {t.features}
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className={`${chivo.className} hover:text-white`}>
                    {t.pricing}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className={`${delaGothicOne.className} mb-4`}>{t.resources}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="mailto:admin@commissary.app" className={`${chivo.className} hover:text-white`}>
                    {t.contact}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className={`${chivo.className} text-sm text-gray-400`}>{t.allRightsReserved}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className={`${chivo.className} text-gray-400 hover:text-white`}>
                {t.privacy}
              </Link>
              <Link href="#" className={`${chivo.className} text-gray-400 hover:text-white`}>
                {t.terms}
              </Link>
              <Link href="#" className={`${chivo.className} text-gray-400 hover:text-white`}>
                {t.cookies}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
