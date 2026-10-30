import aya1 from '../assets/Aya/Aya1.jpeg'
import aya2 from '../assets/Aya/Aya2.jpeg'
import aya3 from '../assets/Aya/Aya3.jpeg'
import aya4 from '../assets/Aya/Aya4.jpeg'
import aya5 from '../assets/Aya/Aya5.jpeg'
import aya6 from '../assets/Aya/Aya6.jpeg'
import aya7 from '../assets/Aya/Aya7.jpeg'
import aya8 from '../assets/Aya/Aya8.jpeg'
import aya9 from '../assets/Aya/Aya9.jpeg'

export type AyaCategory = 'all' | 'patient-care' | 'baby-care' | 'team'

export interface AyaProfile {
  id: string
  name: string
  role: string
  category: 'patient-care' | 'baby-care' | 'team'
  categoryLabel: string
  image: string
  alt: string
  shift: string
  experience: string
  specialties: string[]
  description: string
  objectPosition?: string
  verification: string
  whatsappEnquiryMessage: string
}

export const AYA_PROFILES: AyaProfile[] = [
  {
    id: 'aya-1',
    name: 'Verified Patient Aya',
    role: 'Senior Patient Care Attendant',
    category: 'patient-care',
    categoryLabel: 'Patient & Bedside Care',
    image: aya1,
    alt: 'Dedicated female patient care aya in traditional Bengali attire ready for home patient care shifts in Kolkata',
    shift: '12h Day / 12h Night / 24h Live-in',
    experience: '8+ Years Care Experience',
    specialties: ['Bedside Patient Care', 'Daily Sponge Bath & Hygiene', 'Mobility & Bed Transfers', 'Medicine Schedule'],
    description: 'Specializes in compassionate bedside care for elderly and semi-bedridden patients, assisting with daily sponge baths, diaper changing, feeding support, and peaceful companionship.',
    objectPosition: 'center 15%',
    verification: '100% ID & Police Verified',
    whatsappEnquiryMessage: 'Hello Taniya Nurse & Aya Centre, I would like to inquire about Senior Patient Care Attendant (Profile #1) for home patient support.',
  },
  {
    id: 'aya-2',
    name: 'Elderly Care Attendant',
    role: 'Geriatric Bedside Specialist',
    category: 'patient-care',
    categoryLabel: 'Elderly & Senior Care',
    image: aya2,
    alt: 'Experienced female elderly care attendant in Kolkata providing gentle mobility and bedside support',
    shift: 'Day / Night / 24h Residential',
    experience: '6+ Years Care Experience',
    specialties: ['Senior Living Support', 'Gentle Walking Assistance', 'Wheelchair Support', 'Vital Signs Monitoring'],
    description: 'Patient-friendly attendant focused on senior citizen assistance, supporting walking, gentle stretching, meal times, and attentive night-time care.',
    objectPosition: 'center 20%',
    verification: '100% ID & Police Verified',
    whatsappEnquiryMessage: 'Hello Taniya Nurse & Aya Centre, I would like to inquire about Geriatric Bedside Attendant (Profile #2) for elderly care at home.',
  },
  {
    id: 'aya-3',
    name: 'Post-Op Recovery Aya',
    role: 'Post-Operative & Day Care Aya',
    category: 'patient-care',
    categoryLabel: 'Post-Op & Recovery',
    image: aya3,
    alt: 'Trained post-operative recovery home aya in Kolkata seated with care kit ready for patient discharge assistance',
    shift: '12h Day Shifts & 24h Residential',
    experience: '5+ Years Care Experience',
    specialties: ['Post-Hospital Recovery', 'Bed Rest Assistance', 'Nutritious Meal Feeding', 'Personal Hygiene'],
    description: 'Reliable caregiver assisting patients recovering from hospital discharge or surgery with routine daily hygiene, mobility exercises, and comfortable bed rest.',
    objectPosition: 'center 15%',
    verification: '100% ID & Police Verified',
    whatsappEnquiryMessage: 'Hello Taniya Nurse & Aya Centre, I would like to inquire about Post-Operative Recovery Attendant (Profile #3) for patient assistance.',
  },
  {
    id: 'aya-4',
    name: 'Mother & Baby Care Aya',
    role: 'Newborn & Mother Care Specialist',
    category: 'baby-care',
    categoryLabel: 'Newborn & Baby Care',
    image: aya4,
    alt: 'Experienced mother and baby care aya in Kolkata specializing in infant massage, feeding hygiene, and postnatal assistance',
    shift: 'Day Shifts, Night & 24h Live-in',
    experience: '7+ Years Care Experience',
    specialties: ['Newborn Sponge Bath', 'Gentle Baby Massage', 'Sterile Bottle Hygiene', 'Mother Postnatal Support'],
    description: 'Dedicated to helping new mothers with gentle infant sponge baths, traditional oil massage, swaddling, feeding hygiene, and mother comfort during postnatal recovery.',
    objectPosition: 'center 18%',
    verification: '100% ID & Police Verified',
    whatsappEnquiryMessage: 'Hello Taniya Nurse & Aya Centre, I would like to inquire about Mother & Baby Care Specialist (Profile #4) for infant support.',
  },
  {
    id: 'aya-5',
    name: 'Senior Bedridden Care Aya',
    role: 'Paralysis & Stroke Care Attendant',
    category: 'patient-care',
    categoryLabel: 'Intensive Patient Care',
    image: aya5,
    alt: 'Senior female aya attendant with extensive experience in bedridden and stroke patient bedside care in Kolkata',
    shift: '24-Hour Live-in & 12h Night Shifts',
    experience: '10+ Years Care Experience',
    specialties: ['Bedridden Patient Care', 'Bed Sore Prevention', 'Catheter Bag Care Assistance', '24/7 Overnight Presence'],
    description: 'High-experience senior attendant skilled in full bedridden patient care, regular position turning to avoid pressure sores, sponge bathing, and attentive night monitoring.',
    objectPosition: 'center 15%',
    verification: '100% ID & Police Verified',
    whatsappEnquiryMessage: 'Hello Taniya Nurse & Aya Centre, I would like to inquire about Senior Bedridden Care Attendant (Profile #5) for full residential care.',
  },
  {
    id: 'aya-6',
    name: 'Infant & Child Care Aya',
    role: 'Infant & Toddler Care Specialist',
    category: 'baby-care',
    categoryLabel: 'Newborn & Baby Care',
    image: aya6,
    alt: 'Young caring female infant and toddler caregiver in Kolkata ready for home baby care duties',
    shift: '12h Day Shifts & Full-Day Care',
    experience: '4+ Years Care Experience',
    specialties: ['Toddler Routine Care', 'Feeding & Playtime Hygiene', 'Diaper Changing', 'Safe Nursery Management'],
    description: 'Gentle, attentive aya assisting busy parents with toddler care, engaging playtime, diaper changes, hygienic meal preparation, and maintaining a calm nursery routine.',
    objectPosition: 'center 15%',
    verification: '100% ID & Police Verified',
    whatsappEnquiryMessage: 'Hello Taniya Nurse & Aya Centre, I would like to inquire about Infant & Toddler Care Attendant (Profile #6) for daytime child care.',
  },
  {
    id: 'aya-7',
    name: 'Female Patient Attendant',
    role: 'Compassionate Female Bedside Aya',
    category: 'patient-care',
    categoryLabel: 'Patient & Bedside Care',
    image: aya7,
    alt: 'Female patient bedside care attendant in Kolkata providing gentle assistance with daily living activities',
    shift: '12h Day / Night & 24h Live-in',
    experience: '6+ Years Care Experience',
    specialties: ['Female Patient Care', 'Restroom Assistance', 'Medication Reminders', 'Companionship & Diet'],
    description: 'Trustworthy attendant providing dignified assistance to female patients with bathroom visits, sponge baths, timely medication reminders, and warm conversation.',
    objectPosition: 'center 15%',
    verification: '100% ID & Police Verified',
    whatsappEnquiryMessage: 'Hello Taniya Nurse & Aya Centre, I would like to inquire about Female Patient Attendant (Profile #7) for home care assistance.',
  },
  {
    id: 'aya-8',
    name: 'Overnight & 24h Residential Aya',
    role: '24/7 Residential Care Attendant',
    category: 'patient-care',
    categoryLabel: 'Overnight & 24h Care',
    image: aya8,
    alt: 'Dedicated residential home aya in Kolkata available for 24-hour live-in and overnight bedside patient assistance',
    shift: '24-Hour Residential & Overnight',
    experience: '8+ Years Care Experience',
    specialties: ['24-Hour Live-in Care', 'Overnight Patient Monitoring', 'Comfort & Companionship', 'Daily Routine Support'],
    description: 'Experienced live-in attendant providing steady round-the-clock presence for households needing dependable care throughout both day and night shifts.',
    objectPosition: 'center 15%',
    verification: '100% ID & Police Verified',
    whatsappEnquiryMessage: 'Hello Taniya Nurse & Aya Centre, I would like to inquire about 24/7 Residential Care Attendant (Profile #8) for live-in home care.',
  },
  {
    id: 'aya-9',
    name: 'Male & Female Attendant Team',
    role: 'Taniya Caregiver & Aya Team',
    category: 'team',
    categoryLabel: 'Male & Female Attendants',
    image: aya9,
    alt: 'Taniya Nurse and Aya Centre caregiver team showing male attendant and female ayas at the Baghajatin Kolkata centre ready for deployment',
    shift: 'Immediate Deployment Across Kolkata',
    experience: 'Full Verified Care Network',
    specialties: ['Male & Female Attendants', 'Emergency Immediate Booking', 'Full South Kolkata Coverage', 'Replacement Guarantee'],
    description: 'Our core team of male and female home caregivers coordinated directly from our Chak Garia centre near Baghajatin Railway Station, ready for rapid assignment.',
    objectPosition: 'center 20%',
    verification: 'Govt. Regd. Centre • 100% Verified',
    whatsappEnquiryMessage: 'Hello Taniya Nurse & Aya Centre, I would like to consult with your care team regarding immediate caregiver deployment.',
  },
]

export const AYA_CATEGORIES = [
  { id: 'all', label: 'All Attendants & Nurses', count: 9 },
  { id: 'patient-care', label: 'Patient & Senior Care', count: 6 },
  { id: 'baby-care', label: 'Baby & Mother Care', count: 2 },
  { id: 'team', label: 'Care Team & Male Attendants', count: 1 },
] as const
