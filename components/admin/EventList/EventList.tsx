'use client'

import { EventApi } from '@/types'
import { useEventList } from './useEventList'
import { Button, Spinner, EventModal } from '@/components'
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
    addNew,
    Reorder,
    handleReorder,
  } = useEventList(eventListPromise)

  return (
    <main>
      <FlashMessage />
      <EventModal
        defaults={activeEvent}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      <div className='flex gap-2 max-w-full'>
        <Reorder.Group
          values={eventList}
          onReorder={handleReorder}
          className='flex gap-2 overflow-x-auto'
          axis='x'
        >
          {isLoading ? (
            <div className='fixed inset-0 flex items-center justify-center'>
              <Spinner />
            </div>
          ) : (
            eventList.map((event) => (
              <Reorder.Item
                key={event.id}
                value={event}
                className='min-w-[15rem] bg-white'
              >
                <div className='flex flex-col max-w-sm p-4 rounded overflow-hidden shadow-sm border border-zinc-200 md:col-span-3 col-span-6'>
                  <p>⏳ {event.date}</p>
                  <p>👉 {event.description}</p>
                  <p>🗺 {event.location}</p>
                  {event.url && (
                    <Link
                      target='_blank'
                      href={event.url}
                      className='text-blue-500 hover:underline'
                    >
                      see destination
                    </Link>
                  )}
                  <br />
                  <Button
                    onClick={() => {
                      setActiveEvent(event)
                      setIsModalOpen((prev) => !prev)
                    }}
                    className='border py-2 w-full hover:bg-gray-100 mt-auto'
                  >
                    Edit
                  </Button>
                </div>
              </Reorder.Item>
            ))
          )}
        </Reorder.Group>
        <div
          className='flex items-center cursor-pointer justify-center flex-col max-w-sm p-4 rounded overflow-hidden shadow-sm border border-zinc-200 md:col-span-3 col-span-6'
          onClick={addNew}
        >
          <p className='text-4xl'>➕</p>
        </div>
      </div>
    </main>
  )
}
