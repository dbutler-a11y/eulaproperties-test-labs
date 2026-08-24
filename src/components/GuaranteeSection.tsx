'use client'

import { motion } from 'framer-motion'
import { Shield, TrendingUp, Clock, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function GuaranteeSection() {
  const guaranteeFeatures = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "2x ROI Guarantee",
      description: "Double your investment within 12 months or we work for free until you do"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Risk-Free Implementation",
      description: "30-day money-back guarantee on all pilot implementations"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-400" />,
      title: "Timeline Commitment",
      description: "Delivery milestones met on schedule or receive service credits"
    }
  ]

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Our
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
            Guarantee
          </span>
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          We're so confident in our AI solutions that we back them with industry-leading guarantees
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {guaranteeFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-slate-800/50 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-violet-900/20 to-purple-900/20 border border-violet-500/20 rounded-3xl p-8 text-center"
      >
        <div className="flex items-center justify-center mb-4">
          <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
          <span className="text-lg font-semibold text-white">Performance Guarantee</span>
        </div>
        <p className="text-slate-300 mb-6 max-w-3xl mx-auto">
          Our AI implementations come with measurable KPIs and performance benchmarks. 
          If we don't meet the agreed-upon metrics within the specified timeframe, 
          you don't pay until we deliver the promised results.
        </p>
        <Button 
          size="lg"
          className="group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
        >
          Learn About Our Guarantees
        </Button>
      </motion.div>
    </div>
  )
}