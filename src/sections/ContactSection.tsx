'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'

export const ContactSection = () => {
return ( <Section
   id="contact"
   className="relative overflow-hidden py-32 bg-gradient-to-br from-[#f8fff5] via-white to-[#eefdf4]"
 >
{/* Background Glow */} <div className="absolute top-0 left-0 w-96 h-96 bg-green-200/20 blur-3xl rounded-full" /> <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 blur-3xl rounded-full" />

```
  <Container className="relative z-10">

    {/* Hero Contact Card */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-[40px]"
    >
      {/* Background Image */}
      <div className="relative h-[650px]">

        <Image
          src="/newfarm.jpg"
          alt="Premium Plantation"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/40" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24">

          <div className="max-w-3xl">

            <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm font-medium">
              Premium Berry & Avocado Plantation
            </div>

            <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Ready To
              <span className="block text-green-400">
                Grow Together?
              </span>
            </h2>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Connect with our team for premium blueberry,
              raspberry, strawberry and avocado plantation
              solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="https://wa.me/9945652824"
                target="_blank"
                className="group px-8 py-4 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-semibold flex items-center gap-3 transition-all"
              >
                <MessageCircle size={20} />
                WhatsApp Us
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="tel:+919945652824"
                className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold hover:bg-white/20 transition-all"
              >
                Call Now
              </a>

            </div>
          </div>

        </div>
      </div>
    </motion.div>

    {/* Contact Cards */}
    <div className="grid lg:grid-cols-3 gap-6 mt-10">

      {/* Office */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-white/80 backdrop-blur-xl rounded-[32px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
      >
        <div className="w-14 h-14 rounded-2xl mb-2 bg-green-100 flex items-center justify-center">
          <MapPin className="text-green-600" />
        </div>

        <h3 className="mt-8 text-2xl font-bold text-gray-900">
    Office
        </h3>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Navaruthu Business Solutions Private Limited
          <br />
          1, 29, Tower B,
          Brigade Tech Park,
          <br />
          Whitefield, Bengaluru,
          <br />
          Karnataka - 560066
        </p>
      </motion.div>

      {/* Phone */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-white/80 backdrop-blur-xl rounded-[32px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
      >
        <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
          <Phone className="text-blue-600" />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Call Us
        </h3>

        <a
          href="tel:+919945652824"
          className="mt-4 block text-lg text-green-600 font-semibold"
        >
          +91 99456 52824
        </a>

        <p className="mt-3 text-gray-500">
          Monday - Saturday
          <br />
          9:00 AM - 6:00 PM
        </p>
      </motion.div>

      {/* Email */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-white/80 backdrop-blur-xl rounded-[32px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
      >
        <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">
          <Mail className="text-purple-600" />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Email Us
        </h3>

        <a
          href="mailto:hello@yourdomain.com"
          className="mt-4 block text-lg text-green-600 font-semibold"
        >
          hello@yourdomain.com
        </a>

        <p className="mt-3 text-gray-500">
          We usually respond
          <br />
          within 24 hours.
        </p>
      </motion.div>

    </div>
  </Container>
</Section>

)
}
