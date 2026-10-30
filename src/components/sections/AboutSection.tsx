import { useState, useEffect, useCallback } from 'react'
import { MapPin, Heart, Home, Users, ArrowRight, Maximize2, X, ShieldCheck } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import frontImage from '../../assets/Front Image.jpeg'
import visitingCardImage from '../../assets/Visiting Card.png'
import { BUSINESS_INFO } from '../../data/navigation'

interface AboutMediaItem {
  id: string
  label: string
  title: string
  subtitle: string
  badge: string
  image: string
  alt: string
  fit: 'cover' | 'contain'
}

const ABOUT_MEDIA: AboutMediaItem[] = [
  {
    id: 'front-office',
    label: 'Front Storefront View',
    title: 'Physical Centre Storefront & Entrance',
    subtitle: '2009 Chak Garia, near Baghajatin Railway Station, Kolkata 700075',
    badge: 'Chak Garia • Kolkata',
    image: frontImage,
    alt: 'Real storefront, registered signboard and office entrance of Taniya Nurse & Aya Centre at Chak Garia, near Baghajatin Railway Station, Kolkata',
    fit: 'contain',
  },
  {
    id: 'visiting-card',
    label: 'Visiting Card',
    title: 'Official Centre Visiting Card',
    subtitle: 'Call: +91 8100440884 / 6291600864 • Govt. Regd.',
    badge: 'Official Card',
    image: visitingCardImage,
    alt: 'Official printed visiting card of Taniya Nurse & Aya Centre showing contact numbers, address, and home care services',
    fit: 'contain',
  },
]

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion()
  const [activeMediaIndex, setActiveMediaIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  // Auto-rotate between Storefront & Visiting Card every 6 seconds, pausing on hover or interaction
  useEffect(() => {
    if (isPaused || isLightboxOpen) return

    const timer = setTimeout(() => {
      setActiveMediaIndex((prev) => (prev + 1) % ABOUT_MEDIA.length)
    }, 6000)

    return () => clearTimeout(timer)
  }, [activeMediaIndex, isPaused, isLightboxOpen])

  // Handle ESC key to close modal
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsLightboxOpen(false)
    }
  }, [])

  useEffect(() => {
    if (isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isLightboxOpen, handleKeyDown])

  const activeMedia = ABOUT_MEDIA[activeMediaIndex]

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-padding bg-brand-bg border-b border-brand-border-subtle overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Descriptive Story & Location Context */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-4 text-left"
          >
            <div className="inline-flex items-center gap-1.5 badge-gold">
              <Heart className="w-3.5 h-3.5 text-amber-700" />
              <span>ABOUT OUR CENTRE</span>
            </div>

            <h2 id="about-heading" className="heading-section">
              Personalized Home Care Rooted in the Heart of Kolkata
            </h2>

            <div className="space-y-4 text-brand-muted leading-relaxed text-sm sm:text-base">
              <p>
                At <strong>Taniya Nurse &amp; Aya Centre</strong>, we understand that finding supportive care for an aging parent, an unwell family member, or a newborn baby is a deeply personal decision. Home is where individuals feel safest, and our mission is to help families arrange suitable attendant support in the comfort of their familiar surroundings.
              </p>
              <p>
                We coordinate a range of essential home-care services, including bedside aya assistance, nursing care support, infant and growing child care, specialized newborn and mother assistance, everyday home cooking, and general daily living assistance. Every engagement starts with a clear conversation about what your household genuinely requires.
              </p>
            </div>

            {/* Location Focus Highlight Box */}
            <div className="p-4 sm:p-5 rounded-card bg-white border border-brand-border shadow-soft-sm space-y-2.5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-primary-light text-brand-primary flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-deep text-sm sm:text-base">
                    Accessible South Kolkata Location
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted mt-0.5 leading-relaxed">
                    Conveniently situated at <strong>{BUSINESS_INFO.address}</strong>. Our proximity to Baghajatin Railway Station makes it straightforward for families across South Kolkata, Jadavpur, Garia, Santoshpur, and neighbouring localities to consult with us.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-deep font-semibold">
                <Home className="w-4 h-4 text-brand-primary shrink-0" />
                <span>Comfort of your own home</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-deep font-semibold">
                <Users className="w-4 h-4 text-brand-primary shrink-0" />
                <span>Assistance matched to family routine</span>
              </div>
            </div>

            <div className="pt-2">
              <a href="#services" className="btn-secondary inline-flex items-center gap-2 text-sm">
                <span>View All Care Options</span>
                <ArrowRight className="w-4 h-4 text-brand-primary" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Authentic Centre Storefront & Visiting Card Showcase */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-3.5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Interactive Tab Switcher */}
            <div className="grid grid-cols-2 gap-2 p-1.5 bg-white rounded-xl border border-brand-border shadow-soft-sm">
              {ABOUT_MEDIA.map((item, idx) => {
                const isSelected = activeMediaIndex === idx
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setActiveMediaIndex(idx)
                      setIsPaused(true)
                    }}
                    className={`py-2 px-3 rounded-lg text-xs font-heading font-bold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${
                      isSelected
                        ? 'bg-brand-primary text-white shadow-soft-sm'
                        : 'text-brand-muted hover:text-brand-deep hover:bg-brand-bg'
                    }`}
                    aria-pressed={isSelected}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isSelected ? 'bg-white' : 'bg-brand-primary'
                      }`}
                    />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Main Visual Frame - Fixed Full View for Front Image & Visiting Card */}
            <div className="relative rounded-2xl overflow-hidden bg-white border border-brand-border shadow-soft-lg group">
              <div
                onClick={() => setIsLightboxOpen(true)}
                className="relative h-[360px] sm:h-[420px] md:h-[460px] w-full overflow-hidden bg-brand-bg flex items-center justify-center cursor-pointer select-none"
                title="Click to view full image in high resolution"
              >
                {/* Ambient Soft Blur Backdrop using active image */}
                <img
                  src={activeMedia.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110 pointer-events-none"
                />
                <div className="absolute inset-0 bg-white/40 pointer-events-none" />

                {/* Main Image with Full View Display (No Cropping) */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeMedia.id}
                    src={activeMedia.image}
                    alt={activeMedia.alt}
                    width="1280"
                    height="960"
                    loading="lazy"
                    decoding="async"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{
                      duration: shouldReduceMotion ? 0.01 : 0.35,
                      ease: 'easeInOut',
                    }}
                    className="relative z-10 max-h-full max-w-full object-contain p-2.5 sm:p-3.5 drop-shadow-md transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </AnimatePresence>

                {/* Hover Magnifier Tooltip */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-deep/20 backdrop-blur-[1px]">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 text-brand-deep text-xs font-bold font-heading shadow-soft-md transform scale-95 group-hover:scale-100 transition-transform duration-200">
                    <Maximize2 className="w-3.5 h-3.5 text-brand-primary" />
                    <span>Click for Full View</span>
                  </span>
                </div>

                {/* Slide indicator dots */}
                <div
                  className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-sm z-30"
                  aria-label="Slide indicators"
                >
                  {ABOUT_MEDIA.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveMediaIndex(i)
                        setIsPaused(true)
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                        activeMediaIndex === i
                          ? 'w-5 bg-white'
                          : 'w-1.5 bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${i + 1} of ${ABOUT_MEDIA.length}`}
                      aria-current={activeMediaIndex === i ? 'true' : undefined}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Metadata Pill */}
              <div className="p-3.5 sm:p-4 bg-white/95 border-t border-brand-border flex items-center justify-between gap-3 text-left">
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm font-bold font-heading text-brand-deep truncate">
                    {activeMedia.title}
                  </div>
                  <div className="text-[11px] sm:text-xs text-brand-muted truncate mt-0.5">
                    {activeMedia.subtitle}
                  </div>
                </div>
                <div className="shrink-0">
                  <span className="badge-gold text-[10px] sm:text-[11px] py-1 px-2.5 font-bold">
                    {activeMedia.badge}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Line Badge */}
            <div className="p-3.5 rounded-card bg-brand-deep text-white text-xs flex items-center justify-between gap-3 shadow-soft-sm text-left">
              <div>
                <div className="text-white/70 text-[10px] uppercase font-bold tracking-wider">
                  Direct Coordinator Line
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="font-bold text-sm text-white hover:text-brand-accent transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <a
                href="#contact"
                className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-brand-accent font-semibold transition-colors shrink-0 text-xs"
              >
                Reach Us
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Full Resolution Modal / Lightbox for Storefront & Visiting Card */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-brand-deep/90 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={`Full view: ${activeMedia.title}`}
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[92vh] w-full bg-white rounded-2xl shadow-soft-xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-4 bg-brand-deep text-white flex items-center justify-between border-b border-brand-border">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-accent" />
                  <span className="font-heading font-bold text-sm sm:text-base">
                    {activeMedia.title}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Full Image */}
              <div className="bg-black/95 flex-1 flex items-center justify-center p-2 sm:p-4 min-h-[350px] max-h-[72vh] overflow-hidden">
                <img
                  src={activeMedia.image}
                  alt={activeMedia.alt}
                  className="max-h-full max-w-full object-contain rounded-lg drop-shadow-lg"
                />
              </div>

              {/* Footer */}
              <div className="p-3 sm:p-4 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                <div className="text-xs text-brand-muted">
                  <strong className="text-brand-deep">{activeMedia.subtitle}</strong>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={`tel:${BUSINESS_INFO.rawPhone}`}
                    className="btn-primary py-1.5 px-3 text-xs"
                  >
                    Call: {BUSINESS_INFO.phone}
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(false)}
                    className="btn-secondary py-1.5 px-3 text-xs"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
