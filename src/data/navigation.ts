export interface NavItem {
  name: string
  href: string
  id: string
}

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'Services', href: '#services', id: 'services' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Why Us', href: '#why-us', id: 'why-us' },
  { name: 'Nurse & Aya', href: '#nurse-aya', id: 'nurse-aya' },
  { name: 'FAQ', href: '#faq', id: 'faq' },
  { name: 'Contact', href: '#contact', id: 'contact' },
]

export const BUSINESS_INFO = {
  name: 'Taniya Nurse & Aya Centre',
  phone: '+91 8100440884',
  rawPhone: '+918100440884',
  alternatePhone: '+91 6291600864',
  rawAlternatePhone: '+916291600864',
  whatsappNumber: '918100440884',
  email: 'taniyanurseayacentre@gmail.com',
  address: '2009 Chak Garia, near Baghajatin Railway Station, Kolkata, West Bengal 700075',
  area: 'Chak Garia, Baghajatin',
  city: 'Kolkata',
  state: 'West Bengal',
  pincode: '700075',
  googleMapsUrl: 'https://www.google.com/maps?q=22.483087,88.3872179&z=17&hl=en',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=22.483087,88.3872179&z=15&output=embed',
  hours: '24 Hours / 7 Days Available',
  whatsappDefaultMessage: encodeURIComponent(
    'Hello Taniya Nurse & Aya Centre, I would like to inquire about your home nursing and aya attendant services.'
  ),
}

export const FOOTER_SERVICES = [
  { name: 'Trained Home Nurses (GNM / ANM)', href: '#services' },
  { name: 'Male & Female Patient Ayas', href: '#services' },
  { name: 'Elderly Bedridden Care', href: '#services' },
  { name: 'Newborn Baby & Mother Care', href: '#services' },
  { name: 'Post-Operative & Stroke Rehab Care', href: '#services' },
  { name: '24/7 Residential Care & Day/Night Shifts', href: '#services' },
]
