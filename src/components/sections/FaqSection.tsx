import { useState } from 'react'
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { FAQ_DATA, type FaqItem } from '../../data/faqs'
import { BUSINESS_INFO } from '../../data/navigation'

interface AccordionItemProps {
  faq: FaqItem
  isOpen: boolean
  onToggle: () => void
  index: number
}

function AccordionItem({ faq, isOpen, onToggle, index }: AccordionItemProps) {
  const shouldReduceMotion = useReducedMotion()
  const buttonId = `faq-btn-${faq.id}`
  const panelId = `faq-panel-${faq.id}`

  return (
    <div className="rounded-card border border-brand-border bg-white overflow-hidden shadow-soft-sm transition-colors duration-200 hover:border-brand-primary/40">
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full p-5 text-left flex items-center justify-between gap-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-inset"
      >
        <span className="flex items-center gap-3 text-base sm:text-lg font-bold font-heading text-brand-deep text-left">
          <span className="text-xs font-mono font-semibold text-brand-primary/60 shrink-0">
            {String(index + 1).padStart(2, '0')}.
          </span>
          <span className="leading-snug">{faq.question}</span>
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
            isOpen
              ? 'bg-brand-primary text-white rotate-180'
              : 'bg-brand-bg text-brand-muted'
          }`}
          aria-hidden="true"
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: { duration: shouldReduceMotion ? 0.01 : 0.28, ease: 'easeOut' },
                opacity: { duration: shouldReduceMotion ? 0.01 : 0.22, delay: 0.05 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: shouldReduceMotion ? 0.01 : 0.2, ease: 'easeIn' },
                opacity: { duration: 0.1 },
              },
            }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-brand-muted leading-relaxed border-t border-brand-border-subtle/70 pl-11">
              <p>{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FaqSection() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const whatsappGeneralUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${BUSINESS_INFO.whatsappDefaultMessage}`

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-padding bg-brand-bg border-b border-brand-border-subtle"
    >
      <div className="container-custom max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-4 lg:mb-6">
          <div className="inline-flex items-center gap-1.5 badge-gold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>

          <h2 id="faq-heading" className="heading-section mb-3">
            Frequently Asked Questions
          </h2>

          <p className="subheading-lead max-w-2xl mx-auto">
            Find clear answers to common questions about our home nursing, aya care, shift options, and consultation process in Kolkata.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Additional Questions Card */}
        <div className="mt-6 p-5 rounded-card bg-white border border-brand-border shadow-soft-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-bold text-brand-deep text-base">
              Have a question not listed here?
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted">
              Speak directly with our coordinator to get immediate answers regarding your patient's routine.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="btn-primary py-2 px-4 text-xs font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Helpline</span>
            </a>
            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary py-2 px-4 text-xs font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 text-brand-primary" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
