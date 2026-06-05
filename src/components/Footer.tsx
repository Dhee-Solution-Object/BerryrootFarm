'use client'

import Link from 'next/link'
import {
Mail,
Phone,
MapPin,
ArrowRight,
} from 'lucide-react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

import { Container } from './Container'
import {
BRAND_NAME,
COMPANY_EMAIL,
COMPANY_PHONE,
NAV_LINKS,
} from '@/lib/constants'

export const Footer = () => {
const currentYear = new Date().getFullYear()

return ( <footer className="relative bg-[#0D1117] overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

  <Container className="relative z-10">

    

    {/* Main Footer */}
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 pb-8 mt-8">

      {/* Brand */}
      <div>
        <h3 className="text-3xl font-bold text-white ">
          {BRAND_NAME}
        </h3>

        <p className=" text-gray-400 leading-relaxed">
          Premium berry and avocado plantations
          focused on sustainable farming, healthy
          cultivation and long-term agricultural
          excellence.
        </p>

        {/* Social */}
        <div className="flex gap-4 mt-8">

          <a
    href="#"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all"
  >
    <FaFacebookF size={18} />
  </a>

  <a
    href="#"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-all"
  >
    <FaInstagram size={18} />
  </a>

  <a
    href="#"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-700 transition-all"
  >
    <FaLinkedinIn size={18} />
  </a>

        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-xl font-semibold text-white mb-6">
          Quick Links
        </h4>

        <ul className="space-y-3 text-gray-400 mt-4  ">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white hover:text-green-400 transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

     
      {/* Contact */}
      <div>
        <h4 className="text-xl font-semibold text-white mb-6">
          Contact
        </h4>

        <div className="space-y-5">

          <div className="flex gap-3 text-gray-400 mt-4">
            <Mail
              size={18}
              className="text-green-400 mt-1 flex-shrink-0"
            />

            <a
              href={`mailto:${COMPANY_EMAIL}`}
              className="text-gray-400 hover:text-gray-400 transition"
            >
              {COMPANY_EMAIL}
            </a>
          </div>

          <div className="flex gap-3 text-gray-400">
            <Phone
              size={18}
              className="text-green-400 mt-1 flex-shrink-0"
            />

            <a
              href={`tel:${COMPANY_PHONE}`}
              className="text-gray-400 hover:text-green-400 transition"
            >
              {COMPANY_PHONE}
            </a>
          </div>

          <div className="flex gap-3">
            <MapPin
              size={18}
              className="text-green-400 mt-1 flex-shrink-0"
            />

            <p className="text-gray-400 leading-relaxed">
              Navaruthu Business Solutions
              Private Limited
              <br />
              Brigade Tech Park, Whitefield
              <br />
              Bengaluru, Karnataka 560066
            </p>
          </div>

        </div>
      </div>

    </div>

    {/* Bottom */}
    <div className="border-t border-white/10 py-8 flex flex-col lg:flex-row justify-between items-center gap-4">

      <p className="text-gray-500 text-center lg:text-left">
        © {currentYear} {BRAND_NAME}. All Rights Reserved.
      </p>

      <p className="text-gray-500 text-center lg:text-right">
        Sustainable Agriculture • Premium Cultivation • Modern Farming
      </p>

    </div>

  </Container>
</footer>

)
}
