import { Phone, MessageCircle, Sparkles } from 'lucide-react'
import { SERVICES_DATA } from '../../data/services'
import { ServiceCard } from './ServiceCard'
import { BUSINESS_INFO } from '../../data/navigation'
import centreBannerImg from '../../assets/তানিয়া নার্স ও আয়া সেন্টার banner.png'

export function ServicesSection() {
  const generalWhatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${BUSINESS_INFO.whatsappDefaultMessage}`

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding bg-white border-b border-brand-border-subtle"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-4 lg:mb-6">
          <div className="inline-flex items-center gap-1.5 badge-green mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
            <span>OUR CARE SERVICES</span>
          </div>

          <h2 id="services-heading" className="heading-section mb-3">
            Tailored Care for Every Family Member
          </h2>

          <p className="subheading-lead max-w-2xl mx-auto">
            From attentive personal care and baby assistance to home cooking and patient mobility, explore our dedicated services designed for day-to-day family peace of mind in Kolkata.
          </p>

          <p className="text-xs text-brand-muted mt-2">
            Specific caregiver qualifications, duties, and shift hours are reviewed and aligned with your family during initial enquiry.
          </p>
        </div>

        {/* 6 Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Official Centre Signboard / Banner Card */}
        <div className="mt-8 lg:mt-10">
          <div className="relative rounded-2xl overflow-hidden border border-brand-border bg-white shadow-soft-lg group">
            {/* Clickable banner image */}
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="block relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              aria-label={`Official Signboard of Taniya Nurse & Aya Centre - Call ${BUSINESS_INFO.phone}`}
            >
              <img
                src={centreBannerImg}
                alt="তানিয়া নার্স এণ্ড আয়া সেন্টার (Govt. Regd.) - Official Signboard of Taniya Nurse & Aya Centre, 2009 Chak Garia, near Baghajatin Railway Station, Kolkata 700075. Phone: 8100440884 / 6291600864"
                width="2166"
                height="726"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.01]"
              />
            </a>

            {/* Quick Action Contact Bar */}
            <div className="p-3.5 sm:p-4 bg-white border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-muted">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                <span className="font-semibold text-brand-deep">
                  Official Registered Centre Signboard
                </span>
                <span className="hidden sm:inline text-brand-muted/70">&bull;</span>
                <span className="hidden sm:inline">
                  2009 Chak Garia, near Baghajatin Railway Station, Kolkata 700075
                </span>
              </div>

              <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto justify-center">
                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="btn-primary py-2 px-4 text-xs font-heading font-bold"
                  aria-label={`Call ${BUSINESS_INFO.phone}`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: {BUSINESS_INFO.phone}</span>
                </a>
                <a
                  href={generalWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary py-2 px-4 text-xs font-heading font-bold"
                  aria-label="WhatsApp enquiry"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-brand-primary" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
