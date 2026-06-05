'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, Leaf, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Plants', href: '#plants' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const href = e.currentTarget.getAttribute('href')

    if (href?.startsWith('#')) {
      e.preventDefault()

      const element = document.querySelector(href)

      element?.scrollIntoView({
        behavior: 'smooth',
      })

      setIsOpen(false)
    }
  }

  return (
   <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-6 lg:px-8 pt-3">
      {/* <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 pt-3 pb-0"> */}
        <motion.nav
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`mx-auto flex items-center justify-between rounded-2xl border px-4 md:px-6 py-3 backdrop-blur-xl transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 border-green-100 shadow-xl'
              : 'bg-white/80 border-white/50 shadow-lg'
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 min-w-0"
          >
            <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 via-emerald-500 to-lime-500 text-white shadow-lg flex-shrink-0">
              <Leaf size={22} />
            </div>

            <div className="hidden sm:flex flex-col justify-center m-4">
  <span className="text-[11px] uppercase tracking-[0.2em] text-green-600 font-semibold leading-none">
    Organic Farming
  </span>

  <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mt-1">
    BerryRoot Farms
  </h1>
</div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="group relative text-sm font-medium text-gray-700 hover:text-green-700 transition-colors"
              >
                {link.label}

                <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-green-600 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden xl:flex items-center gap-4">
            <div className="rounded-full bg-green-50 border border-green-200 px-4 py-2">
              <span className="text-sm font-medium text-green-700">
                🌱 5000+ Plants Delivered
              </span>
            </div>

            <Link
              href="#contact"
              onClick={handleNavClick}
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:shadow-lg"
            >
              <Phone size={16} />
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.25,
              }}
              className="mt-2 overflow-hidden rounded-2xl border border-green-100 bg-white shadow-xl xl:hidden"
            >
              <div className="p-4 space-y-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="block rounded-xl px-4 py-3 text-gray-700 font-medium hover:bg-green-50 hover:text-green-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="rounded-xl bg-green-50 border border-green-100 p-3 text-center">
                  <span className="text-sm font-medium text-green-700">
                    🌱 5000+ Plants Delivered
                  </span>
                </div>

                <Link
                  href="#contact"
                  onClick={handleNavClick}
                  className="block rounded-xl bg-green-600 px-4 py-3 text-center font-semibold text-white hover:bg-green-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      {/* </div> */}
    </header>
  )
}