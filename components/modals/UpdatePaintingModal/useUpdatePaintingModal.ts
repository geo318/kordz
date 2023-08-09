'use client'

import { Props } from './type'
import { useState } from 'react'

export const useUpdatePaintingModal = ({
  defaults,
  toggleModal,
  refetch,
  handleFlashMessage,
}: Props) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const toggleDeleteDialog = () => setIsDeleting((prev) => !prev)

  const handleDelete = async () => {
    try {
      // const res = await deleteImage(defaults._id)
      // if (res.status === 200) {
      //   handleFlashMessage()
      //   toggleDeleteDialog()
      //   toggleModal()
      //   refetch()
      // }
    } catch {
      handleFlashMessage(!!'error')
    }
  }

  const handleSubmit = async (data: Partial<any>) => {
    try {
      // const res = await updateImageData(data, defaults._id)
      // if (res.status === 201) {
      //   handleFlashMessage()
      //   toggleModal()
      //   refetch()
      // }
    } catch {
      handleFlashMessage(!!'error')
    }
  }

  return {
    handleSubmit,
    isDeleting,
    toggleDeleteDialog,
    handleDelete,
  }
}
