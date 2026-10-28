import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: string[], offset: number = 100): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '')

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (ticking) return
      ticking = true

      requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + offset
        const windowHeight = window.innerHeight
        const fullHeight = document.documentElement.scrollHeight

        // If at the very bottom of the page, activate the last section (e.g. contact)
        if (window.scrollY + windowHeight >= fullHeight - 60) {
          setActiveSection(sectionIds[sectionIds.length - 1])
          ticking = false
          return
        }

        // If at the top of the page, activate the first section
        if (window.scrollY < 120) {
          setActiveSection(sectionIds[0])
          ticking = false
          return
        }

        let currentActive = sectionIds[0]

        for (const id of sectionIds) {
          const element = document.getElementById(id)
          if (element) {
            const top = element.offsetTop
            if (scrollPosition >= top - 20) {
              currentActive = id
            }
          }
        }

        setActiveSection(currentActive)
        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionIds, offset])

  return activeSection
}
