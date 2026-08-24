'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Target, Shield, TrendingUp, Cog } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Strategy & Consulting',
    description: 'Comprehensive analysis of your workflows to identify optimal AI integration opportunities.',
    gradient: 'from-violet-500 to-purple-600',
    borderGradient: 'from-violet-500/20 to-purple-600/20'
  },
  {
    icon: Zap,
    title: 'Intelligent Automation',
    description: 'Deploy AI-powered workflows that reduce manual tasks and accelerate business processes.',
    gradient: 'from-purple-500 to-pink-600',
    borderGradient: 'from-purple-500/20 to-pink-600/20'
  },
  {
    icon: Target,
    title: 'Guaranteed ROI Tracking',
    description: '2x return guarantee with transparent metrics and continuous performance monitoring.',
    gradient: 'from-pink-500 to-rose-600',
    borderGradient: 'from-pink-500/20 to-rose-600/20'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'AI implementations with bank-grade security, compliance, and data protection standards.',
    gradient: 'from-blue-500 to-cyan-600',
    borderGradient: 'from-blue-500/20 to-cyan-600/20'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'AI systems designed to grow with your business and adapt to changing market demands.',
    gradient: 'from-emerald-500 to-teal-600',
    borderGradient: 'from-emerald-500/20 to-teal-600/20'
  },
  {
    icon: Cog,
    title: 'Seamless Integration',
    description: 'Plug-and-play AI tools that work with your existing tech stack without disruption.',
    gradient: 'from-orange-500 to-red-600',
    borderGradient: 'from-orange-500/20 to-red-600/20'
  }
]

export function FeatureCards() {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Why Choose
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
            Eula Labs?
          </span>
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          We don't just implement AI—we transform your entire business operation with intelligent, scalable solutions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className={`group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-gradient-to-r ${feature.borderGradient} p-8 hover:shadow-2xl transition-all duration-500`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              rotateX: 5,
              rotateY: 5,
            }}
          >
            {/* Animated Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            
            {/* Icon Container */}
            <motion.div
              className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg`}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <feature.icon className="w-8 h-8 text-white" />
              
              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300`} />
            </motion.div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-300 group-hover:to-purple-300 transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                {feature.description}
              </p>
            </div>

            {/* Hover Border Animation */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className={`absolute inset-0 rounded-2xl border-2 border-gradient-to-r ${feature.gradient} animate-pulse`} />
            </div>

            {/* Floating Particles on Hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${feature.gradient}`}
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${30 + i * 20}%`,
                  }}
                  animate={{
                    y: [-10, -20, -10],
                    opacity: [0.5, 1, 0.5],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 mb-6">
          <TrendingUp className="w-5 h-5 text-violet-400" />
          <span className="text-violet-300 font-medium">Ready to get started?</span>
        </div>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Join forward-thinking companies that have already transformed their operations with our AI solutions.
        </p>
      </motion.div>
    </div>
  )
}