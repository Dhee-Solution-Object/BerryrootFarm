'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { FEATURES } from '@/lib/constants'
import * as Icons from 'lucide-react'

export const WhyChooseUsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const getIcon = (iconName: string) => {
    const iconMap: Record<string, any> = {
      Leaf: Icons.Leaf,
      Users: Icons.Users,
      Zap: Icons.Zap,
      Globe: Icons.Globe,
    }
    return iconMap[iconName] || Icons.Leaf
  }

  return (
    <Section id="why-us" className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex flex-col m-4 items-center text-center max-w-5xl mx-auto mb-2"
>
  <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight ">
    <span className="text-white">
      Why Grow With
    </span>

    <span className="block text-green-400">
      Our Plantation
    </span>
  </h2>

  <p className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-gray-300 text-center">
    Combining sustainable farming practices, premium fruit varieties
    and modern agricultural expertise to cultivate long-term success.
  </p>
</motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {FEATURES.map((feature, index) => {
            const IconComponent = getIcon(feature.icon)
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500 h-full">
                  <div className="text-center space-y-4">
                    <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Highlight Box */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl text-center backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold mb-3">100% Satisfaction Guaranteed</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            If you're not completely satisfied with your plant, we offer a hassle-free replacement or refund within 30
            days.
          </p>
        </motion.div> */}
      </Container>
    </Section>
  )
}
