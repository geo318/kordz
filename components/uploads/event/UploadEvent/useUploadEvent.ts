import { objToFormData } from '@/utils'
import { revalidateTag } from 'next/cache'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const useUploadMusic = () => {
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
      router.push('/')

      revalidateTag('music-list')

      setIsLoading(false)
    } catch (e) {
      console.log(e)
    } finally {
    }
  }
  return { isLoading, handleSubmit }
}
