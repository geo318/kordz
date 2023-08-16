import { useState } from 'react'

export const useSwitchForms = () => {
  const [activeForm, setActiveForm] = useState<'music' | 'event'>('music')

  const toggleForm = (form: typeof activeForm) => {
    return () => {
      switch (form) {
        case 'music':
          setActiveForm('music')
          break
        case 'event':
          setActiveForm('event')
      }
    }
  }

  return { activeForm, toggleForm }
}
