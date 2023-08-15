'use client'

import { Spinner, UploadForm } from '@/components'
import { useUploadMusic } from './useUploadMusic'
import { revalidateMusicData } from '@/ actions'

export function UploadMusic() {
  const { isLoading, handleSubmit } = useUploadMusic()
  return (
    <>
      {!isLoading ? (
        <UploadForm
          handleSubmit={handleSubmit}
          revalidate={revalidateMusicData}
        />
      ) : (
        <Spinner />
      )}
    </>
  )
}
