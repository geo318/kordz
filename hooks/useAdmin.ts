import { objToFormData } from '@/utils'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const useAdmin = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const handleSubmit = async (data: FormData) => {
    const formData = objToFormData(data)
    setIsLoading(true)
    try {
      await fetch('/api/music', {
        method: 'POST',
        body: formData,
      })
      // router.push('/')
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }
  return { isLoading, handleSubmit }
}
