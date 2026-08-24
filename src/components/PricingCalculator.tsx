'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, Clock, DollarSign } from 'lucide-react'

export function PricingCalculator() {
  const [duration, setDuration] = useState(12)
  const [roiTarget, setRoiTarget] = useState(100)
  const [pricing, setPricing] = useState({
    baseRetainer: 250000,
    successRate: 5.0,
    maxSuccessFee: 250000,
    monthlyRate: 20833
  })

  // Pricing calculation functions
  const clamp = (min: number, value: number, max: number) => 
    Math.max(min, Math.min(max, value))

  const calculateF = (duration: number) => 
    clamp(0.6, 12 / duration, 2.0)

  const calculateG = (roi: number) => 
    clamp(0.6, 1 + 0.4 * (roi - 100) / 100, 1.6)

  const calculateS = (roi: number) => 
    clamp(0.02, 0.05 + 0.05 * (roi - 100) / 100, 0.10)

  const calculatePricing = (duration: number, roi: number) => {
    const baseAnchor = 250000
    const f = calculateF(duration)
    const g = calculateG(roi)
    const s = calculateS(roi)
    
    const baseRetainer = Math.round(baseAnchor * f * g)
    const successRate = s * 100
    const maxSuccessFee = baseRetainer
    const monthlyRate = Math.round(baseRetainer / duration)
    
    return { baseRetainer, successRate, maxSuccessFee, monthlyRate }
  }

  useEffect(() => {
    setPricing(calculatePricing(duration, roiTarget))
  }, [duration, roiTarget])

  const formatCurrency = (amount: number) => 
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)

  const presets = [
    { name: 'Standard', duration: 12, roi: 100, description: 'Balanced approach' },
    { name: 'Sprint', duration: 6, roi: 150, description: 'Fast results' },
    { name: 'Enterprise', duration: 18, roi: 75, description: 'Long-term growth' },
    { name: 'Conservative', duration: 24, roi: 50, description: 'Steady progress' }
  ]

  return (
    <motion.div
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Glass Container */}
      <div className="backdrop-blur-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-3xl p-8 shadow-2xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 mb-4">
            <Calculator className="w-4 h-4 text-violet-300" />
            <span className="text-sm text-violet-300">Interactive Calculator</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Customize Your AI Integration
          </h3>
          <p className="text-slate-300">
            Adjust parameters to see real-time pricing updates
          </p>
        </div>

        {/* Preset Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {presets.map((preset) => (
            <motion.button
              key={preset.name}
              onClick={() => {
                setDuration(preset.duration)
                setRoiTarget(preset.roi)
              }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 p-4 text-left hover:border-violet-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative z-10">
                <h4 className="font-semibold text-white mb-1">{preset.name}</h4>
                <p className="text-xs text-slate-400 mb-2">{preset.description}</p>
                <div className="text-xs text-violet-300">
                  {preset.duration}m • {preset.roi}% ROI
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          ))}
        </div>

        {/* Controls */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Duration Slider */}
          <div className="space-y-4">
            <label className="block text-white font-semibold">
              Project Duration
              <span className="ml-2 text-violet-300">{duration} months</span>
            </label>
            <div className="relative">
              <input
                type="range"
                min="6"
                max="24"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>6 months</span>
                <span>24 months</span>
              </div>
            </div>
          </div>

          {/* ROI Target Slider */}
          <div className="space-y-4">
            <label className="block text-white font-semibold">
              ROI Target
              <span className="ml-2 text-violet-300">{roiTarget}%</span>
            </label>
            <div className="relative">
              <input
                type="range"
                min="50"
                max="300"
                value={roiTarget}
                onChange={(e) => setRoiTarget(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>50%</span>
                <span>300%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-4 gap-4">
          <motion.div
            className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-sm border border-violet-500/30 rounded-xl p-6 text-center"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <DollarSign className="w-8 h-8 text-violet-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">
              {formatCurrency(pricing.baseRetainer)}
            </div>
            <div className="text-sm text-slate-300">Base Retainer</div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">
              {pricing.successRate.toFixed(1)}%
            </div>
            <div className="text-sm text-slate-300">Success Fee Rate</div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-sm border border-pink-500/30 rounded-xl p-6 text-center"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <DollarSign className="w-8 h-8 text-pink-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">
              {formatCurrency(pricing.maxSuccessFee)}
            </div>
            <div className="text-sm text-slate-300">Max Success Fee</div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 text-center"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">
              {formatCurrency(pricing.monthlyRate)}
            </div>
            <div className="text-sm text-slate-300">Monthly Rate</div>
          </motion.div>
        </div>

        {/* Guarantee Note */}
        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
          <p className="text-sm text-green-300 text-center">
            <strong>💚 Performance Guarantee:</strong> If we don't deliver {roiTarget}% ROI in {duration} months, you get a full refund or we work for free until we do.
          </p>
        </div>
      </div>

      {/* Custom CSS for sliders */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
        }
        
        .slider::-webkit-slider-track {
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7);
          border-radius: 4px;
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
        }
        
        .slider::-moz-range-track {
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7);
          border-radius: 4px;
        }
      `}</style>
    </motion.div>
  )
}