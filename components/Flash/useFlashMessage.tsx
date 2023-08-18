'use client'

import { useCallback, useState } from 'react'
import { Flash } from '.'

export const useFlashMessage = (
  errorMessage = 'Something went wrong...',
  successMessage = 'Success!...'
) => {
  const [isFlashActive, setIsFlashActive] = useState(false)
  const [flashMessage, setFlashMessage] = useState<{
    message: string
    error: boolean
  }>()

  const handleFlashMessage = useCallback(
    (error = false) => {
      const message = error ? errorMessage : successMessage
      setFlashMessage({ message, error })
      setIsFlashActive(true)
    },
    [errorMessage, successMessage]
  )

  const FlashMessage = () => (
    <Flash
      flashInfo={flashMessage!}
      isActive={isFlashActive}
      setIsActive={setIsFlashActive}
    />
  )
  return { FlashMessage, handleFlashMessage }
}
