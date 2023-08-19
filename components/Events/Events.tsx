'use client'

import { EventApi } from '@/types'
import { Button } from '..'
import { useEvents } from './useEvents'
import { EventsSkeleton } from './EventsSkeleton'
import Link from 'next/link'
import { dateFormatter } from './helper'

export function Events(props: { eventsPromise: Promise<EventApi> }) {
  const { isLoading, FlashMessage, events } = useEvents(props)
  return (
    <>
      <FlashMessage />
      {isLoading ? (
        <EventsSkeleton />
      ) : (
        events.length && (
          <ul className='flex flex-col gap-24'>
            {events.map((e) => (
              <li
                className='text-center flex flex-col gap-4 items-center'
                key={e.id}
              >
                <h2 className='text-[2rem] font-bold uppercase'>
                  {dateFormatter(new Date(e.date))}
                </h2>
                <div className='w-full max-w-sm text-2xl leading-normal tracking-widest '>
                  <p>{e.location}</p>
                  <p>{e.description}</p>
                </div>
                <Link href={e.url}>
                  <Button className='w-32'>tickets</Button>
                </Link>
              </li>
            ))}
          </ul>
        )
      )}
    </>
  )
}

export default Events
