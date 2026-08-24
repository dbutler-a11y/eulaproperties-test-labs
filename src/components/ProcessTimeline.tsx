'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Search, Lightbulb, Rocket, Target, CheckCircle2 } from 'lucide-react'

const timelineSteps = [
  {
    phase: "Phase 1",
    title: "AI Readiness Assessment",
    duration: "Weeks 1-2",
    icon: Search,
    description: "Comprehensive analysis of your current workflows, data infrastructure, and AI integration opportunities.",
    deliverables: [
      "Workflow audit and bottleneck identification",
      "AI readiness score and recommendations", 
      "ROI projections and timeline mapping",
      "Technology stack compatibility assessment"
    ],
    gradient: "from-violet-500 to-purple-600"
  },
  {
    phase: "Phase 2", 
    title: "Custom AI Strategy Design",
    duration: "Weeks 3-6",
    icon: Lightbulb,
    description: "Tailored AI solution architecture designed specifically for your business processes and objectives.",
    deliverables: [
      "Custom AI implementation roadmap",
      "Selected automation frameworks and tools",
      "Integration specifications and timeline",
      "Team training and change management plan"
    ],
    gradient: "from-purple-500 to-pink-600"
  },
  {
    phase: "Phase 3",
    title: "Implementation & Deployment", 
    duration: "Weeks 7-16",
    icon: Rocket,
    description: "Systematic rollout of AI solutions with minimal disruption to your existing operations.",
    deliverables: [
      "AI systems deployment and configuration",
      "Data pipeline setup and optimization",
      "Staff training and adoption support",
      "Initial performance metrics and adjustments"
    ],
    gradient: "from-pink-500 to-rose-600"
  },
  {
    phase: "Phase 4",
    title: "Optimization & Scaling",
    duration: "Weeks 17-24",
    icon: Target,
    description: "Fine-tuning AI performance and expanding successful implementations across your organization.",
    deliverables: [
      "Performance optimization and tuning",
      "Expanded AI deployment to additional workflows", 
      "Advanced analytics and reporting dashboard",
      "Predictive maintenance and monitoring setup"
    ],
    gradient: "from-rose-500 to-red-600"
  },
  {
    phase: "Phase 5",
    title: "ROI Validation & Handoff",
    duration: "Weeks 25-48",
    icon: CheckCircle2,
    description: "Comprehensive ROI measurement, knowledge transfer, and long-term sustainability planning.",
    deliverables: [
      "ROI validation and performance reporting",
      "Complete knowledge transfer to your team",
      "Sustainability and maintenance documentation",
      "Future enhancement recommendations"
    ],
    gradient: "from-emerald-500 to-teal-600"
  }
]

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Our AI Integration
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
            Process
          </span>
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          A proven 5-phase methodology that transforms your business operations with AI-powered solutions.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Progress Line */}
        <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 bg-slate-700 h-full rounded-full">
          <motion.div
            className="w-full bg-gradient-to-b from-violet-500 via-purple-500 to-pink-500 rounded-full origin-top"
            style={{ height: progressHeight }}
          />
        </div>

        {/* Timeline Steps */}
        <div className="space-y-16">
          {timelineSteps.map((step, index) => (
            <motion.div
              key={step.phase}
              className={`relative flex flex-col md:flex-row items-start gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Node */}
              <div className="relative z-10 flex-shrink-0">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <step.icon className="w-8 h-8 text-white" />
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} blur-xl opacity-30`} />
                </motion.div>

                {/* Phase Label */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="text-xs font-semibold text-violet-400 bg-slate-900 px-2 py-1 rounded-full border border-violet-500/20">
                    {step.phase}
                  </span>
                </div>
              </div>

              {/* Content Card */}
              <motion.div
                className={`flex-1 backdrop-blur-xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-2xl p-8 hover:border-violet-500/30 transition-all duration-300 group ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Card Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-300 group-hover:to-purple-300 transition-all duration-300">
                      {step.title}
                    </h3>
                    <span className="text-sm font-semibold text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-violet-300 uppercase tracking-wide">
                    Key Deliverables
                  </h4>
                  <div className="grid gap-2">
                    {step.deliverables.map((deliverable, deliverableIndex) => (
                      <motion.div
                        key={deliverableIndex}
                        className="flex items-start gap-3 group/item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: deliverableIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.gradient} flex-shrink-0 mt-2`} />
                        <span className="text-sm text-slate-300 group-hover/item:text-white transition-colors duration-200">
                          {deliverable}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-5`} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 mb-6">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-medium">Success Guaranteed</span>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Every phase includes measurable success criteria and ROI validation to ensure we're on track to deliver your guaranteed 2x return.
          </p>
        </motion.div>
      </div>
    </div>
  )
}