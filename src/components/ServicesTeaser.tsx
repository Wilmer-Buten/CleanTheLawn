import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Scissors, TreePine, Droplets, Hammer, Sparkles, Calendar, ArrowRight } from "lucide-react"

// Import service images
import lawnCareImage from "../assets/images/services/lanscaping.webp"
import treeServicesImage from "../assets/images/services/trees.webp"
import irrigationImage from "../assets/images/services/irrigation.webp"
import hardscapingImage from "../assets/images/services/hardscaping.webp"
import powerWashingImage from "../assets/images/services/power.webp"
import seasonalImage from "../assets/images/services/seasonal.webp"

const ServicesTeaser: React.FC = () => {
  const [flippedCard, setFlippedCard] = React.useState<number | null>(null)

  const services = [
    {
      icon: Scissors,
      title: "Lawn Care & Maintenance",
      description: "Professional mowing, trimming, and edging to keep your lawn pristine.",
      image: lawnCareImage,
      subServices: [
        "Weekly/Bi-weekly mowing",
        "Precision edging & trimming",
        "Weed eating & cleanup",
        "Leaf blowing & removal",
        "Fertilization programs",
        "Aeration & overseeding",
        "Weed control treatment",
        "Pest control services",
        "Soil testing & analysis",
        "Grass type consultation",
        "Seasonal lawn care",
        "Emergency storm cleanup",
      ],
    },
    {
      icon: TreePine,
      title: "Tree & Landscape Services",
      description: "Expert tree trimming, removal, and landscape design solutions.",
      image: treeServicesImage,
      subServices: [
        "Tree trimming & pruning",
        "Tree removal & cutting",
        "Stump grinding & removal",
        "Landscape design & planning",
        "Shrub & bush trimming",
        "Hedge shaping & maintenance",
        "Garden bed installation",
        "Mulch installation & refresh",
        "Plant selection & planting",
        "Flower bed design",
        "Seasonal plant rotation",
        "Tree health assessment",
        "Emergency tree services",
        "Root system management",
      ],
    },
    {
      icon: Droplets,
      title: "Irrigation & Water Features",
      description: "Efficient irrigation systems and beautiful water feature installations.",
      image: irrigationImage,
      subServices: [
        "Sprinkler system installation",
        "Drip irrigation setup",
        "Irrigation system repairs",
        "Timer & controller installation",
        "Water pressure optimization",
        "Drainage system installation",
        "French drain installation",
        "Gutter cleaning & repair",
        "Downspout extensions",
        "Water feature installation",
        "Pond maintenance",
        "Fountain installation",
        "Irrigation winterization",
        "Smart irrigation systems",
      ],
    },
    {
      icon: Hammer,
      title: "Hardscaping & Construction",
      description: "Patios, walkways, decks, and outdoor construction projects.",
      image: hardscapingImage,
      subServices: [
        "Patio installation & design",
        "Stone walkway construction",
        "Brick pathway installation",
        "Deck building & construction",
        "Deck staining & refinishing",
        "Fence installation & repair",
        "Retaining wall construction",
        "Outdoor kitchen installation",
        "Fire pit construction",
        "Pergola & gazebo building",
        "Outdoor lighting installation",
        "Concrete work & repair",
        "Pavement sealing",
        "Outdoor storage solutions",
      ],
    },
    {
      icon: Sparkles,
      title: "Power Washing & Cleaning",
      description: "Deep cleaning for driveways, patios, siding, and outdoor surfaces.",
      image: powerWashingImage,
      subServices: [
        "Driveway power washing",
        "Sidewalk & walkway cleaning",
        "Patio & deck cleaning",
        "Siding & exterior washing",
        "Roof cleaning & treatment",
        "Fence cleaning & restoration",
        "Pool deck cleaning",
        "Concrete surface cleaning",
        "Brick & stone cleaning",
        "Window exterior cleaning",
        "Gutter exterior cleaning",
        "Outdoor furniture cleaning",
        "Equipment & tool cleaning",
        "Commercial power washing",
      ],
    },
    {
      icon: Calendar,
      title: "Seasonal Services",
      description: "Year-round maintenance including fall cleanup and spring preparation.",
      image: seasonalImage,
      subServices: [
        "Fall leaf raking & removal",
        "Spring yard cleanup",
        "Winter preparation services",
        "Storm debris cleanup",
        "Holiday light installation",
        "Holiday light removal",
        "Seasonal plant care",
        "Snow removal services",
        "Ice treatment application",
        "Seasonal mulch refresh",
        "Garden winterization",
        "Spring fertilization",
        "Seasonal pruning",
        "Weather damage assessment",
      ],
    },
  ]

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index)
  }

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-6 font-nature px-4">
            Our <span className="text-emerald-600">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-green-700 max-w-5xl mx-auto font-organic px-4 leading-relaxed">
            Transform your outdoor space into the beautiful sanctuary you've always dreamed of. Whether you need regular
            maintenance to keep your lawn pristine or a complete landscape makeover, we're here to bring your vision to
            life with personalized service that exceeds your expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 max-w-7xl mx-auto mt-8 sm:mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-[22rem] sm:h-[23rem] md:h-[24rem] lg:h-[25rem] cursor-pointer group"
              style={{ perspective: "1000px" }}
              onClick={() => handleCardClick(index)}
            >
              <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                style={{ transformStyle: "preserve-3d" }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  opacity: { duration: 0.3, delay: index * 0.05 },
                  y: { duration: 0.3, delay: index * 0.05 },
                  rotateY: { duration: 0.7, ease: "easeInOut" },
                }}
                viewport={{ once: true }}
              >
                {/* Front of Card - Original Design */}
                <motion.div
                  className="absolute inset-0 w-full h-full bg-white rounded-2xl overflow-hidden border border-green-200 shadow-lg"
                  style={{ backfaceVisibility: "hidden" }}
                  whileHover={{
                    y: -10,
                    scale: 1.01,
                    boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.3)",
                  }}
                  transition={{ duration: 0.15 }}
                >
                  {/* Header Image */}
                  <div className="h-48 sm:h-40 lg:h-52 xl:h-56 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Content */}
                  <div
                    className="relative p-4 sm:p-5 lg:p-6 flex flex-col justify-between bg-white min-h-[8rem] sm:min-h-[9rem]"
                  >
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-3">
                        <motion.div
                          className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center transition-colors duration-300 shadow-lg relative z-10 border-2 border-white flex-shrink-0"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.15 }}
                        >
                          <service.icon className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-white" />
                        </motion.div>
                        <motion.div
                          className="flex items-center justify-center bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-full px-3 py-1.5 shadow-sm group-hover:shadow-md transition-all duration-300 flex-shrink-0"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.15 }}
                        >
                          <span className="text-xs sm:text-sm font-semibold text-emerald-700 group-hover:text-emerald-800 transition-colors duration-300 whitespace-nowrap">
                            Click for details
                          </span>
                        </motion.div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-green-800 mb-1 sm:mb-2 group-hover:text-emerald-600 transition-colors duration-300 leading-tight break-words overflow-hidden">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-green-700 leading-snug font-organic break-words overflow-hidden line-clamp-3">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-400/50 rounded-2xl transition-all duration-200" />
                </motion.div>

                {/* Back of Card */}
                <div
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl p-3 sm:p-4 lg:p-5 flex flex-col justify-between border border-emerald-500 shadow-lg overflow-hidden"
                  style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                >
                  <div className="text-center mb-2 sm:mb-3 flex-shrink-0">
                    <service.icon className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-white mx-auto mb-1 sm:mb-2" />
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1 leading-tight break-words">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-xs">What's Included:</p>
                  </div>

                  <div className="grid grid-cols-1 gap-1 flex-grow min-h-0 overflow-hidden">
                    <div className="space-y-1 overflow-hidden">
                      {service.subServices
                        .slice(0, Math.ceil(service.subServices.length / 2))
                        .map((subService, subIndex) => (
                          <motion.div
                            key={subIndex}
                            className="flex items-start space-x-2 text-white overflow-hidden"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: flippedCard === index ? 1 : 0, x: flippedCard === index ? 0 : -10 }}
                            transition={{ delay: flippedCard === index ? subIndex * 0.1 : 0 }}
                          >
                            <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 mt-1.5" />
                            <span className="text-xs font-medium leading-tight break-words overflow-hidden">
                              {subService}
                            </span>
                          </motion.div>
                        ))}
                    </div>
                    <div className="space-y-1 overflow-hidden">
                      {service.subServices
                        .slice(Math.ceil(service.subServices.length / 2))
                        .map((subService, subIndex) => (
                          <motion.div
                            key={subIndex + Math.ceil(service.subServices.length / 2)}
                            className="flex items-start space-x-2 text-white overflow-hidden"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: flippedCard === index ? 1 : 0, x: flippedCard === index ? 0 : -10 }}
                            transition={{
                              delay:
                                flippedCard === index
                                  ? (subIndex + Math.ceil(service.subServices.length / 2)) * 0.1
                                  : 0,
                            }}
                          >
                            <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 mt-1.5" />
                            <span className="text-xs font-medium leading-tight break-words overflow-hidden">
                              {subService}
                            </span>
                          </motion.div>
                        ))}
                    </div>
                  </div>

                  <div className="text-center mt-2 flex-shrink-0">
                    <span className="text-white/90 text-xs font-medium">Click to flip back</span>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white border-2 border-green-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-green-400 hover:to-emerald-500 hover:border-green-400 transition-all duration-150 hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesTeaser