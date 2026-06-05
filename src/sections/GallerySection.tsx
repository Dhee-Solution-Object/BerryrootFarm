'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { Section } from '@/components/Section'
import { GALLERY_IMAGES } from '@/lib/constants'

export const GallerySection = () => {
  return (
    <Section id="gallery" className="bg-white">
      <Container>
        {/* Header */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-center mb-16 max-w-5xl mx-auto"
>
  <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
    <span className="text-gray-900">
      Life Across Our
    </span>

    <span className="block text-green-600">
      Plantation
    </span>
  </h2>

  <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
    Explore our blueberry, raspberry, strawberry,
    avocado and papaya plantations through moments
    captured directly from our fields.
  </p>
</motion.div>

        {/* Masonry Gallery */}
        <div className="grid lg:grid-cols-2 gap-6">

  {/* Large Image */}
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative overflow-hidden rounded-[40px] h-[650px] group"
  >
    <ResponsiveImage
      src={GALLERY_IMAGES[0].src}
      alt={GALLERY_IMAGES[0].alt}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
    />

    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-xl rounded-3xl px-6 py-5 shadow-xl">
      <p className="text-green-600 text-sm font-semibold uppercase">
        Featured Plantation
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mt-1">
        Premium Berry Cultivation
      </h3>
    </div>
  </motion.div>

  {/* Right Grid */}
  <div className="grid grid-cols-2 gap-6">

    {GALLERY_IMAGES.slice(1, 5).map((image, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="relative overflow-hidden rounded-[32px] h-[310px] group"
      >
        <ResponsiveImage
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="absolute bottom-4 left-4">
          <p className="text-white font-semibold">
            {image.alt}
          </p>
        </div>
      </motion.div>
    ))}

  </div>

</div>
      </Container>
    </Section>
  )
}
