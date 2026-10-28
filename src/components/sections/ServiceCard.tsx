import { MessageCircle, Clock, Info } from 'lucide-react'
import type { ServiceItem } from '../../data/services'
import { BUSINESS_INFO } from '../../data/navigation'

interface ServiceCardProps {
  service: ServiceItem
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    service.whatsappMessage
  )}`

  return (
    <article
      className="group flex flex-col h-full bg-white rounded-card border border-brand-border hover:border-brand-primary/50 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 overflow-hidden hover:-translate-y-1"
      aria-labelledby={`service-title-${service.id}`}
    >
      {/* Visual Image Header */}
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-bg">
        <img
          src={service.image}
          alt={service.imageAlt}
          width="600"
          height="375"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-deep/60 via-transparent to-transparent opacity-80"
          aria-hidden="true"
        />

        {/* Floating Icon Emblem */}
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-white text-brand-primary shadow-soft-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <Icon className="w-5 h-5" />
          </div>
          <span className="badge-gold text-[11px] py-1 px-2.5 font-semibold backdrop-blur-xs">
            {service.shortTitle}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-3">
          {/* Title */}
          <h3
            id={`service-title-${service.id}`}
            className="heading-card text-lg sm:text-xl text-brand-deep group-hover:text-brand-primary transition-colors"
          >
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-brand-muted leading-relaxed">
            {service.description}
          </p>

          {/* Duty & Qualifications Clarification Notice */}
          <div className="flex items-start gap-2 p-2.5 rounded-lg bg-brand-bg/80 border border-brand-border-subtle text-xs text-brand-muted/90">
            <Info className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
            <span className="leading-snug">{service.dutyClarification}</span>
          </div>
        </div>

        {/* Card Footer: Shift details & Preselected WhatsApp Enquire Now action */}
        <div className="pt-3 border-t border-brand-border-subtle flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs text-brand-muted">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-brand-primary" />
              <span>Shift Support:</span>
            </span>
            <span className="font-semibold text-brand-deep">{service.shiftOptions}</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-btn text-sm font-semibold text-white bg-brand-primary hover:bg-brand-primary-hover shadow-soft-sm transition-all duration-200 hover:shadow-soft-md focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            aria-label={`Enquire on WhatsApp about ${service.title}`}
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Enquire Now</span>
          </a>
        </div>
      </div>
    </article>
  )
}
