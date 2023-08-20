import { useState, useEffect } from 'react'

export const useHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // const initialScrollHeight = document.body.scrollHeight

    const handleScroll = () => {

      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { isScrolled }
}
