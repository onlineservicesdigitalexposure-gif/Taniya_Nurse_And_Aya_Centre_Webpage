export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'services-provided',
    question: 'What services does Taniya Nurse & Aya Centre provide?',
    answer:
      'We coordinate a wide range of home care services across Kolkata, including bedside aya attendants for bedridden or elderly family members, nursing support for clinical procedures, infant and growing child care, specialized newborn baby and mother postnatal care, home cook services, and dedicated male attendants.',
  },
  {
    id: 'newborn-baby-care',
    question: 'Can I enquire about newborn baby care?',
    answer:
      'Yes, absolutely. We provide experienced baby care attendants to assist new mothers with gentle newborn massage, infant sponge baths, sterile bottle hygiene, burping, swaddling, and comforting night-time sleep assistance during the postpartum recovery period.',
  },
  {
    id: 'male-attendants',
    question: 'Can I request a male attendant?',
    answer:
      'Yes. We arrange capable male attendants suited for male patients who need physical support with mobility, wheelchair and bed transfers, personal hygiene, sponge bathing, and overnight bedside companionship.',
  },
  {
    id: 'service-charges',
    question: 'How do I enquire about service charges?',
    answer:
      'Service charges depend on the type of service (aya, nursing support, baby care, or cooking), the shift duration (12-hour day, 12-hour night, or 24-hour live-in care), and the patient’s condition. You can call us directly at +91 8100440884 or message us on WhatsApp for transparent, clear rate details before confirming any arrangement.',
  },
  {
    id: 'specific-care-requirements',
    question: 'Can I discuss specific care requirements?',
    answer:
      'Yes. We actively encourage families to discuss individual patient needs, daily routines, mobility assistance levels, medication schedules, and dietary preferences directly with our care coordinator during your consultation.',
  },
  {
    id: 'contact-the-centre',
    question: 'How can I contact the centre?',
    answer:
      'You can reach us directly by calling +91 8100440884 or our alternate line +91 6291600864. You can also message us instantly on WhatsApp, email taniyanurseayacentre@gmail.com, or visit our centre at 2009 Chak Garia near Baghajatin Railway Station, Kolkata 700075.',
  },
  {
    id: 'confirm-availability-timings',
    question: 'How can I confirm availability and service timings?',
    answer:
      'Simply call or send a WhatsApp enquiry mentioning your preferred start date, required shift timing (12-hour day, 12-hour night, or 24-hour residential care), and your location in Kolkata. Our care coordinator will promptly confirm caregiver availability and discuss the next steps.',
  },
]
