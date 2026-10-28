import { PhoneCall, MessageSquareQuote, CheckCircle2, ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { BUSINESS_INFO } from '../../data/navigation'

interface StepItem {
  step: string
  title: string
  description: string
  icon: typeof PhoneCall
}

const STEPS: StepItem[] = [
  {
    step: '01',
    title: 'Contact the Centre & Explain Requirements',
    description:
      'Reach out by phone or WhatsApp to share your situation, patient condition, daily care priorities, and required start date.',
    icon: PhoneCall,
  },
  {
    step: '02',
    title: 'Discuss Care Type, Schedule & Location',
    description:
      'We discuss suitable attendant profiles, required shift duration (day, night, or 24-hour live-in), home address in Kolkata, and special household needs.',
    icon: MessageSquareQuote,
  },
  {
    step: '03',
    title: 'Confirm Arrangement, Responsibilities & Charges',
    description:
      'Review and agree on caregiver duties, attendance expectations, and clear service charges in advance before the caregiver reports to your home.',
    icon: CheckCircle2,
  },
]

export function HowItWorksSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="section-padding bg-brand-bg border-b border-brand-border-subtle"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-4 lg:mb-6">
          <div className="inline-flex items-center gap-1.5 badge-gold mb-3">
            <span>SIMPLE &amp; CLEAR PROCESS</span>
          </div>

          <h2 id="how-it-works-heading" className="heading-section mb-3">
            How It Works
          </h2>

          <p className="subheading-lead">
            A straightforward three-step process to help you organize suitable home care support without confusion.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {STEPS.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                  ease: 'easeOut',
                }}
                className="relative bg-white rounded-card p-6 sm:p-7 border border-brand-border shadow-soft-sm hover:shadow-soft-md transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  {/* Step Number Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold text-brand-primary/25 font-mono">
                      {step.step}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-brand-primary-light text-brand-primary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="heading-card text-base sm:text-lg mb-2 text-brand-deep">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-brand-border-subtle text-xs text-brand-primary font-semibold">
                  Step {index + 1} of 3
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="mt-6 text-center">
          <a
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>Start Step 1: Call Coordinator ({BUSINESS_INFO.phone})</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
