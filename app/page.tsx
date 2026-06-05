import Navbar from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/sections/HeroSection'
import { AboutSection } from '@/sections/AboutSection'
import { PlantCollectionSection } from '@/sections/PlantCollectionSection'
import { WhyChooseUsSection } from '@/sections/WhyChooseUsSection'
import { GallerySection } from '@/sections/GallerySection'
import { TestimonialsSection } from '@/sections/TestimonialsSection'
import { ContactSection } from '@/sections/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <HeroSection />
        <AboutSection />
        <PlantCollectionSection />
        <WhyChooseUsSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
