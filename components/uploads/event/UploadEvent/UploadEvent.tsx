'use client'

import { Spinner } from '@/components'
import { useUploadMusic } from './useUploadEvent'
import { revalidateMusicData } from '@/actions'
import { UploadForm } from '../UploadForm'

export function UploadEvent() {
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
