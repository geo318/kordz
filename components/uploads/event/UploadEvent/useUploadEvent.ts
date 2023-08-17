import { objToFormData } from '@/utils'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const useUploadEvent = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (data: FormData) => {
    const formData = objToFormData(data)

    setIsLoading(true)
    try {
      let x = await fetch('/api/event', {
        method: 'POST',
        body: formData,
      })
      // router.push('/')
      console.log(x)

      setIsLoading(false)
    } catch (e) {
      console.log(e)
    }
  }
  return { isLoading, handleSubmit }
}
