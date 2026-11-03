import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: string[], offset: number = 100): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '')

  useEffect(() => {
    let ticking = false
    let elements: (HTMLElement | null)[] = []

    const queryElements = () => {
      elements = sectionIds.map((id) => document.getElementById(id))
    }

    queryElements()

    const handleScroll = () => {
      if (ticking) return
      ticking = true

      requestAnimationFrame(() => {
        // Refresh element cache if any elements weren't yet mounted (e.g. lazy loaded sections)
        if (elements.some((el) => !el)) {
          queryElements()
        }

        const scrollY = window.scrollY
        const windowHeight = window.innerHeight
        const fullHeight = document.documentElement.scrollHeight

        // Bottom of page check - activate last section
        if (scrollY + windowHeight >= fullHeight - 60) {
          const lastId = sectionIds[sectionIds.length - 1]
          setActiveSection((prev) => (prev !== lastId ? lastId : prev))
          ticking = false
          return
        }

        // Top of page check - activate first section
        if (scrollY < 120) {
          const firstId = sectionIds[0]
          setActiveSection((prev) => (prev !== firstId ? firstId : prev))
          ticking = false
          return
        }

        const scrollPosition = scrollY + offset
        let currentActive = sectionIds[0]

        for (let i = 0; i < sectionIds.length; i++) {
          const el = elements[i]
          if (el && scrollPosition >= el.offsetTop - 20) {
            currentActive = sectionIds[i]
          }
        }

        setActiveSection((prev) => (prev !== currentActive ? currentActive : prev))
        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', queryElements, { passive: true })
    handleScroll() // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', queryElements)
    }
  }, [sectionIds, offset])

  return activeSection
}
