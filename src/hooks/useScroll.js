import { useEffect, useState } from 'react'

export function useScroll(sectionIds = []) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? 'home')
  const [scrolled, setScrolled] = useState(false)
  const sectionKey = sectionIds.join('|')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)

      const candidates = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean)

      const current = candidates.find((section) => {
        const rect = section.getBoundingClientRect()
        return rect.top <= 160 && rect.bottom >= 160
      })

      if (current) {
        setActiveSection(current.id)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionKey])

  return { activeSection, scrolled }
}
