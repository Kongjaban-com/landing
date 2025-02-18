"use client"

import { motion } from "framer-motion"

const companies = [
  { name: "Tech Division", description: "Digital Innovation" },
  { name: "Media Group", description: "Content Creation" },
  { name: "Financial Services", description: "Fintech Solutions" },
  { name: "Healthcare Tech", description: "Digital Health" },
  { name: "E-commerce", description: "Online Retail" },
  { name: "Green Energy", description: "Sustainable Future" },
]

export function CompanyGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {companies.map((company, index) => (
        <motion.div
          key={company.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-gray-900/0 group-hover:from-gray-900/10 transition-colors" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{company.name}</h3>
          <p className="text-gray-600">{company.description}</p>
          <div className="mt-4">
            <a href="#" className="text-red-600 hover:text-red-700 text-sm font-medium">
              Learn more →
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

