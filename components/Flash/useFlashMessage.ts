'use client'

import { useState } from 'react'

export const useFlashMessage = (
  errorMessage = 'Something went wrong...',
  successMessage = 'Success!...'
) => {
  const [isFlashActive, setIsFlashActive] = useState(false)
  const [flashMessage, setFlashMessage] = useState<{
    message: string
    error: boolean
  }>()

  const handleFlashMessage = (error = false) => {
    const message = error ? errorMessage : successMessage
    setFlashMessage({ message, error })
    setIsFlashActive(true)
  }

  return { isFlashActive, setIsFlashActive, flashMessage, handleFlashMessage }
}
