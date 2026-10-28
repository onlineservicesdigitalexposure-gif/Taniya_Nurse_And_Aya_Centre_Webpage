import { useEffect } from 'react'
import { Navbar } from './components/common/Navbar'
import { Footer } from './components/common/Footer'
import { FloatingActions } from './components/common/FloatingActions'
import { HeroSection } from './components/sections/HeroSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { AboutSection } from './components/sections/AboutSection'
import { WhyChooseUsSection } from './components/sections/WhyChooseUsSection'
import { HowItWorksSection } from './components/sections/HowItWorksSection'
import { FaqSection } from './components/sections/FaqSection'
import { ContactSection } from './components/sections/ContactSection'

export default function App() {
  // Support direct loading of /#services, /#about, /#why-us, /#faq and /#contact on initial page load
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash
      const timer = setTimeout(() => {
        const targetElement = document.querySelector(hash)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [])
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col antialiased">
      {/* Accessible Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-brand-deep focus:text-white focus:rounded-lg focus:shadow-soft-lg focus:outline-none focus:ring-2 focus:ring-brand-accent text-sm font-semibold"
      >
        Skip to main content
      </a>

      {/* Shared Global Sticky Navbar */}
      <Navbar />

      {/* Main Single-Page Content Sections */}
      <main id="main-content" className="flex-1">
        {/* Section 1: Home / Hero */}
        <HeroSection />

        {/* Section 2: Services */}
        <ServicesSection />

        {/* Section 3: About */}
        <AboutSection />

        {/* Section 4: Why Us */}
        <WhyChooseUsSection />

        {/* Section 4.5: How It Works */}
        <HowItWorksSection />

        {/* Section 5: FAQ */}
        <FaqSection />

        {/* Section 6: Contact */}
        <ContactSection />
      </main>

      {/* Shared Global Footer */}
      <Footer />

      {/* Floating Action Buttons (Phone & WhatsApp) */}
      <FloatingActions />
    </div>
  )
}

