import { useState, useEffect } from 'react'
import { Phone, ArrowRight, MessageCircle, HeartHandshake, MapPin } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion'
import caregiverImg from '../../assets/hero-caregiver.jpg'
import ayaNursingImg from '../../assets/services/aya-nursing.jpg'
import newbornCareImg from '../../assets/services/newborn-care.jpg'
import aboutCareImg from '../../assets/about-care.jpg'
import homeCareImg from '../../assets/services/home-care.jpg'
import { BUSINESS_INFO } from '../../data/navigation'

interface HeroSlide {
  image: string
  title: string
  subtitle: string
  badge: string
  alt: string
}

const HERO_SLIDES: HeroSlide[] = [
  {
    image: caregiverImg,
    title: 'Personalized Home Care Support',
    subtitle: '12-Hour Day / Night & 24-Hour Residential Shifts',
    badge: 'Chak Garia • Kolkata',
    alt: 'A compassionate Indian female nurse gently holding hands with an elderly Indian grandmother in a bright Kolkata home',
  },
  {
    image: ayaNursingImg,
    title: 'Attentive Bedside Aya & Nursing',
    subtitle: 'Personal Care, Medication & Mobility Support',
    badge: 'Trained Attendants',
    alt: 'Trained Indian aya attendant providing attentive bedside assistance to senior patient',
  },
  {
    image: newbornCareImg,
    title: 'Newborn Baby & Mother Care',
    subtitle: 'Experienced, Gentle Jhorna & Aya Assistance',
    badge: 'Mother & Baby Care',
    alt: 'Experienced Indian baby aya gently holding and caring for newborn infant',
  },
  {
    image: aboutCareImg,
    title: 'Elderly & Patient Assistance',
    subtitle: 'Dignified Support for Aging Parents at Home',
    badge: 'Baghajatin & Garia',
    alt: 'Caring Indian home healthcare attendant assisting elderly resident at home',
  },
  {
    image: homeCareImg,
    title: 'Comprehensive Daily Living Care',
    subtitle: 'Flexible Day Shifts & Full-Time Live-In',
    badge: 'South Kolkata',
    alt: 'Indian caregiver providing compassionate home assistance in Kolkata',
  },
]

interface HeroImageCardProps {
  slides: HeroSlide[]
  currentSlide: number
  setCurrentSlide: (index: number) => void
  shouldReduceMotion: boolean | null
}

function HeroImageCard({
  slides,
  currentSlide,
  setCurrentSlide,
  shouldReduceMotion,
}: HeroImageCardProps) {
  const activeSlide = slides[currentSlide]

  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      {/* Subtle decorative background frame */}
      <div
        className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand-primary/10 via-brand-accent/20 to-transparent -rotate-1 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Image Container */}
      <div className="relative rounded-2xl overflow-hidden bg-white border border-brand-border shadow-soft-xl">
        {/* Slide Indicators */}
        <div
          className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-sm z-10"
          aria-label="Slide indicators"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                currentSlide === i
                  ? 'w-5 bg-white'
                  : 'w-1.5 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${i + 1} of ${slides.length}`}
              aria-current={currentSlide === i ? 'true' : undefined}
            />
          ))}
        </div>

        {/* Image Display with Smooth Crossfade */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-bg">
          <AnimatePresence initial={false}>
            <motion.img
              key={activeSlide.image}
              src={activeSlide.image}
              alt={activeSlide.alt}
              width="1000"
              height="750"
              loading={currentSlide === 0 ? 'eager' : 'lazy'}
              fetchPriority={currentSlide === 0 ? 'high' : 'auto'}
              decoding="async"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.45,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-500 ease-out"
            />
          </AnimatePresence>
        </div>

        {/* Grounded bottom overlay pill */}
        <div className="p-3.5 sm:p-4 bg-white/95 backdrop-blur-sm border-t border-brand-border-subtle flex items-center justify-between gap-3 text-left">
          <div className="min-w-0 flex-1">
            <div className="text-xs sm:text-sm font-bold font-heading text-brand-deep truncate">
              {activeSlide.title}
            </div>
            <div className="text-[11px] sm:text-xs text-brand-muted truncate">
              {activeSlide.subtitle}
            </div>
          </div>
          <div className="shrink-0">
            <span className="badge-gold text-[10px] sm:text-[11px] py-1 px-2.5 font-bold">
              {activeSlide.badge}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()
  const [currentSlide, setCurrentSlide] = useState(0)

  // Switch image every 3 seconds (3000ms) using setTimeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length)
    }, 3000)

    return () => clearTimeout(timer)
  }, [currentSlide])

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${BUSINESS_INFO.whatsappDefaultMessage}`

  // Restrained animation variants
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.5,
        delay: shouldReduceMotion ? 0 : custom * 0.12,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-white via-brand-bg/40 to-brand-bg py-4 sm:py-5 lg:py-6 border-b border-brand-border-subtle"
    >
      {/* Decorative subtle ambient glows */}
      <div
        className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-brand-primary-light/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 translate-y-1/3 w-80 h-80 bg-brand-accent-light/60 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Copy & Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Eyebrow Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="inline-flex items-center self-start gap-2 px-3 py-1.5 rounded-full bg-brand-primary-light border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-wider uppercase mb-4"
            >
              <HeartHandshake className="w-4 h-4 text-brand-primary" />
              <span>COMPASSIONATE CARE FOR YOUR FAMILY</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              id="hero-heading"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="heading-display mb-3"
            >
              Trusted Care for Your Loved Ones, Right at Home
            </motion.h1>

            {/* Mobile-Only Image Section (Directly after heading on mobile) */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="block lg:hidden my-4 sm:my-5"
            >
              <HeroImageCard
                slides={HERO_SLIDES}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
                shouldReduceMotion={shouldReduceMotion}
              />
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="subheading-lead mb-5 max-w-2xl"
            >
              Find suitable nursing, aya, newborn baby care, cooking and home-care support for your family's everyday needs.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5"
            >
              {/* Primary CTA: Call Now */}
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="btn-primary text-base py-3.5 px-6 shadow-soft-md justify-center"
                aria-label={`Call Taniya Nurse and Aya Centre at ${BUSINESS_INFO.phone}`}
              >
                <Phone className="w-4 h-4 text-white animate-bounce" />
                <span>Call Now</span>
                <span className="text-xs font-normal opacity-90 pl-1">
                  ({BUSINESS_INFO.phone})
                </span>
              </a>

              {/* Secondary CTA: Explore Services */}
              <a
                href="#services"
                className="btn-secondary text-base py-3.5 px-6 justify-center"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-brand-primary" />
              </a>

              {/* Optional Third Action: WhatsApp Enquiry */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-btn text-brand-deep bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-emerald-500"
                aria-label="Enquire on WhatsApp with Taniya Nurse & Aya Centre"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Enquiry</span>
              </a>
            </motion.div>

            {/* Grounded Trust Supporting Line */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="pt-2 border-t border-brand-border-subtle text-xs text-brand-muted space-y-1.5"
            >
              <p className="flex items-start gap-1.5 leading-relaxed">
                <span className="text-brand-primary font-bold mt-0.5">&bull;</span>
                <span>
                  Every family has unique needs — speak with our care coordinator to discuss individual care requirements, suitable caregiver profiles, and flexible shift schedules.
                </span>
              </p>
              <p className="flex items-center gap-1.5 text-brand-deep font-medium">
                <MapPin className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                <span>Serving Chak Garia, Baghajatin, and across Kolkata.</span>
              </p>
            </motion.div>

          </div>

          {/* Desktop Right Column: Warm, Professional Caregiving Photograph Carousel */}
          <div className="hidden lg:block lg:col-span-5 relative mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease: 'easeOut' }}
            >
              <HeroImageCard
                slides={HERO_SLIDES}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
                shouldReduceMotion={shouldReduceMotion}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
