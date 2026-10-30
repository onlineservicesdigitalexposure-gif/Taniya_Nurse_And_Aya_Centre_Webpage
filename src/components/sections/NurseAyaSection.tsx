import { useState, useEffect, useCallback } from 'react'
import {
  ShieldCheck,
  Phone,
  MessageCircle,
  Clock,
  CheckCircle2,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  Users,
} from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { AYA_PROFILES, AYA_CATEGORIES, type AyaCategory, type AyaProfile } from '../../data/ayaStaff'
import { BUSINESS_INFO } from '../../data/navigation'

export function NurseAyaSection() {
  const shouldReduceMotion = useReducedMotion()
  const [selectedCategory, setSelectedCategory] = useState<AyaCategory>('all')
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null)

  // Filter profiles based on selected category
  const filteredProfiles = selectedCategory === 'all'
    ? AYA_PROFILES
    : AYA_PROFILES.filter((profile) => profile.category === selectedCategory)

  // Lightbox navigation helpers
  const openLightbox = (profileId: string) => {
    const index = AYA_PROFILES.findIndex((p) => p.id === profileId)
    if (index !== -1) {
      setActiveLightboxIndex(index)
    }
  }

  const closeLightbox = () => {
    setActiveLightboxIndex(null)
  }

  const nextLightbox = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => ((prev! + 1) % AYA_PROFILES.length))
    }
  }, [activeLightboxIndex])

  const prevLightbox = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! - 1 + AYA_PROFILES.length) % AYA_PROFILES.length)
    }
  }, [activeLightboxIndex])

  // Handle keyboard events (ESC, Left, Right)
  useEffect(() => {
    if (activeLightboxIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextLightbox()
      if (e.key === 'ArrowLeft') prevLightbox()
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeLightboxIndex, nextLightbox, prevLightbox])

  const activeProfile: AyaProfile | null =
    activeLightboxIndex !== null ? AYA_PROFILES[activeLightboxIndex] : null

  return (
    <section
      id="nurse-aya"
      aria-labelledby="nurse-aya-heading"
      className="section-padding bg-brand-bg border-b border-brand-border-subtle overflow-hidden"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-6 lg:mb-8">
          <div className="inline-flex items-center gap-1.5 badge-green mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-brand-primary" />
            <span>VERIFIED HOME ATTENDANTS &amp; NURSES</span>
          </div>

          <h2 id="nurse-aya-heading" className="heading-section mb-3">
            Our Dedicated Nurses &amp; Ayas
          </h2>

          <p className="subheading-lead max-w-2xl mx-auto">
            Real, trusted, and verified home caregivers in Kolkata. Our dedicated attendants provide attentive bedside care, infant nurturing, patient mobility, and 24/7 live-in support with compassion and dignity.
          </p>

          <p className="text-xs text-brand-muted mt-2">
            Every attendant is government ID checked, background verified, and assigned according to your family's exact daily care priorities.
          </p>
        </div>

        {/* Trust Highlights Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 lg:mb-8">
          <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-brand-border shadow-soft-sm flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-brand-deep">100% Verified</div>
              <div className="text-[11px] sm:text-xs text-brand-muted">Govt ID &amp; Address Checked</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-brand-border shadow-soft-sm flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-brand-deep">Flexible Shifts</div>
              <div className="text-[11px] sm:text-xs text-brand-muted">12h Day / Night &amp; 24h Live-in</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-brand-border shadow-soft-sm flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-brand-deep">Male &amp; Female Staff</div>
              <div className="text-[11px] sm:text-xs text-brand-muted">Trained Patient &amp; Baby Ayas</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-brand-border shadow-soft-sm flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-brand-deep">Quick Replacement</div>
              <div className="text-[11px] sm:text-xs text-brand-muted">Reliable Care Continuity</div>
            </div>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-8">
          {AYA_CATEGORIES.map((tab) => {
            const isSelected = selectedCategory === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id as AyaCategory)}
                className={`py-2 px-3.5 sm:px-4 rounded-full text-xs sm:text-sm font-bold font-heading transition-all duration-200 flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${
                  isSelected
                    ? 'bg-brand-primary text-white shadow-soft-md'
                    : 'bg-white text-brand-text hover:bg-brand-primary-light hover:text-brand-primary border border-brand-border'
                }`}
                aria-pressed={isSelected}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-brand-bg text-brand-muted'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Attendants & Ayas Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {filteredProfiles.map((profile, index) => {
            const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
              profile.whatsappEnquiryMessage
            )}`

            return (
              <motion.article
                key={profile.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 0.45,
                  delay: shouldReduceMotion ? 0 : (index % 3) * 0.1,
                  ease: 'easeOut',
                }}
                className="group flex flex-col justify-between rounded-card bg-white border border-brand-border shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div>
                  {/* Photo Frame Container - Fixed Proper Display Aspect Ratio */}
                  <div
                    onClick={() => openLightbox(profile.id)}
                    className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-brand-bg to-brand-border/40 cursor-pointer"
                    title={`Click to view full photo of ${profile.role}`}
                  >
                    <img
                      src={profile.image}
                      alt={profile.alt}
                      width="960"
                      height="1280"
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: profile.objectPosition || 'center 15%' }}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    {/* Gradient shading for text clarity */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 text-emerald-800 shadow-soft-sm backdrop-blur-xs">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Verified</span>
                      </span>

                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-black/60 text-white backdrop-blur-xs">
                        <Clock className="w-3 h-3 text-brand-accent" />
                        <span>{profile.shift.split('&')[0].trim()}</span>
                      </span>
                    </div>

                    {/* Center Hover Magnifier Prompt */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-deep/30 backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white text-brand-deep text-xs font-bold font-heading shadow-soft-md transform scale-95 group-hover:scale-100 transition-transform duration-200">
                        <Maximize2 className="w-3.5 h-3.5 text-brand-primary" />
                        <span>Click to Enlarge Photo</span>
                      </span>
                    </div>

                    {/* Bottom overlay with quick role summary */}
                    <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                      <div className="text-xs font-mono font-semibold text-brand-accent uppercase tracking-wider">
                        {profile.categoryLabel}
                      </div>
                      <div className="text-base sm:text-lg font-bold font-heading leading-tight drop-shadow-sm">
                        {profile.role}
                      </div>
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-4 sm:p-5 space-y-3.5 text-left">
                    {/* Experience & Verification Row */}
                    <div className="flex items-center justify-between text-xs text-brand-muted pb-2 border-b border-brand-border-subtle">
                      <span className="font-semibold text-brand-primary">
                        {profile.experience}
                      </span>
                      <span className="flex items-center gap-1 text-emerald-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{profile.verification}</span>
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-3">
                      {profile.description}
                    </p>

                    {/* Specialties Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {profile.specialties.slice(0, 3).map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-md bg-brand-bg text-[11px] font-medium text-brand-deep border border-brand-border-subtle"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-4 sm:p-5 pt-0 space-y-2">
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-brand-border-subtle">
                    <button
                      type="button"
                      onClick={() => openLightbox(profile.id)}
                      className="btn-secondary py-2 px-3 text-xs justify-center font-heading font-bold"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-brand-primary" />
                      <span>Full Photo</span>
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary py-2 px-3 text-xs justify-center font-heading font-bold"
                      aria-label={`Enquire on WhatsApp about ${profile.role}`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Inquire Now</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-8 lg:mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-brand-border shadow-soft-md flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="space-y-1.5 max-w-xl">
            <span className="badge-gold text-xs font-bold">FAST &amp; RELIABLE ARRANGEMENT</span>
            <h3 className="heading-card text-xl sm:text-2xl text-brand-deep">
              Need a Suitable Aya or Nurse for Your Home Today?
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Call our care coordinator directly. We discuss your patient's exact routine, mobility status, dietary requirements, and recommend the best-suited attendant for immediate deployment in Kolkata.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="btn-primary w-full sm:w-auto py-3 px-6 text-sm font-heading font-bold tracking-wide"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call Coordinator: {BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${BUSINESS_INFO.whatsappDefaultMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto py-3 px-5 text-sm font-heading font-bold"
            >
              <MessageCircle className="w-4 h-4 text-brand-primary" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {activeProfile && activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-brand-deep/85 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={`Photo viewer: ${activeProfile.role}`}
            onClick={closeLightbox}
          >
            {/* Modal Dialog Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[95vh] bg-white rounded-2xl shadow-soft-xl overflow-hidden flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Close photo viewer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next Floating Navigation Buttons */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  prevLightbox()
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  nextLightbox()
                }}
                className="absolute right-3 top-1/2 md:right-[380px] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Left Column: Full Uncropped Image Frame */}
              <div className="flex-1 bg-black flex items-center justify-center p-2 sm:p-4 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] max-h-[55vh] md:max-h-[85vh] relative overflow-hidden">
                <img
                  src={activeProfile.image}
                  alt={activeProfile.alt}
                  className="max-h-full max-w-full object-contain rounded-lg drop-shadow-md transition-all duration-300"
                />

                {/* Photo Counter Pill */}
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/70 text-white text-xs font-mono">
                  {activeLightboxIndex + 1} / {AYA_PROFILES.length}
                </div>
              </div>

              {/* Right Column: Attendant Details & Enquiry CTAs */}
              <div className="w-full md:w-[360px] lg:w-[380px] p-5 sm:p-6 bg-white flex flex-col justify-between overflow-y-auto max-h-[40vh] md:max-h-[85vh] text-left border-t md:border-t-0 md:border-l border-brand-border">
                <div className="space-y-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 badge-green text-xs font-bold mb-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
                      <span>{activeProfile.verification}</span>
                    </div>
                    <h3 className="heading-card text-lg sm:text-xl text-brand-deep">
                      {activeProfile.role}
                    </h3>
                    <div className="text-xs text-brand-primary font-semibold mt-1">
                      {activeProfile.experience}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-brand-bg border border-brand-border text-xs text-brand-muted space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-brand-deep">Shift Options:</span>
                      <span className="font-medium text-brand-primary">{activeProfile.shift}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-brand-deep">Category:</span>
                      <span>{activeProfile.categoryLabel}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-brand-deep">Service Area:</span>
                      <span>Kolkata &amp; South Kolkata</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-deep mb-1.5">
                      About this Attendant
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {activeProfile.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-deep mb-2">
                      Key Care Duties
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProfile.specialties.map((spec, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-brand-primary-light text-brand-primary text-xs font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal CTA Buttons */}
                <div className="pt-4 mt-4 border-t border-brand-border space-y-2">
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                      activeProfile.whatsappEnquiryMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full py-2.5 text-xs sm:text-sm justify-center font-heading font-bold"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire About This Caregiver</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS_INFO.rawPhone}`}
                    className="btn-secondary w-full py-2.5 text-xs sm:text-sm justify-center font-heading font-bold"
                  >
                    <Phone className="w-4 h-4 text-brand-primary" />
                    <span>Call Helpline ({BUSINESS_INFO.phone})</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
