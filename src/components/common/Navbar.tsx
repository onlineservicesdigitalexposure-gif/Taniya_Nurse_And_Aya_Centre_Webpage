import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import brandLogo from '../../assets/Taniya Nurse & Aya Center Logo.png'
import { NAV_ITEMS, BUSINESS_INFO } from '../../data/navigation'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useScrollSpy(SECTION_IDS, 120)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const targetElement = document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', href)
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft-sm border-b border-brand-border py-2 sm:py-2.5'
          : 'bg-white border-b border-brand-border-subtle py-2.5 sm:py-3'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo - Big, Bold & Highly Visible */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#home')
          }}
          className="flex items-center group focus-visible:rounded-lg py-0.5 shrink-0"
          aria-label="Taniya Nurse & Aya Centre - Return to Home"
        >
          <img
            src={brandLogo}
            alt="Taniya Nurse & Aya Centre"
            width="320"
            height="128"
            className="h-14 sm:h-16 md:h-20 w-auto max-w-[220px] sm:max-w-[280px] md:max-w-[340px] object-contain drop-shadow-sm transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className={`relative px-3 py-1.5 text-base font-bold font-heading tracking-tight rounded-md transition-colors ${
                  isActive
                    ? 'text-brand-primary'
                    : 'text-brand-text hover:text-brand-primary hover:bg-brand-bg'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        {/* Desktop Right CTA: Call Now */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="btn-primary py-2.5 px-4 text-sm font-heading font-bold tracking-wide shadow-soft-sm"
            aria-label={`Call Taniya Nurse and Aya Centre at ${BUSINESS_INFO.phone}`}
          >
            <Phone className="w-4 h-4 text-white animate-bounce" />
            <span>Call Now</span>
            <span className="text-xs font-sans font-normal opacity-90 hidden xl:inline">
              ({BUSINESS_INFO.phone})
            </span>
          </a>
        </div>

        {/* Mobile Header Buttons (Call + Hamburger) */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="p-2 rounded-lg bg-brand-primary-light text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
            aria-label="Call Now"
          >
            <Phone className="w-5 h-5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-brand-deep hover:bg-brand-bg transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[72px] sm:top-[82px] bg-brand-deep/50 backdrop-blur-xs z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Slide Down */}
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-full left-0 right-0 bg-white border-b border-brand-border shadow-soft-lg z-50 lg:hidden max-h-[calc(100vh-70px)] overflow-y-auto"
            >
              <div className="container-custom py-4 space-y-2">
                <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id
                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick(item.href)
                        }}
                        className={`px-4 py-3 rounded-lg text-lg font-bold font-heading flex items-center justify-between transition-colors tracking-tight ${
                          isActive
                            ? 'bg-brand-primary-light text-brand-primary'
                            : 'text-brand-text hover:bg-brand-bg hover:text-brand-primary'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span>{item.name}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-brand-primary" />
                        )}
                      </a>
                    )
                  })}
                </nav>

                <div className="pt-3 border-t border-brand-border space-y-2.5">
                  <div className="text-xs text-brand-muted px-2">
                    Emergency Home Care Available 24/7 in Kolkata
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.rawPhone}`}
                    className="btn-primary w-full py-3 justify-center text-base font-heading font-bold tracking-wide"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Phone className="w-4 h-4 text-white" />
                    <span>Call Now ({BUSINESS_INFO.phone})</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
