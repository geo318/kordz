import { eventSchemaApi } from '@/schema'
import { useCallback, useEffect, useState } from 'react'
import { EventApi } from '@/types'
import { useFlashMessage } from '@/components'
import { useRouter } from 'next/navigation'
import { Reorder } from 'framer-motion'
import { revalidateEventData } from '@/actions'

export const useEventList = (eventListPromise: Promise<EventApi>) => {
  const [eventList, setEventList] = useState<EventApi>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeEvent, setActiveEvent] = useState<EventApi[number]>(
    {} as EventApi[number]
  )
  const router = useRouter()
  const { FlashMessage, handleFlashMessage } = useFlashMessage()
  const [isDragged, setIsDragged] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      try {
        const eventData = await eventListPromise
        const parsedEventData = eventSchemaApi.parse(eventData)
        setEventList(parsedEventData.sort((a, b) => a.order - b.order))
      } catch (e) {
        handleFlashMessage(!!'error')
      }

      setIsLoading(false)
    })()
  }, [handleFlashMessage])

  const addNew = useCallback(() => {
    router.push('/admin?form=event')
  }, [router])

  const handleReorder = useCallback(async (data: EventApi) => {
    setEventList(data)
  }, [])

  const handleSubmit = useCallback(async () => {
    if (!isDragged) return
    setIsLoading(true)
    try {
      await fetch('/api/events', {
        method: 'PATCH',
        body: JSON.stringify(eventList),
      })
      revalidateEventData()
    } catch (e) {
      handleFlashMessage(!!'error')
    } finally {
      setIsLoading(false)
      setIsDragged(false)
    }
  }, [eventList, isDragged, handleFlashMessage])

  return {
    eventList,
    isLoading,
    activeEvent,
    setActiveEvent,
    FlashMessage,
    isModalOpen,
    setIsModalOpen,
    addNew,
    Reorder,
    handleReorder,
    handleSubmit,
    setIsDragged,
  }
}
