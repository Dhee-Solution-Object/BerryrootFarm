'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { TESTIMONIALS } from '@/lib/constants'
import Image from 'next/image'

export const TestimonialsSection = () => {
  return (
    <Section
      id="testimonials"
      className="bg-gradient-to-b from-white to-green-50/40"
    >
      <Container>

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex flex-col m-4 items-center text-center max-w-5xl mx-auto mb-2"
>
   <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-gray-900">
              Trusted By
            </span>

            <span className="block text-green-600">
              Growers & Partners
            </span>
          </h2>

  <p className="mt-8 text-gray-600 max-w-3xl text-lg md:text-xl leading-relaxed text-gray-300 text-center">
   Hear what growers, agricultural partners and customers say about our premium plantations and cultivation practices.
  </p>

        
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <Card
                className="
                h-full
                bg-white
                border
                border-green-100
                rounded-[32px]
                p-8
                hover:-translate-y-2
                hover:shadow-[0_25px_60px_rgba(34,197,94,0.12)]
                transition-all
                duration-500
                "
              >
                {/* Quote Icon */}
                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-6">
                  <Quote size={24} className="text-green-600" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="text-gray-600 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 mt-6 border-t border-gray-100">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-green-100">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>

                    <p className="text-sm text-green-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}

        </div>

        {/* Bottom Banner */}
        

      </Container>
    </Section>
  )
}