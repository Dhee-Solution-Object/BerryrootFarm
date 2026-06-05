# Coffeeo Plants - Premium Modern Plant Nursery Website

A stunning, premium modern plant nursery website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🌿 Features

### Design
- **Modern Minimal Luxury**: Clean, elegant design with premium aesthetics
- **Nature Inspired**: Earthy green and beige color palette
- **Smooth Animations**: Framer Motion animations for delightful interactions
- **Responsive Design**: Mobile-first, fully responsive layout
- **High Performance**: Optimized images, lazy loading, and efficient code

### Pages & Sections

1. **Navbar**
   - Transparent top, sticky on scroll
   - Smooth scroll navigation
   - Mobile hamburger menu
   - Brand logo with gradient

2. **Hero Section**
   - Fullscreen hero with parallax effect
   - Fade-in animations
   - CTA buttons
   - Trust statistics

3. **About Section**
   - Brand story and mission
   - Highlight checklist
   - Beautiful imagery

4. **Plant Collection**
   - Grid layout with category filtering
   - Beautiful plant cards with hover effects
   - Price and "View Details" buttons
   - Category tags

5. **Why Choose Us**
   - Icon cards with features
   - Benefits of choosing Coffeeo Plants
   - 100% Satisfaction guarantee banner

6. **Gallery Section**
   - Masonry-style layout
   - Hover zoom effects
   - Professional plant photography

7. **Testimonials**
   - Customer review carousel
   - Star ratings
   - Smooth carousel navigation

8. **Contact Section**
   - Contact form (UI)
   - WhatsApp button
   - Contact information cards
   - Map placeholder

9. **Footer**
   - Social media links
   - Quick navigation
   - Contact details
   - Copyright information

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 with PostCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Geist (system font)

## 📁 Project Structure

```
coffeeo-plants/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   └── favicon.ico
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   ├── ResponsiveImage.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/           # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── PlantCollectionSection.tsx
│   │   ├── WhyChooseUsSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ContactSection.tsx
│   ├── lib/
│   │   ├── utils.ts        # Utility functions (cn)
│   │   └── constants.ts    # Brand data and constants
│   └── styles/             # Additional styles
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or higher
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd coffeeo-plants
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the website

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## 🎨 Customization

### Colors
Edit the color variables in `app/globals.css`:
- Primary: `--color-primary: #16a34a` (Green)
- Accent: `--color-accent: #10b981` (Emerald)
- Beige: `--color-beige: #faf7f2`

### Brand Information
Update brand details in `src/lib/constants.ts`:
- `BRAND_NAME`
- `COMPANY_EMAIL`
- `COMPANY_PHONE`
- `COMPANY_ADDRESS`

### Content
- Plant data in `PLANTS` array
- Features in `FEATURES` array
- Testimonials in `TESTIMONIALS` array
- Gallery images in `GALLERY_IMAGES` array

## 🔧 Components

### Button
Flexible button component with multiple variants:
- `variant`: primary, secondary, outline, ghost
- `size`: sm, md, lg

### Card
Reusable card component with optional hover effects

### Container
Wrapper component for consistent max-width and padding

### Section
Section wrapper with optional dark background

### ResponsiveImage
Next.js Image component with responsive sizing

## 🎯 SEO Features

- Proper metadata with Open Graph tags
- Twitter card support
- Responsive viewport configuration
- Semantic HTML structure
- Mobile-friendly design

## 🚄 Performance Optimizations

- Image lazy loading
- Optimized CSS with Tailwind
- Fast animations with Framer Motion
- Static generation where possible
- Compressed assets

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔐 Production Ready

This website is production-ready and can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting

## 📄 License

Created with ❤️ for Coffeeo Plants

## 🌟 Future Enhancements

- Product detail pages
- Add to cart functionality
- User authentication
- Payment integration
- Blog/Care guide section
- Newsletter subscription
- Advanced filtering
- Product search
- Customer reviews system

---

Built with Next.js 15, TypeScript, and Tailwind CSS ✨
