import { MusicApi } from '@/types'
import { objToFormData } from '@/utils'
import { useState } from 'react'
import { MusicModalProps } from './types'
import { revalidateMusicData } from '@/actions'
import { useFlashMessage } from '@/components'

export const useMusicModal = ({
  defaults,
  isModalOpen,
  setIsModalOpen,
}: MusicModalProps) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const toggleModal = () => setIsModalOpen((prev) => !prev)

  const toggleDeleteDialog = () => setIsDeleting((prev) => !prev)

  const [isLoading, setIsLoading] = useState(false)

  const { FlashMessage, handleFlashMessage } = useFlashMessage()

  const handleSubmit = async (data: FormData) => {
    const formData = objToFormData(data)
    setIsLoading(true)
    try {
      await fetch(`/api/music?id=${defaults.id}`, {
        method: 'PATCH',
        body: formData,
      })
      handleFlashMessage()
      revalidateMusicData()
      setIsLoading(false)
    } catch (e) {
      handleFlashMessage(!!'error')
    }
  }

  const handleDelete = async () => {
    try {
      await fetch(`/api/music?id=${defaults.id}`, {
        method: 'DELETE',
      })
      handleFlashMessage()
      revalidateMusicData()
      toggleDeleteDialog()
      toggleModal()
    } catch {
      handleFlashMessage(!!'error')
    }
  }
  return {
    isLoading,
    handleSubmit,
    toggleDeleteDialog,
    isDeleting,
    handleDelete,
    toggleModal,
    isModalOpen,
    FlashMessage,
  }
}
