'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { Section } from '@/components/Section'
import { PLANTS } from '@/lib/constants'

export const PlantCollectionSection = () => {
const containerVariants = {
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: {
staggerChildren: 0.1,
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

return ( <Section
   id="collection"
   className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-20"
 > <Container>

```
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
          Explore Our
        </span>

        <span className="block text-green-600">
          Premium Varieties
        </span>
      </h2>

      <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Discover our carefully cultivated collection of
        Blueberry, Strawberry, Raspberry, Avocado and
        Papaya varieties grown through sustainable
        agricultural practices and modern farming expertise.
      </p>
    </motion.div>

    {/* Plant Grid */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {PLANTS.map((plant) => (
        <motion.div
          key={plant.id}
          variants={itemVariants}
        >
          <Card
            className="
            overflow-hidden
            group
            h-full
            flex
            flex-col
            bg-white
            rounded-[32px]
            border
            border-green-100
            hover:-translate-y-2
            hover:shadow-[0_25px_70px_rgba(34,197,94,0.12)]
            transition-all
            duration-500
            "
          >
            {/* Image */}
            <div className="relative h-72 overflow-hidden">
              <ResponsiveImage
                src={plant.image}
                alt={plant.name}
                width={500}
                height={500}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl">
                <span className="text-xs font-semibold text-green-700">
                  Premium Variety
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">

              <h3 className="text-2xl font-bold text-gray-900">
                {plant.name}
              </h3>

              <p className="mt-8 text-gray-600 leading-relaxed">
  {plant.description}
</p>
              {/* <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                  Healthy Plantation
                </span>

                <div className="w-11 h-11 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                  <ArrowRight
                    size={18}
                    className="text-green-600 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div> */}

            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>

  </Container>
</Section>


)
}
