'use client'

import { EventApi } from '@/types'
import { useEventList } from './useEventList'
import { Spinner } from '..'
import { useState } from 'react'

export const EventList: React.FC<{ eventListPromise: Promise<EventApi> }> = ({
  eventListPromise,
}) => {
  const { eventList, isLoading, activeEvent, setActiveEvent } =
    useEventList(eventListPromise)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main>
      {/* <EventModal
        defaults={activeEvent}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      /> */}
      <div className='grid grid-cols-12 gap-5'>
        {isLoading ? (
          <Spinner />
        ) : (
          eventList.map((event, i) => (
            <div
              key={event.id}
              className='max-w-sm rounded overflow-hidden shadow-sm border border-zinc-200 col-span-3'
              onClick={() => {
                setActiveEvent(event)
                setIsModalOpen((prev) => !prev)
              }}
            >
              <p>{event.date}</p>
              <p>{event.description}</p>
              <p>{event.location}</p>
              <p>{event.url}</p>

              <div className='px-6 py-4'>
                <h4 className='font-bold text-xl mb-2'>{event.id}</h4>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  )
}
