import { eventSchemaApi } from '@/schema'
import { EventApi } from '@/types'
import { useEffect, useState } from 'react'
import { useFlashMessage } from '..'

export const useEvents = ({
  eventsPromise,
}: {
  eventsPromise: Promise<EventApi>
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [events, setEvents] = useState<EventApi>([])
  const { FlashMessage, handleFlashMessage } = useFlashMessage()

  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      try {
        const eventData = await eventsPromise
        const parsedEventsData = eventSchemaApi.parse(eventData)
        setEvents(parsedEventsData)
      } catch (e) {
        handleFlashMessage(!!'error')
      } finally {
        setIsLoading(false)
      }
    })()

    return () => {
      setIsLoading(false)
    }
  }, [eventsPromise, handleFlashMessage])

  return { FlashMessage, isLoading, events }
}
