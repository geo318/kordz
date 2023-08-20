'use client'

import { useEffect, useRef, useState } from 'react'

export const useObserver = <T extends Element>({
  animationStart,
  animationEnd,
}: {
  animationStart?: string[]
  animationEnd?: string[]
} = {}) => {
  const ref = useRef<T>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(([entry]) => {
      if (hasAnimated) return

      if (entry.isIntersecting) {
        entry.target.classList.add(
          ...(animationStart || ['translate-x-0', 'opacity-100'])
        )
        entry.target.classList.remove(
          ...(animationEnd || ['-translate-x-full', 'opacity-0'])
        )
        setHasAnimated(true)
      } else {
        entry.target.classList.add('-translate-x-full', 'opacity-0')
        entry.target.classList.remove('translate-x-0', 'opacity-100')
        setHasAnimated(false)
      }
    })

    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [hasAnimated])
  return { ref }
}
