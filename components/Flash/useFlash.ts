import { useCallback, useEffect } from 'react'
import { Props } from './types'

export const useFlash = ({ isActive, setIsActive }: Props) => {
  const toggleFlash = useCallback(
    () => setIsActive((prev: boolean) => !prev),
    [setIsActive]
  )

  useEffect(() => {
    if (!isActive) return
    const timer = setTimeout(() => {
      toggleFlash()
    }, 1000)

    return () => clearTimeout(timer)
  }, [isActive, toggleFlash])
  return { toggleFlash }
}
