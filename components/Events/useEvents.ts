import { EventApi } from '@/types'
import { useEffect, useState } from 'react'
import { useFlashMessage } from '..'

export const useEvents = ({
  eventsPromise,
}: {
  eventsPromise: Promise<EventApi>
}) => {
  const [events, setEvents] = useState<EventApi>([])
  const { FlashMessage, handleFlashMessage } = useFlashMessage()

  useEffect(() => {
    ;(async () => {
      try {
        const eventData = await eventsPromise
        setEvents(eventData)
      } catch (e) {
        handleFlashMessage(!!'error')
      }
    })()
  }, [eventsPromise, handleFlashMessage])

  return { FlashMessage, events }
}
