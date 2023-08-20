'use client'

import { Button } from '@/components'
import { dateFormatter } from '../helper'
import Link from 'next/link'
import { EventApi } from '@/types'
import { useObserver } from '@/hooks'

export const ListItem = ({ e }: { e: EventApi[number] }) => {
  const { ref } = useObserver<HTMLLIElement>()

  return (
    <li
      className='event text-cen>ter flex flex-col gap-4 items-center transition-all duration-300 delay-200'
      key={e.id}
      ref={ref}
    >
      <h2 className='text-[2rem] font-bold uppercase'>
        {dateFormatter(new Date(e.date))}
      </h2>
      <div className='w-full max-w-sm text-2xl leading-normal tracking-wide '>
        <p>{e.location}</p>
        <p>{e.description}</p>
      </div>
      <Link href={e.url}>
        <Button className='w-32 border border-app-blue hover:border-black '>
          tickets
        </Button>
      </Link>
    </li>
  )
}
