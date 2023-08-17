'use client'

import { Spinner, UploadMusicForm } from '@/components'
import { useUploadMusic } from './useUploadMusic'
import { revalidateMusicData } from '@/actions'

export function UploadMusic() {
  const { isLoading, handleSubmit } = useUploadMusic()

  return (
    <>
      {!isLoading ? (
        <UploadMusicForm
          handleSubmit={handleSubmit}
          revalidate={revalidateMusicData}
        />
      ) : (
        <Spinner />
      )}
    </>
  )
}
