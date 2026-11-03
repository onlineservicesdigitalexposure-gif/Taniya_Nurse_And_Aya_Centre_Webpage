import { useEffect, lazy, Suspense } from 'react'
import { Navbar } from './components/common/Navbar'
import { HeroSection } from './components/sections/HeroSection'
import { ServicesSection } from './components/sections/ServicesSection'

// Lazy-loaded below-the-fold components to reduce initial bundle & maximize Lighthouse score
const AboutSection = lazy(() =>
  import('./components/sections/AboutSection').then((m) => ({ default: m.AboutSection }))
)
const WhyChooseUsSection = lazy(() =>
  import('./components/sections/WhyChooseUsSection').then((m) => ({ default: m.WhyChooseUsSection }))
)
const HowItWorksSection = lazy(() =>
  import('./components/sections/HowItWorksSection').then((m) => ({ default: m.HowItWorksSection }))
)
const NurseAyaSection = lazy(() =>
  import('./components/sections/NurseAyaSection').then((m) => ({ default: m.NurseAyaSection }))
)
const FaqSection = lazy(() =>
  import('./components/sections/FaqSection').then((m) => ({ default: m.FaqSection }))
)
const ContactSection = lazy(() =>
  import('./components/sections/ContactSection').then((m) => ({ default: m.ContactSection }))
)
const Footer = lazy(() =>
  import('./components/common/Footer').then((m) => ({ default: m.Footer }))
)
const FloatingActions = lazy(() =>
  import('./components/common/FloatingActions').then((m) => ({ default: m.FloatingActions }))
)

function SectionSkeleton({ id, minHeight = 'min-h-[400px]' }: { id?: string; minHeight?: string }) {
  return (
    <div
      id={id}
      aria-busy="true"
      aria-label="Loading section..."
      className={`w-full ${minHeight} flex items-center justify-center bg-brand-bg/50 py-16`}
    >
      <div className="w-7 h-7 rounded-full border-2 border-brand-primary/20 border-t-brand-primary animate-spin" />
    </div>
  )
}

export default function App() {
  // Support direct loading of /#services, /#about, /#why-us, /#nurse-aya, /#faq and /#contact on initial page load
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash
      const timer = setTimeout(() => {
        const targetElement = document.querySelector(hash)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }, 250)
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

        {/* Section 3: About (Lazy Loaded) */}
        <Suspense fallback={<SectionSkeleton id="about" minHeight="min-h-[500px]" />}>
          <AboutSection />
        </Suspense>

        {/* Section 4: Why Us (Lazy Loaded) */}
        <Suspense fallback={<SectionSkeleton id="why-us" minHeight="min-h-[450px]" />}>
          <WhyChooseUsSection />
        </Suspense>

        {/* Section 4.5: How It Works (Lazy Loaded) */}
        <Suspense fallback={<SectionSkeleton id="how-it-works" minHeight="min-h-[400px]" />}>
          <HowItWorksSection />
        </Suspense>

        {/* Section 5: Nurse & Aya (Lazy Loaded) */}
        <Suspense fallback={<SectionSkeleton id="nurse-aya" minHeight="min-h-[600px]" />}>
          <NurseAyaSection />
        </Suspense>

        {/* Section 6: FAQ (Lazy Loaded) */}
        <Suspense fallback={<SectionSkeleton id="faq" minHeight="min-h-[450px]" />}>
          <FaqSection />
        </Suspense>

        {/* Section 7: Contact (Lazy Loaded) */}
        <Suspense fallback={<SectionSkeleton id="contact" minHeight="min-h-[600px]" />}>
          <ContactSection />
        </Suspense>
      </main>

      {/* Shared Global Footer (Lazy Loaded) */}
      <Suspense fallback={<footer className="h-48 bg-brand-deep" />}>
        <Footer />
      </Suspense>

      {/* Floating Action Buttons (Phone & WhatsApp) */}
      <Suspense fallback={null}>
        <FloatingActions />
      </Suspense>
    </div>
  )
}

