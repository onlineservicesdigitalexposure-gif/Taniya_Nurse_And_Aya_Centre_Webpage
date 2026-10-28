import { useForm } from 'react-hook-form'
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  MessageCircle,
  Clock,
  AlertCircle,
  ShieldAlert,
} from 'lucide-react'
import { BUSINESS_INFO } from '../../data/navigation'

interface ContactFormInputs {
  fullName: string
  phoneNumber: string
  serviceType: string
  preferredSchedule: string
  notes?: string
}

const SERVICE_OPTIONS = [
  'Aya & Nursing Support',
  'Baby Care',
  'Cook Services',
  'Newborn Baby Care',
  'Home Care Assistance',
  'Male Attendants',
  'General Care Consultation',
]

const SCHEDULE_OPTIONS = [
  '12-Hour Day Shift',
  '12-Hour Night Shift',
  '24-Hour Live-in Care',
  'Flexible / Other',
]

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    defaultValues: {
      serviceType: SERVICE_OPTIONS[0],
      preferredSchedule: SCHEDULE_OPTIONS[0],
    },
  })

  const onSubmit = (data: ContactFormInputs) => {
    const lines = [
      'Hello Taniya Nurse & Aya Centre,',
      '',
      'I would like to enquire about your home care services:',
      `• *Name:* ${data.fullName.trim()}`,
      `• *Phone:* ${data.phoneNumber.trim()}`,
      `• *Service Required:* ${data.serviceType}`,
      `• *Preferred Schedule:* ${data.preferredSchedule}`,
    ]

    if (data.notes && data.notes.trim()) {
      lines.push(`• *Requirement Details:* ${data.notes.trim()}`)
    }

    lines.push('', 'Please let me know attendant availability and next steps.')

    const messageText = lines.join('\n')
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
      messageText
    )}`

    // Open WhatsApp in a new tab without storing or transmitting personal data
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding bg-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-4 lg:mb-6">
          <div className="inline-flex items-center gap-1.5 badge-green mb-3">
            <span>GET IN TOUCH</span>
          </div>

          <h2 id="contact-heading" className="heading-section mb-3">
            Contact &amp; Enquiry
          </h2>

          <p className="subheading-lead">
            Reach out by phone or submit your details to discuss your care requirements directly with our Chak Garia care coordinator.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Details, Phone Cards & Google Maps (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Phone Numbers Card */}
            <div className="p-6 rounded-card bg-brand-bg border border-brand-border shadow-soft-sm space-y-4 text-left">
              <h3 className="heading-card text-base sm:text-lg flex items-center gap-2">
                <Phone className="w-5 h-5 text-brand-primary" />
                <span>Call Us Directly</span>
              </h3>
              
              <div className="space-y-3">
                <div className="p-3.5 rounded-lg bg-white border border-brand-border-subtle flex items-center justify-between">
                  <div>
                    <span className="text-xs text-brand-muted block font-medium">
                      Primary Phone Line
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.rawPhone}`}
                      className="text-base sm:text-lg font-bold text-brand-deep hover:text-brand-primary transition-colors focus-visible:underline"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.rawPhone}`}
                    className="p-2 rounded-md bg-brand-primary-light text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
                    aria-label={`Call primary number ${BUSINESS_INFO.phone}`}
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>

                <div className="p-3.5 rounded-lg bg-white border border-brand-border-subtle flex items-center justify-between">
                  <div>
                    <span className="text-xs text-brand-muted block font-medium">
                      Alternate Phone Line
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.rawAlternatePhone}`}
                      className="text-base sm:text-lg font-bold text-brand-deep hover:text-brand-primary transition-colors focus-visible:underline"
                    >
                      {BUSINESS_INFO.alternatePhone}
                    </a>
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.rawAlternatePhone}`}
                    className="p-2 rounded-md bg-brand-primary-light text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
                    aria-label={`Call alternate number ${BUSINESS_INFO.alternatePhone}`}
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Email & Address Card */}
            <div className="p-6 rounded-card bg-brand-bg border border-brand-border shadow-soft-sm space-y-4 text-left">
              <div className="space-y-3 text-sm">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-brand-border flex items-center justify-center shrink-0 mt-0.5 text-brand-primary">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-brand-muted block font-medium">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-sm font-semibold text-brand-deep hover:text-brand-primary transition-colors break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 pt-2 border-t border-brand-border-subtle">
                  <div className="w-8 h-8 rounded-lg bg-white border border-brand-border flex items-center justify-center shrink-0 mt-0.5 text-brand-primary">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-brand-muted block font-medium">
                      Center Location
                    </span>
                    <address className="not-italic text-sm font-semibold text-brand-deep leading-relaxed">
                      {BUSINESS_INFO.address}
                    </address>
                    <div className="pt-1">
                      <a
                        href={BUSINESS_INFO.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:text-brand-primary-hover focus-visible:underline"
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Operating hours */}
                <div className="flex items-center gap-3 pt-2 border-t border-brand-border-subtle">
                  <div className="w-8 h-8 rounded-lg bg-white border border-brand-border flex items-center justify-center shrink-0 text-brand-primary">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-brand-muted block font-medium">
                      Enquiry &amp; Support Availability
                    </span>
                    <span className="text-xs font-semibold text-brand-deep">
                      {BUSINESS_INFO.hours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Visual Embed Frame */}
            <div className="rounded-card overflow-hidden border border-brand-border shadow-soft-sm bg-brand-bg">
              <iframe
                title="Taniya Nurse & Aya Centre Location Map in Chak Garia, Kolkata"
                src={BUSINESS_INFO.googleMapsEmbedUrl}
                width="100%"
                height="210"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-52 filter contrast-[1.02]"
              />
              <div className="p-3 bg-white border-t border-brand-border flex items-center justify-between text-xs">
                <span className="text-brand-muted">Near Baghajatin Railway Station</span>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-primary hover:underline inline-flex items-center gap-1"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Responsive Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-card bg-brand-bg border border-brand-border shadow-soft-sm text-left">
              <div className="mb-6 space-y-1">
                <h3 className="heading-card text-xl text-brand-deep">
                  Care Requirement Form
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Fill in your details below. Clicking <strong>"Open in WhatsApp"</strong> will format your enquiry and open WhatsApp directly so you can send your message with one click.
                </p>
              </div>

              {/* Informational Privacy & Submission Notice */}
              <div className="mb-6 p-3.5 rounded-lg bg-brand-primary-light/70 border border-brand-primary/20 flex items-start gap-2.5 text-xs text-brand-deep">
                <ShieldAlert className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Direct WhatsApp enquiry:</strong> This form does not store your information on any external server or database. Submitting launches WhatsApp on your device with your enquiry pre-filled. You can review and send the message directly.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold uppercase tracking-wider text-brand-deep mb-1.5"
                  >
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="e.g. Subir Mukherjee"
                    autoComplete="name"
                    aria-invalid={errors.fullName ? 'true' : 'false'}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    {...register('fullName', {
                      required: 'Please enter your full name',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters long',
                      },
                    })}
                    className={`w-full px-4 py-2.5 rounded-lg bg-white border text-sm text-brand-text placeholder-brand-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 ${
                      errors.fullName
                        ? 'border-red-500 focus-visible:ring-red-400'
                        : 'border-brand-border focus-visible:ring-brand-primary'
                    }`}
                  />
                  {errors.fullName && (
                    <p
                      id="fullName-error"
                      role="alert"
                      className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fullName.message}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-xs font-bold uppercase tracking-wider text-brand-deep mb-1.5"
                  >
                    Phone / Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-brand-muted">
                      +91
                    </span>
                    <input
                      id="phoneNumber"
                      type="tel"
                      placeholder="e.g. 9830012345"
                      autoComplete="tel-national"
                      maxLength={10}
                      aria-invalid={errors.phoneNumber ? 'true' : 'false'}
                      aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
                      {...register('phoneNumber', {
                        required: 'Please enter your 10-digit mobile number',
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: 'Please enter a valid 10-digit Indian mobile number',
                        },
                      })}
                      className={`w-full pl-12 pr-4 py-2.5 rounded-lg bg-white border text-sm text-brand-text placeholder-brand-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 ${
                        errors.phoneNumber
                          ? 'border-red-500 focus-visible:ring-red-400'
                          : 'border-brand-border focus-visible:ring-brand-primary'
                      }`}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p
                      id="phoneNumber-error"
                      role="alert"
                      className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.phoneNumber.message}</span>
                    </p>
                  )}
                </div>

                {/* Grid: Service Type & Preferred Schedule */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Type */}
                  <div>
                    <label
                      htmlFor="serviceType"
                      className="block text-xs font-bold uppercase tracking-wider text-brand-deep mb-1.5"
                    >
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="serviceType"
                      {...register('serviceType', {
                        required: 'Please select a service type',
                      })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-brand-border text-sm text-brand-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                    >
                      {SERVICE_OPTIONS.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Schedule */}
                  <div>
                    <label
                      htmlFor="preferredSchedule"
                      className="block text-xs font-bold uppercase tracking-wider text-brand-deep mb-1.5"
                    >
                      Preferred Schedule <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="preferredSchedule"
                      {...register('preferredSchedule', {
                        required: 'Please select preferred schedule',
                      })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-brand-border text-sm text-brand-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                    >
                      {SCHEDULE_OPTIONS.map((schedule) => (
                        <option key={schedule} value={schedule}>
                          {schedule}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Brief Message / Details (Optional) */}
                <div>
                  <label
                    htmlFor="notes"
                    className="block text-xs font-bold uppercase tracking-wider text-brand-deep mb-1.5"
                  >
                    Brief Requirement Details <span className="text-xs text-brand-muted font-normal lowercase">(optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="e.g. Patient needs walking assistance after hospital discharge in South Kolkata..."
                    {...register('notes')}
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-brand-border text-sm text-brand-text placeholder-brand-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary resize-y"
                  />
                  <p className="mt-1 text-[11px] text-brand-muted">
                    Do not submit sensitive clinical or confidential medical documents here.
                  </p>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-3.5 text-base justify-center font-bold tracking-wide shadow-soft-md cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                    <span>Open in WhatsApp &amp; Send Enquiry</span>
                  </button>
                  <p className="mt-2 text-center text-xs text-brand-muted">
                    WhatsApp will open with your pre-formatted enquiry. Simply tap <strong>Send</strong>.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
