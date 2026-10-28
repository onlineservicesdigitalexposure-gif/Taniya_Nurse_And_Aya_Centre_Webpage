import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUp } from 'lucide-react'
import brandLogo from '../../assets/Taniya Nurse & Aya Center Logo.png'
import { NAV_ITEMS, BUSINESS_INFO, FOOTER_SERVICES } from '../../data/navigation'

export function Footer() {


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLinkClick = (href: string) => {
    const targetElement = document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', href)
    }
  }

  return (
    <footer className="bg-brand-deep text-white border-t border-brand-deep-dark relative z-10" aria-label="Site Footer">
      {/* Top emergency trust strip */}
      <div className="border-b border-white/10 bg-black/15 py-3">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/80">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-accent shrink-0" />
            <span>Attentive Home Care &bull; Dedicated Home Nursing &amp; Aya Centre in South Kolkata</span>
          </div>
          <div className="flex items-center gap-2 text-brand-accent font-medium">
            <Clock className="w-3.5 h-3.5" />
            <span>24 Hours / 7 Days On-Call Support</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Brand & Description (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Real Brand Logo - Big, Bold & Highly Visible */}
            <div className="inline-block p-3 sm:p-4 bg-white rounded-2xl shadow-soft-md">
              <img
                src={brandLogo}
                alt="Taniya Nurse & Aya Centre"
                width="320"
                height="128"
                className="h-16 sm:h-20 md:h-24 w-auto max-w-[260px] sm:max-w-[320px] object-contain drop-shadow-sm"
              />
            </div>
            
            <p className="text-sm text-white/75 leading-relaxed">
              We provide compassionate, verified, and professional home nursing, elderly patient care, ayah attendants, and newborn baby care services across Chak Garia, Baghajatin, and all of Kolkata.
            </p>

            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-primary hover:bg-brand-primary-hover text-white text-sm font-semibold transition-colors shadow-soft-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Emergency Call: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-accent">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleLinkClick(item.href)
                    }}
                    className="text-white/75 hover:text-brand-accent transition-colors block py-0.5"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Care Services (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-accent">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_SERVICES.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleLinkClick(service.href)
                    }}
                    className="text-white/75 hover:text-brand-accent transition-colors block py-0.5"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-accent">
              Contact &amp; Location
            </h3>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {BUSINESS_INFO.address}
                </address>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-accent shrink-0 mt-1" />
                <div className="flex flex-col gap-0.5">
                  <a
                    href={`tel:${BUSINESS_INFO.rawPhone}`}
                    className="hover:text-brand-accent transition-colors font-medium text-white"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.rawAlternatePhone}`}
                    className="hover:text-brand-accent transition-colors text-xs text-white/80"
                  >
                    Alt: {BUSINESS_INFO.alternatePhone}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-brand-accent transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-brand-accent shrink-0" />
                <span>Operating Hours: 24/7 Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Back to Top */}
      <div className="border-t border-white/10 py-4 bg-black/20 text-xs text-white/70">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            Design &amp; Developed By{' '}
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent hover:underline font-semibold transition-colors"
            >
              Digital Exposure Online Services
            </a>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:ring-2 focus-visible:ring-brand-accent"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
