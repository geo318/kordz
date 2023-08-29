'use client'

import { Button } from '@/components'
import Link from 'next/link'
import { EventApi } from '@/types'
import { useObserver } from '@/hooks'

export const ListItem = ({ e }: { e: EventApi[number] }) => {
  const { ref } = useObserver<HTMLLIElement>()

  return (
    <li
      className='event text-center flex flex-col gap-4 items-center transition-all duration-300 delay-100'
      key={e.id}
      ref={ref}
      title={e.url ? '' : 'Tickets not available yet'}
    >
      <h2 className='text-[2rem] font-bold uppercase'>{e.date}</h2>
      <div className='w-full max-w-sm text-2xl leading-normal tracking-wide '>
        <p>{e.location}</p>
        <p>{e.description}</p>
      </div>
      {e.url && (
        <Link href={e.url} target='_blank'>
          <Button className='w-32 border active:ring-blue-100 active:ring-2 hover:ring-blue-100 hover:ring-2 transition-all duration-300'>
            tickets
          </Button>
        </Link>
      )}
    </li>
  )
}
