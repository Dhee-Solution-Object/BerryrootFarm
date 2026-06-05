'use client'

import { motion } from 'framer-motion'
import {
Leaf,
ShieldCheck,
Sprout,
Trees,
} from 'lucide-react'

import { Container } from '@/components/Container'
import { Section } from '@/components/Section'

export const AboutSection = () => {
return ( <Section
  id="about"
  className="relative overflow-hidden bg-[#fafcf8] pt-16 pb-8 lg:pt-20 lg:pb-10"
>
{/* Background Glow */} <div className="absolute inset-0 overflow-hidden"> <div className="absolute top-10 left-20 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" /> <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" /> </div>

  <Container className="relative z-10 mt-2">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto text-center"
    >

      <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
        Premium Berry &
        <span className="block text-green-600">
          Avocado Cultivation
        </span>
      </h2>

     
    </motion.div>

    {/* Stats */}
    {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

      {[
        ['20+', 'Acres Cultivated'],
        ['10K+', 'Healthy Plants'],
        ['100%', 'Sustainable Practices'],
        ['500+', 'Satisfied Customers'],
      ].map(([number, label], index) => (
        <motion.div
          key={index}
          whileHover={{ y: -6 }}
          className="bg-white rounded-[32px] p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
        >
          <h3 className="text-4xl lg:text-5xl font-bold text-green-600">
            {number}
          </h3>

          <p className="mt-3 text-gray-600">
            {label}
          </p>
        </motion.div>
      ))}

    </div> */}

    {/* Main Content */}
    <div className="grid lg:grid-cols-2 gap-8 mt-10">

      {/* Left Card */}
      <motion.div
        whileHover={{ y: -6 }}
        className="bg-white rounded-[40px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
      >
        <span className="text-green-600 font-semibold">
          Our Mission
        </span>

        <h3 className="mt-4 text-4xl font-bold text-gray-900 leading-tight">
          Growing Healthy Plants For Sustainable Agriculture
        </h3>

        <p className="mt-6 text-gray-600 leading-relaxed">
          We focus on cultivating premium fruit plants
          that thrive in modern agricultural environments.
          Through careful selection, responsible farming
          methods and continuous innovation, we help
          ensure healthy growth and long-term productivity.
        </p>

        <div className="mt-10 space-y-5">

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span>Sustainable Farming Practices</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span>Premium Fruit Varieties</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span>Healthy & Disease-Free Plants</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span>Advanced Cultivation Techniques</span>
          </div>

        </div>
      </motion.div>

      {/* Right Feature Cards */}
      <div className="grid sm:grid-cols-2 gap-6">

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white rounded-[32px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
        >
          <Leaf className="text-green-600 mb-5" size={32} />

          <h4 className="text-xl font-bold">
            Sustainability
          </h4>

          <p className="mt-3 text-gray-600">
            Responsible farming practices that support
            environmental balance.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white rounded-[32px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
        >
          <ShieldCheck
            className="text-blue-600 mb-5"
            size={32}
          />

          <h4 className="text-xl font-bold">
            Premium Quality
          </h4>

          <p className="mt-3 text-gray-600">
            Carefully nurtured plants for healthy growth
            and productivity.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white rounded-[32px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
        >
          <Sprout
            className="text-emerald-600 mb-5"
            size={32}
          />

          <h4 className="text-xl font-bold">
            Innovation
          </h4>

          <p className="mt-3 text-gray-600">
            Modern cultivation methods designed for
            long-term success.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white rounded-[32px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
        >
          <Trees
            className="text-lime-600 mb-5"
            size={32}
          />

          <h4 className="text-xl font-bold">
            Plantation Expertise
          </h4>

          <p className="mt-3 text-gray-600">
            Dedicated agricultural knowledge and
            hands-on farming experience.
          </p>
        </motion.div>

      </div>

    </div>

    {/* Bottom Statement
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-16 text-center"
    >
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
        Rooted In Nature.
        <span className="block text-green-600">
          Growing With Excellence.
        </span>
      </h3>

    </motion.div> */}

  </Container>
</Section>


)
}
