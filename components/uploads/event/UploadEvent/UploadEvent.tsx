'use client'

import { Spinner } from '@/components'
import { useUploadEvent } from './useUploadEvent'
import { revalidateEventData } from '@/actions'
import { UploadEventForm } from '../UploadForm'

export function UploadEvent() {
  const { isLoading, handleSubmit } = useUploadEvent()
  return (
    <>
      {!isLoading ? (
        <UploadEventForm
          handleSubmit={handleSubmit}
          revalidate={revalidateEventData}
        />
      ) : (
        <Spinner />
      )}
    </>
  )
}
