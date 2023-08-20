'use client'

import { EventApi } from '@/types'
import { ListItem } from '..'
import { useEvents } from './useEvents'

export function Events(props: { eventsPromise: Promise<EventApi> }) {
  const { FlashMessage, events } = useEvents(props)
  return (
    <>
      <FlashMessage />

      <ul className='flex flex-col gap-24'>
        {events?.map((e) => (
          <ListItem e={e} key={e.id} />
        ))}
      </ul>
    </>
  )
}

export default Events
