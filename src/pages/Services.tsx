"use client"

import React, { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useNavigate } from "react-router-dom"
import {
  TreePine,
  Hammer,
  Calendar,
  ChevronDown,
  Leaf,
  Wrench,
  Star,
  CheckCircle,
  Clock,
  Play,
  Pause,
  TrendingUp,
  ArrowRight,
} from "lucide-react"
import { Link } from "react-router-dom"

const Services: React.FC = () => {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState<number>(0)
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set())
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [isPlaying, setIsPlaying] = useState(true)

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const headerScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1])

  const serviceCategories = [
    {
      icon: Leaf,
      title: "Landscaping & Yard Care",
      description: "Nuestros servicios de paisajismo y cuidado del césped incluyen todo lo necesario para mantener su propiedad en perfectas condiciones. Desde el corte profesional del césped hasta el diseño de jardines personalizados, nos encargamos de cada detalle. Realizamos poda de arbustos, instalación de césped nuevo, creación de canteros de flores, y mantenimiento estacional. Nuestro equipo utiliza técnicas eco-amigables y equipos de última generación para garantizar resultados excepcionales que realcen la belleza natural de su espacio exterior.",
      color: "from-lime-400 to-green-500",
      bgColor: "bg-gradient-to-br from-lime-400/20 to-green-500/20",
      borderColor: "border-lime-400/30",
      image:
        "https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      services: [
        {
          name: "Professional Lawn Mowing",
          description: "Precision cutting with commercial-grade equipment for perfect results",
          features: [
            "Weekly/Bi-weekly scheduling",
            "Pattern variation",
            "Grass height optimization",
            "Cleanup included",
          ],
          price: "Starting at $45",
          duration: "30-60 min",
          popularity: 95,
        },
        {
          name: "Hedge & Bush Trimming",
          description: "Expert shaping and maintenance of all shrubs and hedges",
          features: ["Artistic shaping", "Health assessment", "Seasonal timing", "Debris removal"],
          price: "Starting at $75",
          duration: "1-2 hours",
          popularity: 88,
        },
        {
          name: "Precision Edging & Trimming",
          description: "Clean, defined borders for a polished landscape appearance",
          features: ["Sidewalk edging", "Driveway borders", "Fence line trimming", "Garden bed definition"],
          price: "Starting at $35",
          duration: "20-45 min",
          popularity: 92,
        },
        {
          name: "Leaf Removal & Cleanup",
          description: "Complete seasonal cleanup with professional equipment",
          features: ["Thorough raking", "Blower service", "Bagging & hauling", "Gutter cleaning"],
          price: "Starting at $85",
          duration: "1-3 hours",
          popularity: 85,
        },
        {
          name: "Premium Sod Installation",
          description: "Transform your yard instantly with professional sod laying",
          features: ["Soil preparation", "Premium sod selection", "Expert installation", "Watering guidance"],
          price: "Quote required",
          duration: "4-8 hours",
          popularity: 78,
        },
        {
          name: "Garden Design & Planting",
          description: "Custom garden beds with beautiful plant arrangements",
          features: ["Design consultation", "Plant selection", "Soil amendment", "Mulch installation"],
          price: "Starting at $150",
          duration: "2-4 hours",
          popularity: 82,
        },
      ],
    },
    {
      icon: TreePine,
      title: "Tree & Plant Services",
      description: "Ofrecemos servicios especializados en el cuidado de árboles y plantas para mantener la salud y belleza de su paisaje. Nuestros arboristas certificados realizan podas estratégicas, remoción segura de árboles peligrosos, y tratamiento de enfermedades. También nos especializamos en la plantación de nuevos árboles, cuidado de arbustos, y manejo integral de la salud vegetal. Utilizamos técnicas profesionales que promueven el crecimiento saludable mientras mantenemos la seguridad de su propiedad y familia.",
      color: "from-emerald-400 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-400/20 to-teal-500/20",
      borderColor: "border-emerald-400/30",
      image:
        "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      services: [
        {
          name: "Professional Tree Trimming",
          description: "Safe and precise pruning to promote healthy tree growth",
          features: ["Health assessment", "Strategic pruning", "Safety protocols", "Debris cleanup"],
          price: "Starting at $125",
          duration: "2-4 hours",
          popularity: 90,
        },
        {
          name: "Tree Removal Service",
          description: "Safe removal of unwanted or dangerous trees",
          features: ["Risk assessment", "Controlled removal", "Complete cleanup", "Stump grinding option"],
          price: "Quote required",
          duration: "4-8 hours",
          popularity: 75,
        },
        {
          name: "Stump Grinding & Removal",
          description: "Complete stump elimination for a clean landscape",
          features: ["Below-ground grinding", "Root removal", "Site restoration", "Soil replacement"],
          price: "Starting at $95",
          duration: "1-2 hours",
          popularity: 80,
        },
        {
          name: "Plant Health Care",
          description: "Comprehensive plant care and disease management",
          features: ["Disease diagnosis", "Treatment plans", "Fertilization", "Pest control"],
          price: "Starting at $65",
          duration: "1-2 hours",
          popularity: 85,
        },
      ],
    },
    {
      icon: Hammer,
      title: "Construction & Hardscaping",
      description: "Transformamos espacios exteriores con proyectos de construcción y paisajismo duro de alta calidad. Construimos terrazas personalizadas, instalamos patios de piedra y ladrillo, creamos senderos elegantes, y desarrollamos sistemas de riego eficientes. También ofrecemos servicios de lavado a presión para mantener todas las superficies exteriores como nuevas. Nuestro equipo combina funcionalidad y estética para crear espacios exteriores duraderos que aumenten el valor de su propiedad.",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-400/20 to-cyan-500/20",
      borderColor: "border-blue-400/30",
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      services: [
        {
          name: "Custom Deck Building",
          description: "Beautiful, durable decks designed for your lifestyle",
          features: ["Custom design", "Premium materials", "Professional installation", "Weather protection"],
          price: "Quote required",
          duration: "3-7 days",
          popularity: 88,
        },
        {
          name: "Patio & Walkway Installation",
          description: "Elegant stone and brick pathways and patios",
          features: ["Design planning", "Material selection", "Proper drainage", "Long-term durability"],
          price: "Quote required",
          duration: "2-5 days",
          popularity: 85,
        },
        {
          name: "Professional Power Washing",
          description: "Deep cleaning for all exterior surfaces",
          features: [
            "High-pressure cleaning",
            "Surface-specific techniques",
            "Eco-friendly solutions",
            "Stain removal",
          ],
          price: "Starting at $95",
          duration: "2-4 hours",
          popularity: 92,
        },
        {
          name: "Irrigation System Installation",
          description: "Efficient watering systems for optimal plant health",
          features: ["Zone planning", "Smart controllers", "Water efficiency", "Maintenance support"],
          price: "Quote required",
          duration: "1-3 days",
          popularity: 78,
        },
      ],
    },
    {
      icon: Calendar,
      title: "Seasonal & Specialty Services",
      description: "Proveemos servicios estacionales y especializados para mantener su propiedad hermosa durante todo el año. En otoño realizamos limpieza completa de hojas y preparación para el invierno. En primavera preparamos su jardín para la temporada de crecimiento con fertilización y aireación. También ofrecemos instalación profesional de luces navideñas, limpieza después de tormentas, y servicios de emergencia. Nuestro enfoque integral asegura que su propiedad se vea espectacular en cada estación.",
      color: "from-orange-400 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-400/20 to-red-500/20",
      borderColor: "border-orange-400/30",
      image:
        "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      services: [
        {
          name: "Fall Cleanup Service",
          description: "Complete autumn preparation and debris removal",
          features: ["Leaf removal", "Branch cleanup", "Gutter cleaning", "Winter prep"],
          price: "Starting at $125",
          duration: "2-4 hours",
          popularity: 90,
        },
        {
          name: "Spring Yard Preparation",
          description: "Get your yard ready for the growing season",
          features: ["Soil testing", "Fertilization", "Aeration", "Overseeding"],
          price: "Starting at $150",
          duration: "3-5 hours",
          popularity: 88,
        },
        {
          name: "Holiday Light Installation",
          description: "Professional outdoor lighting for the holiday season",
          features: ["Custom design", "Safe installation", "Quality lights", "Removal service"],
          price: "Starting at $200",
          duration: "2-4 hours",
          popularity: 75,
        },
        {
          name: "Storm Damage Cleanup",
          description: "Emergency cleanup after severe weather events",
          features: ["24/7 availability", "Safety assessment", "Debris removal", "Property restoration"],
          price: "Quote required",
          duration: "Variable",
          popularity: 70,
        },
      ],
    },
  ]

  // Auto-rotate categories
  React.useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % serviceCategories.length)
      setSelectedServices(new Set())
    }, 8000)

    return () => clearInterval(interval)
  }, [isPlaying, serviceCategories.length])

  const handleCardClick = (index: number) => {
    setActiveCategory(index)
    setSelectedServices(new Set())
  }

  const toggleServiceSelection = (serviceId: string) => {
    setSelectedServices(prev => {
      const newSet = new Set(prev)
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId)
      } else {
        newSet.add(serviceId)
      }
      return newSet
    })
  }

  const handleServiceSelection = (serviceName: string, categoryTitle: string) => {
    // Navigate to contact page with service pre-selected
    navigate('/contact', { 
      state: { 
        preSelectedService: `${categoryTitle} - ${serviceName}`,
        fromServices: true
      } 
    })
  }

  const currentCategory = serviceCategories[activeCategory]

  return (
    <div ref={containerRef} className="pt-24 pb-20 relative overflow-hidden">
      {/* Extra spacing for hero content */}
      <div className="pt-24">
        {/* Header Section with Background */}
        <div className="bg-gradient-to-r from-green-200/60 via-emerald-200/50 to-blue-200/40 border-b-4 border-emerald-300/50 shadow-lg mb-16">
          <div className="container mx-auto px-4 py-16">
            {/* Dynamic Header */}
            <motion.div
              className="text-center"
              style={{ scale: headerScale }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-green-800 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-700">
                  Services
                </span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-green-700 max-w-4xl mx-auto leading-relaxed font-organic"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                From precision lawn care to complete landscape transformations, we deliver{" "}
                <span className="text-emerald-600 font-semibold">professional excellence</span> in every project
              </motion.p>

              {/* Interactive Controls */}
              <motion.div
                className="flex items-center justify-center space-x-4 mt-8 relative z-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button
                  onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                  className="flex items-center space-x-2 bg-white hover:bg-green-50 text-green-700 hover:text-emerald-600 px-6 py-3 rounded-full transition-all duration-300 border-2 border-green-300 shadow-lg cursor-pointer hover:scale-105 relative z-50 font-medium"
                  type="button"
                >
                  <Wrench className="w-4 h-4" />
                  <span className="text-sm">{viewMode === "grid" ? "List View" : "Grid View"}</span>
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg cursor-pointer hover:scale-105 relative z-50 font-medium"
                  type="button"
                  aria-label={isPlaying ? "Pause auto-rotation" : "Start auto-rotation"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span className="text-sm">{isPlaying ? "Pause" : "Play"} Auto</span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 via-blue-50/30 to-emerald-50/20 pointer-events-none" />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-lime-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 pointer-events-auto">
          {/* Category Navigation */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12 relative z-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {serviceCategories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => handleCardClick(index)}
                className={`relative flex items-center space-x-3 px-6 py-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-black border-transparent shadow-2xl`
                    : "bg-gray-800 text-gray-300 border-gray-600 hover:border-gray-500 hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className={`w-5 h-5 ${activeCategory === index ? "text-black" : "text-lime-400"}`} />
                <span className="font-semibold text-sm">{category.title}</span>

                {/* Active Indicator */}
                {activeCategory === index && (
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rounded-full"
                    layoutId="activeIndicator"
                    initial={false}
                  />
                )}

                {/* Progress Bar for Auto-rotation */}
                {activeCategory === index && isPlaying && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-black/30 rounded-b-2xl"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                    key={`progress-${index}`}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Main Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 relative z-10"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
            >
              {/* Category Overview */}
              <motion.div
               className="lg:col-span-1 bg-white rounded-3xl border border-green-200 relative overflow-hidden shadow-lg z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Header Image */}
                <div className="h-48 overflow-hidden rounded-t-3xl">
                  <img
                    src={currentCategory.image || "/placeholder.svg"}
                    alt={currentCategory.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${currentCategory.color} rounded-3xl flex items-center justify-center mb-6 shadow-2xl`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <currentCategory.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-nature drop-shadow-sm">
                    {currentCategory.title}
                  </h2>

                  <p className="text-green-700 leading-relaxed text-sm font-organic">
                    {currentCategory.description}
                  </p>
                </div>
              </motion.div>

              {/* Services Grid */}
              <div className="lg:col-span-2 relative z-10">
                <AnimatePresence mode="wait">
                  {viewMode === "grid" ? (
                    <motion.div
                      key="grid"
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      {currentCategory.services.map((service, serviceIndex) => {
                        const serviceId = `category-${activeCategory}-service-${serviceIndex}-${service.name.replace(/\s+/g, '-').toLowerCase()}`
                        const isSelected = selectedServices.has(serviceId)

                        return (
                          <motion.div
                            key={serviceIndex}
                            className={`bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-lime-400/50 transition-all duration-300 cursor-pointer group ${
                              isSelected ? "ring-2 ring-lime-400 border-lime-400" : ""
                            }`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: serviceIndex * 0.1 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            onClick={() => toggleServiceSelection(serviceId)}
                          >
                            {/* Service Header */}
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <h3 className="text-lg font-bold text-white group-hover:text-lime-400 transition-colors mb-2">
                                  {service.name}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                              </div>
                              <motion.div
                                className="ml-4"
                                animate={{ rotate: isSelected ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className="w-5 h-5 text-lime-400" />
                              </motion.div>
                            </div>

                            {/* Service Info */}
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-4 h-4 text-gray-400" />
                                  <span className="text-gray-300 text-xs">{service.duration}</span>
                                </div>
                              </div>
                              <div className="text-lime-400 font-bold text-sm">{service.price}</div>
                            </div>


                             {/* Action Button */}
                             <motion.div
                               className="mt-4 pt-4 border-t border-gray-700"
                               initial={{ opacity: 0, y: 10 }}
                               animate={{ opacity: 1, y: 0 }}
                               transition={{ duration: 0.3, delay: 0.1 }}
                             >
                               <button
                                 onClick={(e) => {
                                   e.stopPropagation()
                                   handleServiceSelection(service.name, currentCategory.title)
                                 }}
                                className="w-full bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-lg font-medium hover:font-semibold transition-all duration-300 border border-emerald-500 hover:border-emerald-400 text-sm"
                               >
                                 <span>I Want This</span>
                               </button>
                             </motion.div>
                          </motion.div>
                        )
                      })}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="list"
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      {currentCategory.services.map((service, serviceIndex) => {
                        const serviceId = `${activeCategory}-${serviceIndex}`

                        return (
                          <motion.div
                            key={serviceIndex}
                            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-lime-400/50 transition-all duration-300"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: serviceIndex * 0.1 }}
                            whileHover={{ x: 10 }}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                                <p className="text-gray-400 mb-4">{service.description}</p>
                                <div className="flex items-center space-x-6">
                                  <div className="flex items-center space-x-2">
                                    <Clock className="w-4 h-4 text-lime-400" />
                                    <span className="text-gray-300 text-sm">{service.duration}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-lime-400 font-bold text-lg mb-2">{service.price}</div>
                                <button
                                  className="bg-gray-700 hover:bg-lime-400 text-gray-300 hover:text-black px-4 py-2 rounded-lg font-medium hover:font-semibold transition-all duration-300 border border-gray-600 hover:border-lime-400"
                                  className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-lg font-medium hover:font-semibold transition-all duration-300 border border-emerald-500 hover:border-emerald-400"
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleServiceSelection(service.name, currentCategory.title)
                                  }}
                                >
                                  <span>I Want This</span>
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quote CTA Card */}
          <motion.div
            className="mt-20 bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl p-12 border-2 border-emerald-200 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 via-transparent to-green-400/30" />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Star className="w-10 h-10 text-white" />
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold text-green-800 mb-6 font-nature"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your <span className="text-emerald-600">Outdoor Space?</span>
              </motion.h2>

              <motion.p
                className="text-xl text-green-700 mb-8 leading-relaxed font-organic max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Get a personalized quote for your landscaping project. Our expert team will assess your needs 
                and provide a detailed estimate with no hidden fees. Professional service guaranteed.
              </motion.p>

              {/* Benefits Grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: CheckCircle, title: "Free Consultation", desc: "No cost, no obligation assessment" },
                  { icon: Clock, title: "24hr Response", desc: "Quick turnaround on all quotes" },
                  { icon: Star, title: "Expert Service", desc: "Licensed & insured professionals" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/50 hover:bg-white/80 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <benefit.icon className="w-8 h-8 text-emerald-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-green-800 mb-2 font-nature">{benefit.title}</h3>
                    <p className="text-green-600 text-sm font-organic">{benefit.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-emerald-400 hover:to-green-500 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-emerald-400/25 flex items-center space-x-2 font-nature"
                >
                  <span>Get Your Free Quote</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a
                  href="tel:555-123-4567"
                  className="group flex items-center space-x-3 text-green-600 hover:text-emerald-600 transition-colors font-organic font-semibold"
                >
                  <div className="w-12 h-12 border-2 border-green-600 group-hover:border-emerald-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span>Or Call (555) 123-4567</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Services