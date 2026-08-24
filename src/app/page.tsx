'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ParticleField } from '@/components/ParticleField'
import { PricingCalculator } from '@/components/PricingCalculator'
import { FeatureCards } from '@/components/FeatureCards'
import { ProcessTimeline } from '@/components/ProcessTimeline'
import { GuaranteeSection } from '@/components/GuaranteeSection'
import { Navigation } from '@/components/Navigation'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Zap, Brain, Target } from 'lucide-react'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <main className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Particle Field Background */}
      <ParticleField />
      
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center"
        style={{ y, opacity }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 mb-6">
              <Zap className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-violet-300">AI Performance Studio</span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block text-white">Eula Labs</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">
              AI Integration
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            2x ROI guaranteed or we work for free. Transform your business with AI-powered workflows and intelligent automation.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
            >
              Start Free Assessment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-slate-950 font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              View Calculator
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 text-sm text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-violet-400" />
              <span>AI Strategy Consulting</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-violet-400" />
              <span>Guaranteed ROI Tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-violet-400" />
              <span>Enterprise-Grade Security</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Interactive Pricing Calculator */}
      <section id="calculator" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Calculate Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                Investment
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Customize your AI integration timeline and ROI targets. Our dynamic pricing adapts to your business needs.
            </p>
          </motion.div>
          
          <PricingCalculator />
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="relative py-20">
        <FeatureCards />
      </section>

      {/* AI Integration Process */}
      <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <ProcessTimeline />
      </section>

      {/* Guarantee Section */}
      <section className="relative py-20">
        <GuaranteeSection />
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-violet-900/20 to-purple-900/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Start with a free AI readiness assessment. No commitment, no cost—just insights.
            </p>
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/25"
            >
              Schedule Free Assessment
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                Eula Labs.ai
              </h3>
              <p className="text-slate-400 text-sm">AI Integration Performance Studio</p>
            </div>
            <div className="text-sm text-slate-400">
              © 2025 Eula Labs. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
