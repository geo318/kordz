'use client'

import { EventApi } from '@/types'
import { useEventList } from './useEventList'
import { Button, EventModal, Spinner } from '..'
import Link from 'next/link'

export const EventList: React.FC<{ eventListPromise: Promise<EventApi> }> = ({
  eventListPromise,
}) => {
  const {
    eventList,
    isLoading,
    activeEvent,
    setActiveEvent,
    FlashMessage,
    isModalOpen,
    setIsModalOpen,
  } = useEventList(eventListPromise)

  return (
    <main>
      <FlashMessage />
      <EventModal
        defaults={activeEvent}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      <div className='grid grid-cols-12 gap-5'>
        {isLoading ? (
          <Spinner />
        ) : (
          eventList.map((event) => (
            <div
              key={event.id}
              className='max-w-sm p-4 rounded overflow-hidden shadow-sm border border-zinc-200 col-span-3'
            >
              <p>⏳ {event.date}</p>
              <p>👉 {event.description}</p>
              <p>🗺 {event.location}</p>
              <Link
                target='_blank'
                href={event.url}
                className='text-blue-500 hover:underline'
              >
                see destination
              </Link>
              <br />
              <Button
                onClick={() => {
                  setActiveEvent(event)
                  setIsModalOpen((prev) => !prev)
                }}
                className='border py-2 w-full mt-5 hover:bg-gray-100'
              >
                Edit
              </Button>
            </div>
          ))
        )}
      </div>
    </main>
  )
}
