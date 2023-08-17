import { eventSchemaApi } from '@/schema'
import { useEffect, useState } from 'react'
import { EventApi, MusicApi } from '@/types'

export const useEventList = (eventListPromise: Promise<EventApi>) => {
  const [eventList, setEventList] = useState<EventApi>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [activeEvent, setActiveEvent] = useState<EventApi[number]>(
    {} as EventApi[number]
  )

  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      try {
        const eventData = await eventListPromise
        const parsedEventData = eventSchemaApi.parse(eventData)
        setEventList(parsedEventData)
      } catch (e) {
        console.log(e)
      }

      setIsLoading(false)
    })()
  }, [eventListPromise])

  return { eventList, isLoading, activeEvent, setActiveEvent }
}
