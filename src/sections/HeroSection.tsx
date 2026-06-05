
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf, ShieldCheck, Trees } from 'lucide-react'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export const HeroSection = () => {
  return (
    <section
  id="home"
  className="
  relative
  overflow-hidden
  bg-gradient-to-br
  from-[#F8FFF5]
  via-white
  to-[#EEFDF4]
  min-h-[100svh]
  flex items-center
  pt-25 lg:pt-28
"
>
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-8">
              <Leaf size={16} className="text-green-600" />
              <span className="text-sm font-medium text-green-700">
                Premium Berry & Avocado Plantations
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-[0.95] text-gray-900">
              Cultivating
              <span className="block text-green-600">
                Nature's Finest
              </span>
              Fruits
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Premium Blueberry, Raspberry, Strawberry and Avocado plants
              grown through sustainable farming practices, advanced cultivation
              methods, and exceptional agricultural expertise.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button
                size="lg"
                className="group"
                onClick={() =>
                  document
                    .querySelector('#collection')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Explore Varieties
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Contact Us
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14 pt-8 border-t border-gray-200">
              <div>
                <h3 className="text-3xl font-bold text-green-600">20+</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Acres Cultivated
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-600">10K+</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Healthy Plants
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-600">100%</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Quality Focused
                </p>
              </div>
            </div>
          </motion.div>

<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="
  relative
  flex
  items-center
  justify-center
  h-[420px]
  sm:h-[500px]
  md:h-[560px]
  lg:h-[650px]
  xl:h-[720px]
"
>
  {/* Glow */}
  <div className="absolute w-[700px] h-[700px] bg-green-100 rounded-full blur-3xl opacity-40" />

 <motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 6, repeat: Infinity }}
  className="
  relative z-10
  w-[220px] h-[220px]
  sm:w-[280px] sm:h-[280px]
  md:w-[340px] md:h-[340px]
  lg:w-[400px] lg:h-[400px]
  xl:w-[460px] xl:h-[460px]
  rounded-full
  overflow-hidden
  border-[14px]
  border-white
  shadow-[0_30px_80px_rgba(0,0,0,0.15)]
"
>
    <Image
      src="/farm.jpg"
      alt="Farm"
      fill
      className="object-cover"
      priority
    />
  </motion.div>

  {/* Blueberry */}
<motion.div
  animate={{
    y: [0, -15, 0],
    rotate: [-2, 2, -2],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
  className="
hidden md:block
absolute
top-0
right-0
lg:right-6
xl:right-10
z-30
"
>
  <div className="relative p-[2px] rounded-[32px] bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-500 shadow-[0_20px_50px_rgba(59,130,246,0.25)]">

    <div className="bg-white/90 backdrop-blur-xl rounded-[30px] p-3">

      {/* Badge */}
      <div className="absolute -top-3 -right-3 z-20">
        <span className="bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full font-semibold shadow-lg">
          Premium
        </span>
      </div>

      {/* Image */}
      <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-3xl overflow-hidden">
        <Image
          src="/Blueberry.jpg"
          alt="Blueberry"
          fill
          className="object-cover hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="text-center mt-3">
        <h4 className="font-bold text-lg text-gray-900">
          Blueberry
        </h4>

        <p className="text-xs text-gray-500 mt-1">
          Rich in antioxidants
        </p>
      </div>

    </div>
  </div>
</motion.div>

  <motion.div
  animate={{ y: [0, 12, 0] }}
  transition={{ duration: 5, repeat: Infinity }}
  className="hidden md:block absolute left-4 lg:left-0 top-28 z-30"
>
  <div className="relative p-[2px] rounded-[32px] bg-gradient-to-br from-red-400 via-pink-400 to-rose-500 shadow-[0_20px_50px_rgba(244,63,94,0.25)]">

    <div className="bg-white/90 backdrop-blur-xl rounded-[30px] p-3">

      <div className="absolute -top-3 -right-3 z-20">
        <span className="bg-rose-500 text-white text-[10px] px-3 py-1 rounded-full font-semibold shadow-lg">
          Fresh
        </span>
      </div>

      <div className="relative w-36 h-36 rounded-3xl overflow-hidden">
        <Image
          src="/Strawberry.jpg"
          alt="Strawberry"
          fill
          className="object-cover hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="text-center mt-3">
        <h4 className="font-bold text-lg text-gray-900">
          Strawberry
        </h4>
        <p className="text-xs text-gray-500 mt-1">
          Sweet & juicy harvest
        </p>
      </div>

    </div>
  </div>
</motion.div>

 {/* Raspberry */}
<motion.div
  animate={{
    y: [0, -12, 0],
    rotate: [1, -1, 1],
  }}
  transition={{
    duration: 4.5,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
  className="absolute right-0 bottom-28 z-30"
>
  <div className="relative p-[2px] rounded-[32px] bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-500 shadow-[0_20px_50px_rgba(217,70,239,0.25)]">

    <div className="bg-white/90 backdrop-blur-xl rounded-[30px] p-3">

      {/* Badge */}
      <div className="absolute -top-3 -right-3 z-20">
        <span className="bg-fuchsia-600 text-white text-[10px] px-3 py-1 rounded-full font-semibold shadow-lg">
          Organic
        </span>
      </div>

      {/* Image */}
      <div className="relative w-36 h-36 rounded-3xl overflow-hidden">
        <Image
          src="/Raspberry.jpg"
          alt="Raspberry"
          fill
          className="object-cover hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="text-center mt-3">
        <h4 className="font-bold text-lg text-gray-900">
          Raspberry
        </h4>

        <p className="text-xs text-gray-500 mt-1">
          Premium berry quality
        </p>
      </div>

    </div>
  </div>
</motion.div>

  {/* Avocado */}
<motion.div
  animate={{
    y: [0, 15, 0],
    rotate: [-1, 1, -1],
  }}
  transition={{
    duration: 5.5,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
  className="absolute left-10 bottom-0 z-30"
>
  <div className="relative p-[2px] rounded-[32px] bg-gradient-to-br from-green-400 via-emerald-500 to-lime-500 shadow-[0_20px_50px_rgba(34,197,94,0.25)]">

    <div className="bg-white/90 backdrop-blur-xl rounded-[30px] p-3">

      {/* Badge */}
      <div className="absolute -top-3 -right-3 z-20">
        <span className="bg-green-600 text-white text-[10px] px-3 py-1 rounded-full font-semibold shadow-lg">
          Healthy
        </span>
      </div>

      {/* Image */}
      <div className="relative w-36 h-36 rounded-3xl overflow-hidden">
        <Image
          src="/Avocado.jpg"
          alt="Avocado"
          fill
          className="object-cover hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="text-center mt-3">
        <h4 className="font-bold text-lg text-gray-900">
          Avocado
        </h4>

        <p className="text-xs text-gray-500 mt-1">
          Nutrient rich fruit
        </p>
      </div>

    </div>
  </div>
</motion.div>

  
</motion.div>

        </div>
      </Container>
    </section>
  )
}