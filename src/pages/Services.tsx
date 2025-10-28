"use client"
import { motion } from "framer-motion"
import {
  Wrench,
  TreeDeciduous,
  Hammer,
  Snowflake,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Droplets,
  Sparkles,
} from "lucide-react"

// Import service images
import lawnCareImage from "../assets/images/services/lanscaping.webp"
import treeServicesImage from "../assets/images/services/trees.webp"
import irrigationImage from "../assets/images/services/irrigation.webp"
import hardscapingImage from "../assets/images/services/hardscaping.webp"
import powerWashingImage from "../assets/images/services/power.webp"
import seasonalImage from "../assets/images/services/seasonal.webp"
import { useNavigate } from "react-router-dom"


const Services = () => {
  const navigate = useNavigate();
  const serviceCategories = [
    {
      icon: Wrench,
      title: "Landscaping & Yard Care",
      description:
        "Professional lawn mowing, hedge trimming, edging, leaf removal, sod installation, and custom garden design to keep your property beautiful year-round.",
      image: lawnCareImage,
      services: ["Lawn Mowing", "Hedge Trimming", "Edging", "Leaf Removal", "Sod Installation", "Garden Design"],
    },
    {
      icon: TreeDeciduous,
      title: "Tree & Plant Services",
      description:
        "Expert tree trimming, safe removal, stump grinding, and comprehensive plant health care by certified arborists.",
      image: treeServicesImage,
      services: ["Tree Trimming", "Tree Removal", "Stump Grinding", "Plant Health Care"],
    },
    {
      icon: Hammer,
      title: "Construction & Hardscaping",
      description:
        "Custom deck building, patio installation, walkways, power washing, and irrigation systems to transform your outdoor space.",
      image: hardscapingImage,
      services: ["Deck Building", "Patio Installation", "Walkways", "Retaining Walls"],
    },
    {
      icon: Snowflake,
      title: "Seasonal & Specialty Services",
      description:
        "Complete fall and winter cleanup, spring preparation, holiday lighting, and emergency storm damage cleanup available year-round.",
      image: seasonalImage,
      services: ["Fall and Winter Cleanup", "Spring Prep", "Holiday Lighting", "Storm Cleanup"],
    },
    {
      icon: Sparkles,
      title: "Power Washing & Cleaning",
      description: "Deep cleaning for driveways, patios, siding, and outdoor surfaces.",
      image: powerWashingImage,
      services: ["Driveway Cleaning", "Patio Washing", "Siding Cleaning", "Deck Restoration"],
    },
    {
      icon: Droplets,
      title: "Irrigation & Water Features",
      description: "Efficient irrigation systems and beautiful water feature installations.",
      image: irrigationImage,
      services: ["Sprinkler Systems", "Drip Irrigation", "Water Features", "Fountain Installation"],
    },
  ]

  return (
    <div className="pt-24 pb-20">
      <div className="pt-24">
        <div className="bg-green-100 border-b-4 border-emerald-300/50 shadow-lg mb-16">
          <div className="container mx-auto px-4 py-16">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
                Our <span className="text-emerald-600">Services</span>
              </h1>
              <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
                Professional landscaping and lawn care services in Prince George's County, Maryland. From routine
                maintenance to complete transformations, we bring your outdoor vision to life.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-green-100 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Icon Header */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                  {/* Icon and Title on top of image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <category.icon className="w-10 h-10 mb-3 drop-shadow-lg" />
                    <h2 className="text-2xl font-bold drop-shadow-lg">{category.title}</h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">{category.description}</p>

                  {/* Services List */}
                  <div className="space-y-2 mb-6">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>

                  <a onClick={() => {navigate('/contact')}}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 group-hover:scale-105 cursor-pointer"
                  >
                    Get Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-100 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
              <Star className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Ready to Transform Your <span className="text-emerald-600">Outdoor Space?</span>
            </h2>

            <p className="text-xl text-green-700 mb-8 leading-relaxed">
              Get a personalized quote for your landscaping project. Our expert team will assess your needs and provide
              a detailed estimate with no hidden fees.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: CheckCircle, title: "Free Consultation", desc: "No cost, no obligation" },
                { icon: Clock, title: "24hr Response", desc: "Quick turnaround" },
                { icon: Star, title: "Expert Service", desc: "Licensed & insured" },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <benefit.icon className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-green-800 mb-2">{benefit.title}</h3>
                  <p className="text-green-600 text-sm">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                onClick={() => navigate('/contact')}
                className="group bg-gradient-to-r from-emerald-500 to-green-600 cursor-pointer text-white px-8 py-4 rounded-full font-bold text-lg hover:from-emerald-400 hover:to-green-500 transition-all duration-300 hover:scale-105 shadow-xl flex items-center space-x-2"
              >
                <span>Get Your Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:240-810-6798"
                className="group flex items-center space-x-3 text-green-600 hover:text-emerald-600 transition-colors font-semibold"
              >
                <div className="w-12 h-12 border-2 border-green-600 group-hover:border-emerald-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span>Or Call (240) 810-6798</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Services