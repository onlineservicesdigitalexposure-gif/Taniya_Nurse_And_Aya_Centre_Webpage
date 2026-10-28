import { MessageSquareHeart, Layers, PhoneCall, MapPin, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

interface PrincipleCard {
  id: string
  title: string
  description: string
  icon: typeof MessageSquareHeart
}

const PRINCIPLES: PrincipleCard[] = [
  {
    id: 'care-needs-discussion',
    title: 'Care Needs Discussion',
    description:
      "Every family's circumstances are unique. We take time to listen to your patient's mobility, daily habits, and specific household expectations before suggesting attendant options.",
    icon: MessageSquareHeart,
  },
  {
    id: 'service-options',
    title: 'Service Options for Different Needs',
    description:
      'Whether you require daytime assistance, overnight bedside presence, 24-hour live-in attendance, or home cooking, we organize flexible arrangements matched to your family schedule.',
    icon: Layers,
  },
  {
    id: 'direct-communication',
    title: 'Direct Enquiry & Communication',
    description:
      'Speak directly with our care coordinator over phone or WhatsApp to clarify caregiver duties, answer questions openly, and establish clear service expectations.',
    icon: PhoneCall,
  },
  {
    id: 'local-contact',
    title: 'Convenient Local Contact',
    description:
      'Located in Chak Garia near Baghajatin Railway Station, Kolkata 700075, providing an easily accessible point of contact for families throughout South Kolkata.',
    icon: MapPin,
  },
]

export function WhyChooseUsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="section-padding bg-white border-b border-brand-border-subtle"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-4 lg:mb-6">
          <div className="inline-flex items-center gap-1.5 badge-green mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
            <span>OUR SERVICE PRINCIPLES</span>
          </div>

          <h2 id="why-us-heading" className="heading-section mb-3">
            Why Choose Taniya Nurse &amp; Aya Centre
          </h2>

          <p className="subheading-lead">
            We approach home care with open communication, practical flexibility, and respect for every household's individual needs.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRINCIPLES.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                  ease: 'easeOut',
                }}
                className="group flex flex-col justify-between p-6 rounded-card bg-brand-bg border border-brand-border hover:border-brand-primary/50 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 hover:-translate-y-1 text-left"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white text-brand-primary border border-brand-border flex items-center justify-center shadow-soft-sm group-hover:scale-110 group-hover:text-brand-primary group-hover:border-brand-primary transition-all duration-200">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="heading-card text-lg text-brand-deep group-hover:text-brand-primary transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-brand-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-brand-border-subtle text-xs font-semibold text-brand-primary flex items-center gap-1">
                  <span>Service Principle {index + 1}</span>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
