import { Phone, MessageCircle } from 'lucide-react'
import { BUSINESS_INFO } from '../../data/navigation'

export function FloatingActions() {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${BUSINESS_INFO.whatsappDefaultMessage}`

  return (
    <aside
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none"
      aria-label="Quick contact actions"
    >
      {/* Direct Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.rawPhone}`}
        className="pointer-events-auto flex items-center gap-2 group bg-brand-deep hover:bg-brand-deep-dark text-white p-3 sm:px-4 sm:py-2.5 rounded-full shadow-soft-lg hover:shadow-soft-xl transition-all duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
        aria-label={`Direct Call: ${BUSINESS_INFO.phone}`}
      >
        <span className="w-5 h-5 flex items-center justify-center shrink-0">
          <Phone className="w-4 h-4 text-brand-accent" />
        </span>
        <span className="hidden sm:inline text-xs font-semibold tracking-wide pr-1">
          Call 24/7
        </span>
      </a>

      {/* WhatsApp Enquiry Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2 group bg-[#25D366] hover:bg-[#20BD5A] text-white p-3 sm:px-4 sm:py-2.5 rounded-full shadow-soft-lg hover:shadow-soft-xl transition-all duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 relative"
        aria-label="Chat with Taniya Nurse & Aya Centre on WhatsApp"
      >
        {/* Subtle Ping indicator */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>

        <span className="w-5 h-5 flex items-center justify-center shrink-0">
          <MessageCircle className="w-5 h-5 text-white" />
        </span>
        <span className="hidden sm:inline text-xs font-semibold tracking-wide pr-1">
          WhatsApp Us
        </span>
      </a>
    </aside>
  )
}
