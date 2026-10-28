import type { LucideIcon } from 'lucide-react'
import {
  HeartPulse,
  Baby,
  UtensilsCrossed,
  Sparkles,
  Home,
  UserCheck,
} from 'lucide-react'

import ayaNursingImg from '../assets/services/aya-nursing.jpg'
import babyCareImg from '../assets/services/baby-care.jpg'
import cookServicesImg from '../assets/services/cook-services.jpg'
import newbornCareImg from '../assets/services/newborn-care.jpg'
import homeCareImg from '../assets/services/home-care.jpg'
import maleAttendantImg from '../assets/services/male-attendant.jpg'

export interface ServiceItem {
  id: string
  title: string
  shortTitle: string
  description: string
  dutyClarification: string
  icon: LucideIcon
  image: string
  imageAlt: string
  whatsappMessage: string
  shiftOptions: string
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'aya-nursing-support',
    title: 'Aya & Nursing Support',
    shortTitle: 'Aya & Nursing',
    description:
      'Attentive bedside care for patients requiring personal hygiene assistance, mobility support, and daily comfort. Separate nursing support is available upon request for specific clinical tasks; exact qualifications and duties are discussed and confirmed during initial enquiry.',
    dutyClarification:
      'Aya attendants assist with personal daily care; clinical nursing duties require qualified nurses, confirmed during enquiry.',
    icon: HeartPulse,
    image: ayaNursingImg,
    imageAlt: 'A compassionate Indian female nurse gently checking the pulse of an elderly Indian grandmother at home in Kolkata',
    whatsappMessage:
      'Hello Taniya Nurse & Aya Centre, I would like to enquire about your Aya & Nursing Support service. Please let me know caregiver availability, shift options, and duty arrangements.',
    shiftOptions: '12-Hour Day / Night & 24-Hour Live-in',
  },
  {
    id: 'baby-care',
    title: 'Baby Care',
    shortTitle: 'Baby Care',
    description:
      'Compassionate, patient attendants for infants and growing children. Assistance includes bottle feeding, diaper changes, engaging playtime, bath assistance, and maintaining a hygienic, calm nursery routine at home.',
    dutyClarification:
      'Caregiver experience and daily household routine preferences are confirmed upon enquiry.',
    icon: Baby,
    image: babyCareImg,
    imageAlt: 'A caring Indian female aya warmly playing with a happy Indian toddler in a home nursery',
    whatsappMessage:
      'Hello Taniya Nurse & Aya Centre, I would like to enquire about your Baby Care service. Please share details regarding caregiver suitability and shift arrangements.',
    shiftOptions: 'Day Shifts & Full-Day Care',
  },
  {
    id: 'cook-services',
    title: 'Cook Services',
    shortTitle: 'Cook Services',
    description:
      'Reliable home cooks preparing freshly made vegetarian and non-vegetarian meals tailored to your family preferences, patient dietary restrictions, and traditional home-style cooking tastes.',
    dutyClarification:
      'Specific dietary restrictions, spice levels, and meal timings are discussed during enquiry.',
    icon: UtensilsCrossed,
    image: cookServicesImg,
    imageAlt: 'A smiling Indian female home cook rolling fresh rotis in a clean Indian home kitchen',
    whatsappMessage:
      'Hello Taniya Nurse & Aya Centre, I would like to enquire about your Cook Services for home meals. Please share timing, dietary options, and availability.',
    shiftOptions: 'Morning / Evening Shifts & Full Day',
  },
  {
    id: 'newborn-baby-care',
    title: 'Newborn Baby Care',
    shortTitle: 'Newborn Care',
    description:
      'Specialized care assisting new mothers during the critical postnatal recovery period. Support includes infant sponge bath, gentle massage, sterile bottle hygiene, burping, swaddling, and mother comfort assistance.',
    dutyClarification:
      'Attendants provide non-medical post-delivery comfort; pediatric instructions are followed as directed by your doctor.',
    icon: Sparkles,
    image: newbornCareImg,
    imageAlt: 'A gentle Indian female caregiver cradling a swaddled newborn baby beside a resting mother at home',
    whatsappMessage:
      'Hello Taniya Nurse & Aya Centre, I would like to enquire about your Newborn Baby Care support for mother and infant. Please share details and shift options.',
    shiftOptions: 'Day / Night Shifts & 24-Hour Attendant',
  },
  {
    id: 'home-care-assistance',
    title: 'Home Care Assistance',
    shortTitle: 'Home Care',
    description:
      'Practical everyday living assistance for senior family members and recovering individuals. Attendants support safe walking, timely meal reminders, transfer between bed and chair, and gentle daily companionship.',
    dutyClarification:
      'Non-medical daily living and companionship support; tailored to family requirements.',
    icon: Home,
    image: homeCareImg,
    imageAlt: 'A friendly Indian female attendant walking and supporting an elderly Indian grandfather at home',
    whatsappMessage:
      'Hello Taniya Nurse & Aya Centre, I would like to enquire about your Home Care Assistance for daily living and elderly comfort. Please share details.',
    shiftOptions: 'Flexible 12-Hour & 24-Hour Options',
  },
  {
    id: 'male-attendants',
    title: 'Male Attendants',
    shortTitle: 'Male Attendants',
    description:
      'Reliable male attendants to support male patients with mobility, wheelchair transfers, personal hygiene, sponge baths, and overnight bedside companionship for bedridden or elderly family members.',
    dutyClarification:
      'Caregiver physical suitability, patient mobility needs, and shift hours are aligned during enquiry.',
    icon: UserCheck,
    image: maleAttendantImg,
    imageAlt: 'A dependable Indian male attendant in healthcare uniform assisting an elderly Indian gentleman with mobility support',
    whatsappMessage:
      'Hello Taniya Nurse & Aya Centre, I would like to enquire about your Male Attendants service for patient mobility and support. Please share details.',
    shiftOptions: '12-Hour Day / Night & 24-Hour Live-in',
  },
]
